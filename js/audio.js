/**
 * 音频管理器
 * 处理背景音乐和音效播放
 */

const AudioManager = {
    backgroundMusic: null,
    rewardSound: null,
    isBackgroundMusicEnabled: true,
    isSoundEnabled: true,
    volume: {
        background: 0.2,  // 背景音乐音量（20%）
        sound: 0.5        // 音效音量（50%）
    },

    /**
     * 初始化音频系统
     */
    init() {
        console.log('初始化音频管理器...');

        // 创建背景音乐音频对象
        this.backgroundMusic = new Audio();
        this.backgroundMusic.src = 'background.mp3';
        this.backgroundMusic.loop = true;
        this.backgroundMusic.volume = this.volume.background;

        // 创建奖励音效音频对象
        this.rewardSound = new Audio();
        this.rewardSound.src = 'welldown.mp3';
        this.rewardSound.volume = this.volume.sound;

        // 预加载音频
        this.backgroundMusic.preload = 'auto';
        this.rewardSound.preload = 'auto';

        console.log('音频管理器初始化完成');
    },

    /**
     * 播放背景音乐
     */
    playBackgroundMusic() {
        if (!this.isBackgroundMusicEnabled) {
            console.log('背景音乐已禁用');
            return;
        }

        if (this.backgroundMusic) {
            this.backgroundMusic.play().then(() => {
                console.log('背景音乐播放中...');
            }).catch(error => {
                console.log('背景音乐播放失败:', error.message);
            });
        }
    },

    /**
     * 暂停背景音乐
     */
    pauseBackgroundMusic() {
        if (this.backgroundMusic && !this.backgroundMusic.paused) {
            this.backgroundMusic.pause();
            console.log('背景音乐已暂停');
        }
    },

    /**
     * 播放奖励音效
     */
    playRewardSound() {
        if (!this.isSoundEnabled) {
            console.log('音效已禁用');
            return;
        }

        if (this.rewardSound) {
            // 重置播放位置，允许快速连续播放
            this.rewardSound.currentTime = 0;
            this.rewardSound.play().then(() => {
                console.log('奖励音效播放');
            }).catch(error => {
                console.log('奖励音效播放失败:', error.message);
            });
        }
    },

    /**
     * 切换背景音乐开关
     */
    toggleBackgroundMusic() {
        this.isBackgroundMusicEnabled = !this.isBackgroundMusicEnabled;

        if (this.isBackgroundMusicEnabled) {
            this.playBackgroundMusic();
        } else {
            this.pauseBackgroundMusic();
        }

        console.log('背景音乐:', this.isBackgroundMusicEnabled ? '开启' : '关闭');
    },

    /**
     * 切换音效开关
     */
    toggleSound() {
        this.isSoundEnabled = !this.isSoundEnabled;
        console.log('音效:', this.isSoundEnabled ? '开启' : '关闭');
    },

    /**
     * 设置背景音乐音量
     */
    setBackgroundVolume(volume) {
        this.volume.background = Math.max(0, Math.min(1, volume));
        if (this.backgroundMusic) {
            this.backgroundMusic.volume = this.volume.background;
        }
        console.log('背景音乐音量:', this.volume.background);
    },

    /**
     * 设置音效音量
     */
    setSoundVolume(volume) {
        this.volume.sound = Math.max(0, Math.min(1, volume));
        if (this.rewardSound) {
            this.rewardSound.volume = this.volume.sound;
        }
        console.log('音效音量:', this.volume.sound);
    },

    /**
     * 清理资源
     */
    cleanup() {
        if (this.backgroundMusic) {
            this.pauseBackgroundMusic();
        }
        console.log('音频管理器已清理');
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    AudioManager.init();
});
