/**
 * 单词数据库
 * 包含沪教版九年级Unit 5及相关扩展词汇，共58个单词
 */

const WordDatabase = [
    // 一年级 - 最简单词汇（10个）
    { id: 'word1', grade: 1, english: 'news', chinese: '新闻', emoji: '📰', partOfSpeech: 'n.' },
    { id: 'word2', grade: 1, english: 'view', chinese: '看', emoji: '👀', partOfSpeech: 'v.' },
    { id: 'word3', grade: 1, english: 'music', chinese: '音乐', emoji: '🎵', partOfSpeech: 'n.' },
    { id: 'word4', grade: 1, english: 'game', chinese: '游戏', emoji: '🎮', partOfSpeech: 'n.' },
    { id: 'word5', grade: 1, english: 'fun', chinese: '有趣', emoji: '😄', partOfSpeech: 'adj.' },
    { id: 'word6', grade: 1, english: 'show', chinese: '节目', emoji: '📺', partOfSpeech: 'n.' },
    { id: 'word7', grade: 1, english: 'time', chinese: '时间', emoji: '⏰', partOfSpeech: 'n.' },
    { id: 'word8', grade: 1, english: 'star', chinese: '明星', emoji: '⭐', partOfSpeech: 'n.' },
    { id: 'word9', grade: 1, english: 'happy', chinese: '开心', emoji: '😊', partOfSpeech: 'adj.' },
    { id: 'word10', grade: 1, english: 'good', chinese: '好的', emoji: '👍', partOfSpeech: 'adj.' },

    // 二年级 - 简单词汇（10个）
    { id: 'word11', grade: 2, english: 'picture', chinese: '图片', emoji: '🖼️', partOfSpeech: 'n.' },
    { id: 'word12', grade: 2, english: 'book', chinese: '书', emoji: '📚', partOfSpeech: 'n.' },
    { id: 'word13', grade: 2, english: 'art', chinese: '艺术', emoji: '🎨', partOfSpeech: 'n.' },
    { id: 'word14', grade: 2, english: 'dance', chinese: '舞蹈', emoji: '💃', partOfSpeech: 'v./n.' },
    { id: 'word15', grade: 2, english: 'song', chinese: '歌曲', emoji: '🎤', partOfSpeech: 'n.' },
    { id: 'word16', grade: 2, english: 'play', chinese: '戏剧', emoji: '🎭', partOfSpeech: 'n.' },
    { id: 'word17', grade: 2, english: 'story', chinese: '故事', emoji: '📖', partOfSpeech: 'n.' },
    { id: 'word18', grade: 2, english: 'film', chinese: '电影', emoji: '🎬', partOfSpeech: 'n.' },
    { id: 'word19', grade: 2, english: 'photo', chinese: '照片', emoji: '📷', partOfSpeech: 'n.' },
    { id: 'word20', grade: 2, english: 'word', chinese: '单词', emoji: '📝', partOfSpeech: 'n.' },

    // 三年级 - 中等词汇（10个）
    { id: 'word21', grade: 3, english: 'television', chinese: '电视', emoji: '📺', partOfSpeech: 'n.' },
    { id: 'word22', grade: 3, english: 'program', chinese: '节目', emoji: '📡', partOfSpeech: 'n.' },
    { id: 'word23', grade: 3, english: 'magazine', chinese: '杂志', emoji: '📰', partOfSpeech: 'n.' },
    { id: 'word24', grade: 3, english: 'radio', chinese: '广播', emoji: '📻', partOfSpeech: 'n.' },
    { id: 'word25', grade: 3, english: 'movie', chinese: '电影', emoji: '🎥', partOfSpeech: 'n.' },
    { id: 'word26', grade: 3, english: 'stage', chinese: '舞台', emoji: '🎪', partOfSpeech: 'n.' },
    { id: 'word27', grade: 3, english: 'audience', chinese: '观众', emoji: '👥', partOfSpeech: 'n.' },
    { id: 'word28', grade: 3, english: 'ticket', chinese: '票', emoji: '🎫', partOfSpeech: 'n.' },
    { id: 'word29', grade: 3, english: 'celebrate', chinese: '庆祝', emoji: '🎉', partOfSpeech: 'v.' },
    { id: 'word30', grade: 3, english: 'actor', chinese: '演员', emoji: '🎭', partOfSpeech: 'n.' },

    // 四年级 - 中高级词汇（10个）
    { id: 'word31', grade: 4, english: 'director', chinese: '导演', emoji: '🎬', partOfSpeech: 'n.' },
    { id: 'word32', grade: 4, english: 'performance', chinese: '表演', emoji: '🎪', partOfSpeech: 'n.' },
    { id: 'word33', grade: 4, english: 'interview', chinese: '采访', emoji: '🎙️', partOfSpeech: 'n./v.' },
    { id: 'word34', grade: 4, english: 'presenter', chinese: '主持人', emoji: '📺', partOfSpeech: 'n.' },
    { id: 'word35', grade: 4, english: 'reporter', chinese: '记者', emoji: '📰', partOfSpeech: 'n.' },
    { id: 'word36', grade: 4, english: 'schedule', chinese: '时间表', emoji: '⏰', partOfSpeech: 'n.' },
    { id: 'word37', grade: 4, english: 'studio', chinese: '演播室', emoji: '🎥', partOfSpeech: 'n.' },
    { id: 'word38', grade: 4, english: 'broadcast', chinese: '广播', emoji: '📡', partOfSpeech: 'v./n.' },
    { id: 'word39', grade: 4, english: 'contestant', chinese: '参赛者', emoji: '🏆', partOfSpeech: 'n.' },
    { id: 'word40', grade: 4, english: 'entertainment', chinese: '娱乐', emoji: '🎉', partOfSpeech: 'n.' },

    // 五年级 - 高级词汇（10个）
    { id: 'word41', grade: 5, english: 'journalist', chinese: '记者', emoji: '🖊️', partOfSpeech: 'n.' },
    { id: 'word42', grade: 5, english: 'journalism', chinese: '新闻业', emoji: '📝', partOfSpeech: 'n.' },
    { id: 'word43', grade: 5, english: 'headline', chinese: '头条', emoji: '📰', partOfSpeech: 'n.' },
    { id: 'word44', grade: 5, english: 'commercial', chinese: '广告', emoji: '📢', partOfSpeech: 'n.' },
    { id: 'word45', grade: 5, english: 'episode', chinese: '一集', emoji: '📺', partOfSpeech: 'n.' },
    { id: 'word46', grade: 5, english: 'variety show', chinese: '综艺节目', emoji: '🎭', partOfSpeech: 'n.' },
    { id: 'word47', grade: 5, english: 'talent show', chinese: '达人秀', emoji: '🌟', partOfSpeech: 'n.' },
    { id: 'word48', grade: 5, english: 'host', chinese: '主持人', emoji: '🎤', partOfSpeech: 'n./v.' },
    { id: 'word49', grade: 5, english: 'internet', chinese: '互联网', emoji: '🌐', partOfSpeech: 'n.' },
    { id: 'word50', grade: 5, english: 'podcast', chinese: '播客', emoji: '🎧', partOfSpeech: 'n.' },

    // 六年级 - 最复杂词汇（8个）
    { id: 'word51', grade: 6, english: 'livestream', chinese: '直播', emoji: '📡', partOfSpeech: 'n./v.' },
    { id: 'word52', grade: 6, english: 'script', chinese: '剧本', emoji: '📝', partOfSpeech: 'n.' },
    { id: 'word53', grade: 6, english: 'make-up', chinese: '化妆', emoji: '💄', partOfSpeech: 'n.' },
    { id: 'word54', grade: 6, english: 'emergency exit', chinese: '紧急出口', emoji: '🚪', partOfSpeech: 'n.' },
    { id: 'word55', grade: 6, english: 'microscope', chinese: '显微镜', emoji: '🔬', partOfSpeech: 'n.' },
    { id: 'word56', grade: 6, english: 'keyboard', chinese: '键盘', emoji: '⌨️', partOfSpeech: 'n.' },
    { id: 'word57', grade: 6, english: 'survey', chinese: '民意调查', emoji: '📊', partOfSpeech: 'n.' },
    { id: 'word58', grade: 6, english: 'network', chinese: '网络', emoji: '🕸️', partOfSpeech: 'n.' }
];

