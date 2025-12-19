/**
 * 单词数据库
 * 包含沪教版九年级Unit 5及相关扩展词汇，共58个单词
 */

const WordDatabase = [
    { english: 'praise', chinese: '赞扬；称赞', emoji: '👏', partOfSpeech: 'v./n.' },
    { english: 'view', chinese: '看；观看', emoji: '👀', partOfSpeech: 'v.' },
    { english: 'script', chinese: '广播稿', emoji: '📝', partOfSpeech: 'n.' },
    { english: 'director', chinese: '导演', emoji: '🎬', partOfSpeech: 'n.' },
    { english: 'make-up', chinese: '化妆', emoji: '💄', partOfSpeech: 'n.' },
    { english: 'artist', chinese: '艺术家', emoji: '🎨', partOfSpeech: 'n.' },
    { english: 'studio', chinese: '演播室', emoji: '🎥', partOfSpeech: 'n.' },
    { english: 'contestant', chinese: '比赛者', emoji: '🏆', partOfSpeech: 'n.' },
    { english: 'upon', chinese: '在……上', emoji: '⬆️', partOfSpeech: 'prep.' },
    { english: 'among', chinese: '在……中', emoji: '🔄', partOfSpeech: 'prep.' },
    { english: 'onto', chinese: '向；朝', emoji: '➡️', partOfSpeech: 'prep.' },
    { english: 'forward', chinese: '向前', emoji: '⏩', partOfSpeech: 'adv.' },
    { english: 'second', chinese: '秒', emoji: '⏱️', partOfSpeech: 'n.' },
    { english: 'relaxed', chinese: '放松的', emoji: '😌', partOfSpeech: 'adj.' },
    { english: 'ahead of', chinese: '领先', emoji: '🥇', partOfSpeech: 'phr.' },
    { english: 'beat', chinese: '赢；打败', emoji: '💪', partOfSpeech: 'v.' },
    { english: 'still', chinese: '平静的', emoji: '🤫', partOfSpeech: 'adj.' },
    { english: 'single', chinese: '单个的', emoji: '1️⃣', partOfSpeech: 'adj.' },
    { english: 'victory', chinese: '胜利', emoji: '🏅', partOfSpeech: 'n.' },
    { english: 'England', chinese: '英格兰', emoji: '🇬🇧', partOfSpeech: 'n.' },
    { english: 'lucky', chinese: '幸运的', emoji: '🍀', partOfSpeech: 'adj.' },
    { english: 'news', chinese: '新闻报道', emoji: '📰', partOfSpeech: 'n.' },
    { english: 'survey', chinese: '民意调查', emoji: '📊', partOfSpeech: 'n.' },
    { english: 'floor plan', chinese: '楼层平面图', emoji: '🗺️', partOfSpeech: 'n.' },
    { english: 'talent show', chinese: '达人秀', emoji: '🌟', partOfSpeech: 'n.' },
    { english: 'pass out', chinese: '昏迷', emoji: '😵', partOfSpeech: 'phr.v.' },
    { english: 'keep still', chinese: '保持静止', emoji: '🧘', partOfSpeech: 'phr.v.' },
    { english: 'emergency exit', chinese: '紧急出口', emoji: '🚪', partOfSpeech: 'n.' },
    { english: 'on weekdays', chinese: '在工作日', emoji: '📅', partOfSpeech: 'phr.' },

    // 扩展词汇（新增29个单词）
    { english: 'audience', chinese: '观众', emoji: '👥', partOfSpeech: 'n.' },
    { english: 'broadcast', chinese: '广播', emoji: '📻', partOfSpeech: 'v./n.' },
    { english: 'celebrity', chinese: '名人', emoji: '🌟', partOfSpeech: 'n.' },
    { english: 'drama', chinese: '戏剧', emoji: '🎭', partOfSpeech: 'n.' },
    { english: 'episode', chinese: '一集', emoji: '📺', partOfSpeech: 'n.' },
    { english: 'famous', chinese: '著名的', emoji: '🏆', partOfSpeech: 'adj.' },
    { english: 'host', chinese: '主持人', emoji: '🎤', partOfSpeech: 'n./v.' },
    { english: 'interview', chinese: '采访', emoji: '🎙️', partOfSpeech: 'n./v.' },
    { english: 'journalist', chinese: '记者', emoji: '🖊️', partOfSpeech: 'n.' },
    { english: 'magazine', chinese: '杂志', emoji: '📚', partOfSpeech: 'n.' },
    { english: 'performance', chinese: '表演', emoji: '🎪', partOfSpeech: 'n.' },
    { english: 'presenter', chinese: '主持人', emoji: '📺', partOfSpeech: 'n.' },
    { english: 'quiz', chinese: '测验', emoji: '❓', partOfSpeech: 'n.' },
    { english: 'reporter', chinese: '记者', emoji: '📰', partOfSpeech: 'n.' },
    { english: 'schedule', chinese: '时间表', emoji: '⏰', partOfSpeech: 'n.' },
    { english: 'television', chinese: '电视', emoji: '📺', partOfSpeech: 'n.' },
    { english: 'variety show', chinese: '综艺节目', emoji: '🎭', partOfSpeech: 'n.' },
    { english: 'commercial', chinese: '广告', emoji: '📢', partOfSpeech: 'n.' },
    { english: 'entertainment', chinese: '娱乐', emoji: '🎉', partOfSpeech: 'n.' },
    { english: 'fashion', chinese: '时尚', emoji: '👗', partOfSpeech: 'n.' },
    { english: 'gossip', chinese: '八卦', emoji: '💬', partOfSpeech: 'n./v.' },
    { english: 'headline', chinese: '头条', emoji: '📰', partOfSpeech: 'n.' },
    { english: 'internet', chinese: '互联网', emoji: '🌐', partOfSpeech: 'n.' },
    { english: 'journalism', chinese: '新闻业', emoji: '📝', partOfSpeech: 'n.' },
    { english: 'keyboard', chinese: '键盘', emoji: '⌨️', partOfSpeech: 'n.' },
    { english: 'livestream', chinese: '直播', emoji: '📡', partOfSpeech: 'n./v.' },
    { english: 'microscope', chinese: '显微镜', emoji: '🔬', partOfSpeech: 'n.' },
    { english: 'network', chinese: '网络', emoji: '🕸️', partOfSpeech: 'n.' },
    { english: 'podcast', chinese: '播客', emoji: '🎧', partOfSpeech: 'n.' }
];

