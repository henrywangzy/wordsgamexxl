/**
 * 语音朗读功能
 * 使用Web Speech API实现单词朗读
 */

const SpeechManager = {
    voices: [],
    voiceLoaded: false,

    /**
     * 初始化语音系统
     */
    init() {
        // 检查浏览器支持
        if (!('speechSynthesis' in window)) {
            console.warn('当前浏览器不支持语音合成功能');
            return;
        }

        // 获取可用语音列表
        this.loadVoices();

        // 语音列表可能异步加载，监听回调
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = () => {
                this.loadVoices();
            };
        }
    },

    /**
     * 加载语音列表
     */
    loadVoices() {
        this.voices = speechSynthesis.getVoices();
        this.voiceLoaded = this.voices.length > 0;
        console.log('已加载语音列表，共', this.voices.length, '个语音');
    },

    /**
     * 获取英文语音
     */
    getEnglishVoice() {
        if (!this.voiceLoaded) return null;

        // 优先选择Google或Microsoft的英文语音
        const preferredVoices = [
            'Google US English',
            'Microsoft Zira - English (United States)',
            'Alex'
        ];

        // 查找首选语音
        for (const voiceName of preferredVoices) {
            const voice = this.voices.find(v => v.name === voiceName);
            if (voice) return voice;
        }

        // 查找其他英文语音
        const englishVoice = this.voices.find(v =>
            v.lang.startsWith('en') &&
            (v.name.includes('English') || v.name.includes('US'))
        );

        return englishVoice || this.voices[0];
    },

    /**
     * 朗读单词
     * @param {string} text - 要朗读的文本
     * @param {number} repeat - 重复次数，默认为1
     */
    speak(text, repeat = 1) {
        if (!('speechSynthesis' in window)) {
            console.warn('浏览器不支持语音合成');
            return;
        }

        // 停止当前播放
        speechSynthesis.cancel();

        let count = 0;
        const speakNext = () => {
            if (count >= repeat) return;

            const utterance = new SpeechSynthesisUtterance(text);
            const voice = this.getEnglishVoice();

            if (voice) {
                utterance.voice = voice;
            }

            // 设置语音参数
            utterance.lang = 'en-US';
            utterance.rate = 0.85; // 语速
            utterance.pitch = 1.0; // 音调
            utterance.volume = 0.9; // 音量

            utterance.onend = () => {
                count++;
                if (count < repeat) {
                    // 间隔200ms后播放下一次
                    setTimeout(speakNext, 200);
                }
            };

            utterance.onerror = (event) => {
                console.error('语音播放错误:', event.error);
            };

            speechSynthesis.speak(utterance);
        };

        speakNext();
    },

    /**
     * 停止当前朗读
     */
    stop() {
        if ('speechSynthesis' in window) {
            speechSynthesis.cancel();
        }
    }
};

// 触觉反馈管理器
const VibrationManager = {
    /**
     * 触发振动反馈
     * @param {string} type - 反馈类型
     */
    trigger(type) {
        if (!('vibrate' in navigator)) {
            return; // 设备不支持振动
        }

        const patterns = {
            select: 10,              // 选中卡片 - 轻触振动10ms
            success: [50, 30, 50],   // 匹配成功 - 中等振动三次
            failure: 30,             // 匹配失败 - 轻微振动30ms
            combo: 80,               // 连击 - 强振动80ms
            victory: [50, 100, 50, 100, 50] // 游戏胜利 - 脉冲振动
        };

        const pattern = patterns[type];
        if (pattern) {
            navigator.vibrate(pattern);
            console.log('振动反馈:', type);
        }
    }
};