// 年级配置映射 - 按年级难度分级
const GradeConfig = {
    'grade1': { time: 90, level: 'easy', pairs: 8, difficulty: 1.0, grade: 1 },
    'grade2': { time: 100, level: 'easy', pairs: 9, difficulty: 1.1, grade: 2 },
    'grade3': { time: 120, level: 'medium', pairs: 10, difficulty: 1.3, grade: 3 },
    'grade4': { time: 140, level: 'medium', pairs: 10, difficulty: 1.5, grade: 4 },
    'grade5': { time: 160, level: 'hard', pairs: 10, difficulty: 1.8, grade: 5 },
    'grade6': { time: 180, level: 'hard', pairs: 8, difficulty: 2.0, grade: 6 }
};

// 获取指定年级和数量的单词
function getWords(count, gradeLevel = 1) {
    // 获取指定年级及以下的所有单词（允许低年级使用简单词汇）
    const availableWords = WordDatabase.filter(word => word.grade <= gradeLevel);

    // 如果可用单词不足，则使用所有单词
    const pool = availableWords.length >= count ? availableWords : WordDatabase;

    // 随机打乱并选择count个单词
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// 获取单词的英文和中文卡片数据
function generateCards(wordCount, gradeLevel = 1) {
    const words = getWords(wordCount, gradeLevel);
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