// 年级配置映射
const GradeConfig = {
    'grade1': { time: 120, level: 'easy', pairs: 18, difficulty: 1.0 },
    'grade2': { time: 120, level: 'easy', pairs: 18, difficulty: 1.0 },
    'grade3': { time: 150, level: 'easy', pairs: 18, difficulty: 1.5 },
    'grade4': { time: 150, level: 'easy', pairs: 18, difficulty: 1.5 },
    'grade5': { time: 180, level: 'hard', pairs: 20, difficulty: 2.0 },
    'grade6': { time: 180, level: 'hard', pairs: 20, difficulty: 2.0 }
};

// 获取指定数量的单词
function getWords(count) {
    // 随机选择count个单词
    const shuffled = [...WordDatabase].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// 获取单词的英文和中文卡片数据
function generateCards(wordCount) {
    const words = getWords(wordCount);
    const cards = [];

    words.forEach(word => {
        // 英文卡片
        cards.push({
            type: 'english',
            content: word.english,
            matchId: word.english,
            emoji: word.emoji
        });
        // 中文卡片
        cards.push({
            type: 'chinese',
            content: word.chinese,
            matchId: word.english,
            emoji: word.emoji
        });
    });

    // 打乱卡片顺序
    return shuffleArray(cards);
}

// 打乱数组
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}
