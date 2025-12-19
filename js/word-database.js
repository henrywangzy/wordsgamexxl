/**
 * 单词数据库
 * 包含沪教版九年级Unit 5及相关扩展词汇，共58个单词
 */

const WordDatabase = [
    { id: 'word1', english: 'praise', chinese: '赞扬；称赞', emoji: '👏', partOfSpeech: 'v./n.' },
    { id: 'word2', english: 'view', chinese: '看；观看', emoji: '👀', partOfSpeech: 'v.' },
    { id: 'word3', english: 'script', chinese: '广播稿', emoji: '📝', partOfSpeech: 'n.' },
    { id: 'word4', english: 'director', chinese: '导演', emoji: '🎬', partOfSpeech: 'n.' },
    { id: 'word5', english: 'make-up', chinese: '化妆', emoji: '💄', partOfSpeech: 'n.' },
    { id: 'word6', english: 'artist', chinese: '艺术家', emoji: '🎨', partOfSpeech: 'n.' },
    { id: 'word7', english: 'studio', chinese: '演播室', emoji: '🎥', partOfSpeech: 'n.' },
    { id: 'word8', english: 'contestant', chinese: '比赛者', emoji: '🏆', partOfSpeech: 'n.' },
    { id: 'word9', english: 'upon', chinese: '在……上', emoji: '⬆️', partOfSpeech: 'prep.' },
    { id: 'word10', english: 'among', chinese: '在……中', emoji: '🔄', partOfSpeech: 'prep.' },
    { id: 'word11', english: 'onto', chinese: '向；朝', emoji: '➡️', partOfSpeech: 'prep.' },
    { id: 'word12', english: 'forward', chinese: '向前', emoji: '⏩', partOfSpeech: 'adv.' },
    { id: 'word13', english: 'second', chinese: '秒', emoji: '⏱️', partOfSpeech: 'n.' },
    { id: 'word14', english: 'relaxed', chinese: '放松的', emoji: '😌', partOfSpeech: 'adj.' },
    { id: 'word15', english: 'ahead of', chinese: '领先', emoji: '🥇', partOfSpeech: 'phr.' },
    { id: 'word16', english: 'beat', chinese: '赢；打败', emoji: '💪', partOfSpeech: 'v.' },
    { id: 'word17', english: 'still', chinese: '平静的', emoji: '🤫', partOfSpeech: 'adj.' },
    { id: 'word18', english: 'single', chinese: '单个的', emoji: '1️⃣', partOfSpeech: 'adj.' },
    { id: 'word19', english: 'victory', chinese: '胜利', emoji: '🏅', partOfSpeech: 'n.' },
    { id: 'word20', english: 'England', chinese: '英格兰', emoji: '🇬🇧', partOfSpeech: 'n.' },
    { id: 'word21', english: 'lucky', chinese: '幸运的', emoji: '🍀', partOfSpeech: 'adj.' },
    { id: 'word22', english: 'news', chinese: '新闻报道', emoji: '📰', partOfSpeech: 'n.' },
    { id: 'word23', english: 'survey', chinese: '民意调查', emoji: '📊', partOfSpeech: 'n.' },
    { id: 'word24', english: 'floor plan', chinese: '楼层平面图', emoji: '🗺️', partOfSpeech: 'n.' },
    { id: 'word25', english: 'talent show', chinese: '达人秀', emoji: '🌟', partOfSpeech: 'n.' },
    { id: 'word26', english: 'pass out', chinese: '昏迷', emoji: '😵', partOfSpeech: 'phr.v.' },
    { id: 'word27', english: 'keep still', chinese: '保持静止', emoji: '🧘', partOfSpeech: 'phr.v.' },
    { id: 'word28', english: 'emergency exit', chinese: '紧急出口', emoji: '🚪', partOfSpeech: 'n.' },
    { id: 'word29', english: 'on weekdays', chinese: '在工作日', emoji: '📅', partOfSpeech: 'phr.' },

    // 扩展词汇（新增29个单词）
    { id: 'word30', english: 'audience', chinese: '观众', emoji: '👥', partOfSpeech: 'n.' },
    { id: 'word31', english: 'broadcast', chinese: '广播', emoji: '📻', partOfSpeech: 'v./n.' },
    { id: 'word32', english: 'celebrity', chinese: '名人', emoji: '🌟', partOfSpeech: 'n.' },
    { id: 'word33', english: 'drama', chinese: '戏剧', emoji: '🎭', partOfSpeech: 'n.' },
    { id: 'word34', english: 'episode', chinese: '一集', emoji: '📺', partOfSpeech: 'n.' },
    { id: 'word35', english: 'famous', chinese: '著名的', emoji: '🏆', partOfSpeech: 'adj.' },
    { id: 'word36', english: 'host', chinese: '主持人', emoji: '🎤', partOfSpeech: 'n./v.' },
    { id: 'word37', english: 'interview', chinese: '采访', emoji: '🎙️', partOfSpeech: 'n./v.' },
    { id: 'word38', english: 'journalist', chinese: '记者', emoji: '🖊️', partOfSpeech: 'n.' },
    { id: 'word39', english: 'magazine', chinese: '杂志', emoji: '📚', partOfSpeech: 'n.' },
    { id: 'word40', english: 'performance', chinese: '表演', emoji: '🎪', partOfSpeech: 'n.' },
    { id: 'word41', english: 'presenter', chinese: '主持人', emoji: '📺', partOfSpeech: 'n.' },
    { id: 'word42', english: 'quiz', chinese: '测验', emoji: '❓', partOfSpeech: 'n.' },
    { id: 'word43', english: 'reporter', chinese: '记者', emoji: '📰', partOfSpeech: 'n.' },
    { id: 'word44', english: 'schedule', chinese: '时间表', emoji: '⏰', partOfSpeech: 'n.' },
    { id: 'word45', english: 'television', chinese: '电视', emoji: '📺', partOfSpeech: 'n.' },
    { id: 'word46', english: 'variety show', chinese: '综艺节目', emoji: '🎭', partOfSpeech: 'n.' },
    { id: 'word47', english: 'commercial', chinese: '广告', emoji: '📢', partOfSpeech: 'n.' },
    { id: 'word48', english: 'entertainment', chinese: '娱乐', emoji: '🎉', partOfSpeech: 'n.' },
    { id: 'word49', english: 'fashion', chinese: '时尚', emoji: '👗', partOfSpeech: 'n.' },
    { id: 'word50', english: 'gossip', chinese: '八卦', emoji: '💬', partOfSpeech: 'n./v.' },
    { id: 'word51', english: 'headline', chinese: '头条', emoji: '📰', partOfSpeech: 'n.' },
    { id: 'word52', english: 'internet', chinese: '互联网', emoji: '🌐', partOfSpeech: 'n.' },
    { id: 'word53', english: 'journalism', chinese: '新闻业', emoji: '📝', partOfSpeech: 'n.' },
    { id: 'word54', english: 'keyboard', chinese: '键盘', emoji: '⌨️', partOfSpeech: 'n.' },
    { id: 'word55', english: 'livestream', chinese: '直播', emoji: '📡', partOfSpeech: 'n./v.' },
    { id: 'word56', english: 'microscope', chinese: '显微镜', emoji: '🔬', partOfSpeech: 'n.' },
    { id: 'word57', english: 'network', chinese: '网络', emoji: '🕸️', partOfSpeech: 'n.' },
    { id: 'word58', english: 'podcast', chinese: '播客', emoji: '🎧', partOfSpeech: 'n.' }
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
        // 使用单词的ID作为匹配键，避免特殊字符问题
        const matchId = word.id;

        // 英文卡片
        cards.push({
            type: 'english',
            content: word.english,
            matchId: matchId,
            emoji: word.emoji
        });
        // 中文卡片
        cards.push({
            type: 'chinese',
            content: word.chinese,
            matchId: matchId,
            emoji: word.emoji
        });
    });

    // 打乱卡片顺序
    const shuffledCards = shuffleArray(cards);

    // 验证卡片配对逻辑
    if (!validateCardPairs(shuffledCards)) {
        console.error('卡片配对验证失败！');
        console.log('卡片列表:', shuffledCards);
    }

    return shuffledCards;
}

// 验证卡片配对逻辑
function validateCardPairs(cards) {
    // 检查每个matchId是否都有英文和中文两个卡片
    const matchGroups = {};

    cards.forEach(card => {
        if (!matchGroups[card.matchId]) {
            matchGroups[card.matchId] = [];
        }
        matchGroups[card.matchId].push(card.type);
    });

    // 验证每个单词都有英文和中文
    for (const [matchId, types] of Object.entries(matchGroups)) {
        const hasEnglish = types.includes('english');
        const hasChinese = types.includes('chinese');

        if (!hasEnglish || !hasChinese) {
            console.error(`配对错误：${matchId} 缺少 ${!hasEnglish ? '英文' : ''} ${!hasChinese ? '中文' : ''}`);
            return false;
        }

        // 检查是否有重复的英文或中文
        const englishCount = types.filter(t => t === 'english').length;
        const chineseCount = types.filter(t => t === 'chinese').length;

        if (englishCount !== 1 || chineseCount !== 1) {
            console.error(`配对错误：${matchId} 重复！英文:${englishCount} 中文:${chineseCount}`);
            return false;
        }
    }

    console.log('✅ 卡片配对验证通过！', Object.keys(matchGroups).length, '对单词');
    return true;
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
