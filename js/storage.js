/**
 * 本地存储管理
 * 使用LocalStorage保存游戏进度和成就
 */

const StorageManager = {
    STORAGE_KEY: 'word-match-game-progress',
    ACHIEVEMENT_KEY: 'word-match-game-achievements',

    /**
     * 保存游戏进度
     * @param {Object} gameData - 游戏数据
     */
    saveProgress(gameData) {
        try {
            const progress = this.loadProgress();

            // 更新数据
            progress.totalGames = (progress.totalGames || 0) + 1;
            progress.bestScore = Math.max(progress.bestScore || 0, gameData.score);

            // 计算平均分
            const totalScore = (progress.averageScore || 0) * (progress.totalGames - 1) + gameData.score;
            progress.averageScore = Math.round(totalScore / progress.totalGames);

            // 更新最后游戏时间
            progress.lastPlayDate = new Date().toISOString();

            // 记录本次游戏数据
            if (!progress.gameHistory) {
                progress.gameHistory = [];
            }
            progress.gameHistory.push({
                date: new Date().toISOString(),
                score: gameData.score,
                accuracy: gameData.accuracy,
                timeUsed: gameData.timeUsed,
                grade: gameData.grade,
                combo: gameData.maxCombo
            });

            // 只保留最近20条记录
            if (progress.gameHistory.length > 20) {
                progress.gameHistory = progress.gameHistory.slice(-20);
            }

            // 保存到localStorage
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
            console.log('游戏进度已保存:', progress);

            return progress;
        } catch (error) {
            console.error('保存游戏进度失败:', error);
            return null;
        }
    },

    /**
     * 加载游戏进度
     */
    loadProgress() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : {};
        } catch (error) {
            console.error('加载游戏进度失败:', error);
            return {};
        }
    },

    /**
     * 获取统计数据
     */
    getStats() {
        const progress = this.loadProgress();
        return {
            totalGames: progress.totalGames || 0,
            bestScore: progress.bestScore || 0,
            averageScore: progress.averageScore || 0,
            lastPlayDate: progress.lastPlayDate || null
        };
    },

    /**
     * 记录单词掌握情况
     * @param {Array} correctWords - 正确匹配的单词
     * @param {Array} wrongWords - 错误匹配的单词
     */
    updateWordMastery(correctWords, wrongWords) {
        try {
            const progress = this.loadProgress();

            if (!progress.masteredWords) progress.masteredWords = [];
            if (!progress.weakWords) progress.weakWords = [];

            // 记录正确匹配的单词（累积计数）
            correctWords.forEach(word => {
                if (!progress.masteredWords[word]) {
                    progress.masteredWords[word] = { count: 0, lastCorrect: null };
                }
                progress.masteredWords[word].count++;
                progress.masteredWords[word].lastCorrect = new Date().toISOString();
            });

            // 记录错误匹配的单词
            wrongWords.forEach(word => {
                if (!progress.weakWords[word]) {
                    progress.weakWords[word] = { count: 0, lastWrong: null };
                }
                progress.weakWords[word].count++;
                progress.weakWords[word].lastWrong = new Date().toISOString();
            });

            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
        } catch (error) {
            console.error('更新单词掌握情况失败:', error);
        }
    },

    /**
     * 获取成就列表
     */
    getAchievements() {
        try {
            const data = localStorage.getItem(this.ACHIEVEMENT_KEY);
            return data ? JSON.parse(data) : {};
        } catch (error) {
            console.error('加载成就失败:', error);
            return {};
        }
    },

    /**
     * 检查并解锁成就
     * @param {Object} gameData - 游戏数据
     */
    checkAchievements(gameData) {
        const achievements = this.getAchievements();
        const unlocked = [];

        // 定义成就条件
        const achievementRules = [
            {
                id: 'first_game',
                name: '初学者',
                description: '完成第一次游戏',
                condition: () => gameData.totalGames >= 1,
                reward: 50
            },
            {
                id: 'combo_10',
                name: '连击达人',
                description: '达到10连击',
                condition: () => gameData.maxCombo >= 10,
                reward: 100
            },
            {
                id: 'speed_master',
                name: '速度之王',
                description: '30秒内完成5次匹配',
                condition: () => gameData.matchesIn30s >= 5,
                reward: 150
            },
            {
                id: 'word_master',
                name: '单词大师',
                description: '累计完成50次游戏',
                condition: () => gameData.totalGames >= 50,
                reward: 300
            },
            {
                id: 'perfect_accuracy',
                name: '完美准确',
                description: '单局正确率100%',
                condition: () => gameData.accuracy === 100,
                reward: 200
            }
        ];

        // 检查每个成就
        achievementRules.forEach(rule => {
            if (!achievements[rule.id] && rule.condition()) {
                achievements[rule.id] = {
                    ...rule,
                    unlockedAt: new Date().toISOString(),
                    unlocked: true
                };
                unlocked.push(rule);
                console.log('解锁成就:', rule.name);
            }
        });

        // 保存成就
        if (unlocked.length > 0) {
            localStorage.setItem(this.ACHIEVEMENT_KEY, JSON.stringify(achievements));
        }

        return unlocked;
    },

    /**
     * 清除所有数据（用于测试）
     */
    clearAll() {
        localStorage.removeItem(this.STORAGE_KEY);
        localStorage.removeItem(this.ACHIEVEMENT_KEY);
        console.log('所有数据已清除');
    }
};
