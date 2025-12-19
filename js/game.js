/**
 * 游戏主逻辑
 */

const Game = {
    // 游戏状态
    currentGrade: null,
    selectedTiles: [],
    gameScore: 0,
    gameCombo: 0,
    gameTime: 120,
    gameTimer: null,
    isPaused: false,
    matchedPairs: 0,
    totalPairs: 0,
    correctMatches: 0,
    wrongMatches: 0,
    gameStartTime: null,
    maxCombo: 0,

    /**
     * 初始化游戏
     */
    init() {
        console.log('游戏初始化...');
        // 初始化语音系统
        SpeechManager.init();

        // 尝试播放背景音乐（首页音乐）
        // 注意：由于浏览器自动播放策略，可能需要用户首次交互后才能播放
        setTimeout(() => {
            AudioManager.playBackgroundMusic();
        }, 500);
    },

    /**
     * 页面切换
     */
    showPage(pageId) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active', 'prev');
            if (page.id === pageId) {
                page.classList.add('active');
            } else if (page.classList.contains('active')) {
                page.classList.add('prev');
            }
        });
    },

    /**
     * 选择年级
     */
    selectGrade(grade) {
        this.currentGrade = grade;
        const config = GradeConfig[grade];

        // 更新UI
        document.querySelectorAll('.grade-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.closest('.grade-btn').classList.add('active');

        // 振动反馈
        VibrationManager.trigger('select');

        // 确保背景音乐在游戏开始前播放（用户交互后可以自动播放）
        AudioManager.playBackgroundMusic();

        // 200ms后开始游戏
        setTimeout(() => {
            this.startGame();
        }, 200);
    },

    /**
     * 开始游戏
     */
    startGame() {
        console.log('开始游戏...');
        const config = GradeConfig[this.currentGrade];
        // 背景音乐已在用户交互后自动播放，无需重复调用

        // 重置游戏状态
        this.resetGameState(config);

        // 生成游戏板
        this.generateGameBoard(config);

        // 更新统计
        this.updateStats();

        // 跳转到游戏页
        this.showPage('gamePage');

        // 启动计时器
        this.startTimer();
    },

    /**
     * 重置游戏状态
     */
    resetGameState(config) {
        this.selectedTiles = [];
        this.gameScore = 0;
        this.gameCombo = 0;
        this.gameTime = config.time;
        this.isPaused = false;
        this.matchedPairs = 0;
        this.totalPairs = config.pairs;
        this.correctMatches = 0;
        this.wrongMatches = 0;
        this.maxCombo = 0;
        this.gameStartTime = Date.now();
    },

    /**
     * 生成游戏板
     */
    generateGameBoard(config) {
        const gameBoard = document.getElementById('gameBoard');
        gameBoard.className = `game-board ${config.level}`;
        gameBoard.innerHTML = '';

        // 生成卡片数据
        const cards = generateCards(config.pairs);

        // 创建卡片元素
        cards.forEach((card, index) => {
            const tileElement = document.createElement('div');
            tileElement.className = 'word-tile';
            tileElement.dataset.index = index;
            tileElement.dataset.matchId = card.matchId;
            tileElement.dataset.type = card.type;
            tileElement.innerHTML = `
                <div class="word-emoji">${card.emoji}</div>
                <div class="word-content">${card.content}</div>
            `;
            tileElement.onclick = () => this.selectTile(tileElement);
            gameBoard.appendChild(tileElement);
        });
    },

    /**
     * 选择卡片
     */
    selectTile(tileElement) {
        // 已匹配的卡片不能点击
        if (tileElement.classList.contains('matched')) return;

        // 取消已选中的卡片
        if (tileElement.classList.contains('selected')) {
            tileElement.classList.remove('selected');
            this.selectedTiles = this.selectedTiles.filter(t => t.element !== tileElement);
            return;
        }

        // 选中卡片
        tileElement.classList.add('selected');
        this.selectedTiles.push({ element: tileElement });

        // 点击英文单词时朗读
        if (tileElement.dataset.type === 'english') {
            SpeechManager.speak(tileElement.querySelector('.word-content').textContent, 1);
        }

        // 振动反馈
        VibrationManager.trigger('select');

        // 检查匹配
        if (this.selectedTiles.length === 2) {
            setTimeout(() => this.checkMatch(), 300);
        }
    },

    /**
     * 检查匹配
     */
    checkMatch() {
        const [tile1, tile2] = this.selectedTiles;

        const isMatch = tile1.element.dataset.matchId === tile2.element.dataset.matchId &&
                        tile1.element.dataset.type !== tile2.element.dataset.type;

        if (isMatch) {
            // 匹配成功
            this.handleMatchSuccess(tile1.element, tile2.element);
        } else {
            // 匹配失败
            this.handleMatchFailure(tile1.element, tile2.element);
        }

        this.selectedTiles = [];
        this.updateStats();
    },

    /**
     * 处理匹配成功
     */
    handleMatchSuccess(tile1, tile2) {
        // 移除选中状态
        tile1.classList.remove('selected');
        tile2.classList.remove('selected');

        // 添加匹配成功动画
        tile1.classList.add('matched');
        tile2.classList.add('matched');

        // 更新连击和得分
        this.gameCombo++;
        this.maxCombo = Math.max(this.maxCombo, this.gameCombo);

        const config = GradeConfig[this.currentGrade];
        const comboBonus = this.gameCombo * 10;
        const baseScore = 100;
        const difficultyBonus = config.difficulty;
        const mobileBonus = 1.2; // 移动端加成

        this.gameScore += Math.round((baseScore + comboBonus) * difficultyBonus * mobileBonus);

        this.correctMatches++;
        this.matchedPairs++;

        // 振动反馈
        // 播放奖励音效
        AudioManager.playRewardSound();
        VibrationManager.trigger('success');

        // 连击奖励
        if (this.gameCombo >= 5 && this.gameCombo % 5 === 0) {
            VibrationManager.trigger('combo');
        }

        // 匹配成功后自动朗读英文单词（延迟500ms）
        const englishWord = tile1.dataset.type === 'english'
            ? tile1.querySelector('.word-content').textContent
            : tile2.querySelector('.word-content').textContent;

        setTimeout(() => {
            SpeechManager.speak(englishWord, 1);
        }, 500);

        console.log('匹配成功！连击:', this.gameCombo, '得分:', this.gameScore);

        // 检查游戏是否结束
        if (this.matchedPairs >= this.totalPairs) {
            setTimeout(() => this.endGame(true), 1000);
        }
    },

    /**
     * 处理匹配失败
     */
    handleMatchFailure(tile1, tile2) {
        // 添加错误动画
        tile1.classList.add('wrong');
        tile2.classList.add('wrong');

        this.wrongMatches++;

        // 振动反馈
        VibrationManager.trigger('failure');

        setTimeout(() => {
            tile1.classList.remove('selected', 'wrong');
            tile2.classList.remove('selected', 'wrong');
        }, 500);

        // 重置连击
        this.gameCombo = 0;

        console.log('匹配失败');
    },

    /**
     * 更新统计信息
     */
    updateStats() {
        // 更新游戏页统计
        document.getElementById('gameScore').textContent = this.gameScore;
        document.getElementById('gameCombo').textContent = this.gameCombo;
        document.getElementById('gameTimer').textContent = this.gameTime;

        // 计算正确率
        const totalAttempts = this.correctMatches + this.wrongMatches;
        const accuracy = totalAttempts > 0
            ? Math.round((this.correctMatches / totalAttempts) * 100)
            : 100;
        document.getElementById('gameAccuracy').textContent = accuracy + '%';

        // 更新进度条
        const progress = (this.matchedPairs / this.totalPairs) * 100;
        document.getElementById('gameProgress').style.width = progress + '%';
    },

    /**
     * 启动计时器
     */
    startTimer() {
        this.gameTimer = setInterval(() => {
            if (this.isPaused) return;

            this.gameTime--;
            document.getElementById('gameTimer').textContent = this.gameTime;

            if (this.gameTime <= 0) {
                this.endGame(false);
            }
        }, 1000);
    },

    /**
     * 暂停/继续游戏
     */
    togglePause() {
        this.isPaused = !this.isPaused;
        const btn = document.querySelector('.control-btn.pause');

        if (this.isPaused) {
            btn.textContent = '▶️';
            if (this.gameTimer) {
                clearInterval(this.gameTimer);
                this.gameTimer = null;
            }
            console.log('游戏已暂停');
        } else {
            btn.textContent = '⏸️';
            this.startTimer();
            console.log('游戏继续');
        }
    },

    /**
     * 结束游戏
     */
    endGame(isWin) {
        if (this.gameTimer) {
            clearInterval(this.gameTimer);
            this.gameTimer = null;
        }

        // 暂停背景音乐
        AudioManager.pauseBackgroundMusic();
        const timeUsed = Math.round((Date.now() - this.gameStartTime) / 1000);
        const accuracy = this.correctMatches + this.wrongMatches > 0
            ? Math.round((this.correctMatches / (this.correctMatches + this.wrongMatches)) * 100)
            : 100;

        // 保存游戏进度
        const gameData = {
            score: this.gameScore,
            accuracy: accuracy,
            timeUsed: timeUsed,
            grade: this.currentGrade,
            maxCombo: this.maxCombo,
            matchesIn30s: this.calculateMatchesIn30s()
        };

        const progress = StorageManager.saveProgress(gameData);
        const achievements = StorageManager.checkAchievements({
            ...gameData,
            totalGames: (progress?.totalGames || 0)
        });

        // 振动反馈
        if (isWin) {
            VibrationManager.trigger('victory');
        }

        // 显示结束页
        this.showGameEndPage(isWin, gameData, achievements);
    },

    /**
     * 计算30秒内的匹配次数
     */
    calculateMatchesIn30s() {
        // 简化实现，返回当前连击数
        return this.maxCombo;
    },

    /**
     * 显示游戏结束页
     */
    showGameEndPage(isWin, gameData, achievements) {
        this.showPage('gameEndPage');

        // 更新结束页数据
        const subtitle = isWin ? '恭喜完成所有配对！' : '时间到，再接再厉！';
        document.getElementById('endSubtitle').textContent = subtitle;

        document.getElementById('finalScore').textContent = this.gameScore;
        document.getElementById('finalAccuracy').textContent = gameData.accuracy + '%';
        document.getElementById('finalTime').textContent = gameData.timeUsed + '秒';
        document.getElementById('finalCombo').textContent = this.maxCombo;

        // 显示成就
        const achievementDiv = document.getElementById('achievement');
        if (achievements && achievements.length > 0) {
            const achievementNames = achievements.map(a => a.name).join('、');
            achievementDiv.textContent = `🎉 解锁成就：${achievementNames}！`;
            achievementDiv.style.display = 'block';
        } else {
            // 显示最高连击成就
            if (this.maxCombo >= 10) {
                achievementDiv.textContent = `🏆 最高连击：${this.maxCombo}！`;
                achievementDiv.style.display = 'block';
            } else {
                achievementDiv.style.display = 'none';
            }
        }
    },

    /**
     * 返回首页
     */
    backToHome() {
        if (this.gameTimer) {
            clearInterval(this.gameTimer);
            this.gameTimer = null;
        }
        this.showPage('homePage');

        // 返回首页时继续播放背景音乐
        AudioManager.playBackgroundMusic();
    },

    /**
     * 重新开始游戏
     */
    restartGame() {
        if (this.gameTimer) {
            clearInterval(this.gameTimer);
            this.gameTimer = null;
        }
        this.showPage('gamePage');
        this.startGame();
    },

    /**
     * 分享成绩
     */
    shareScore() {
        const stats = StorageManager.getStats();
        const text = `我在玩单词消消乐！\n最终得分：${this.gameScore}分\n正确率：${document.getElementById('finalAccuracy').textContent}\n最高连击：${this.maxCombo}\n快来挑战我吧！`;

        if (navigator.share) {
            navigator.share({
                title: '单词消消乐',
                text: text,
                url: window.location.href
            }).then(() => {
                console.log('分享成功');
            }).catch((error) => {
                console.log('分享失败:', error);
                this.copyToClipboard(text);
            });
        } else {
            this.copyToClipboard(text);
        }
    },

    /**
     * 复制到剪贴板
     */
    copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                alert('成绩已复制到剪贴板！');
            }).catch(() => {
                this.fallbackCopyText(text);
            });
        } else {
            this.fallbackCopyText(text);
        }
    },

    /**
     * 降级复制方法
     */
    fallbackCopyText(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            alert('成绩已复制到剪贴板！');
        } catch (err) {
            alert('复制失败，请手动复制');
        }
        document.body.removeChild(textArea);
    },

    /**
     * 检查屏幕方向
     * 注：现代移动浏览器已能智能处理横竖屏切换，禁用警告功能
     */
    checkOrientation() {
        // 禁用横屏警告，避免阻挡交互
        // if (window.innerWidth > window.innerHeight) {
        //     this.showOrientationWarning();
        // } else {
        //     this.hideOrientationWarning();
        // }
    },

    /**
     * 显示横屏警告
     */
    showOrientationWarning() {
        if (document.querySelector('.orientation-warning')) return;

        const warning = document.createElement('div');
        warning.className = 'orientation-warning';
        warning.innerHTML = `
            <div class="warning-icon">📱</div>
            <p>请使用竖屏模式获得最佳体验</p>
        `;
        document.body.appendChild(warning);
    },

    /**
     * 隐藏横屏警告
     */
    hideOrientationWarning() {
        const warning = document.querySelector('.orientation-warning');
        if (warning) {
            warning.remove();
        }
    },

    /**
     * 切换背景音乐
     */
    toggleMusic() {
        AudioManager.toggleBackgroundMusic();
        const btn = document.querySelector('.control-btn.music');
        if (AudioManager.isBackgroundMusicEnabled) {
            btn.textContent = '🎵';
        } else {
            btn.textContent = '🔇';
        }
    },

    /**
     * 切换音效
     */
    toggleSound() {
        AudioManager.toggleSound();
        const btn = document.querySelector('.control-btn.sound');
        if (AudioManager.isSoundEnabled) {
            btn.textContent = '🔊';
        } else {
            btn.textContent = '🔇';
        }
    }
};
