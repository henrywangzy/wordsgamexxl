/**
 * 单词数据库
 * 按年级分级的120个单词：1-2年级基础词汇，3-4年级中等词汇，5-6年级高级词汇
 */

const WordDatabase = [
    // 一年级 - 最简单词汇（20个）
    { id: 'word1', grade: 1, english: 'news', chinese: '新闻', emoji: '📰', partOfSpeech: 'n.' },
    { id: 'word2', grade: 1, english: 'view', chinese: '看', emoji: '👀', partOfSpeech: 'v.' },
    { id: 'word3', grade: 1, english: 'music', chinese: '音乐', emoji: '🎵', partOfSpeech: 'n.' },
    { id: 'word4', grade: 1, english: 'game', chinese: '游戏', emoji: '🎮', partOfSpeech: 'n.' },
    { id: 'word5', grade: 1, english: 'fun', chinese: '有趣', emoji: '😄', partOfSpeech: 'adj.' },
    { id: 'word6', grade: 1, english: 'show', chinese: '展示', emoji: '📺', partOfSpeech: 'n.' },
    { id: 'word7', grade: 1, english: 'time', chinese: '时间', emoji: '⏰', partOfSpeech: 'n.' },
    { id: 'word8', grade: 1, english: 'star', chinese: '明星', emoji: '⭐', partOfSpeech: 'n.' },
    { id: 'word9', grade: 1, english: 'happy', chinese: '开心', emoji: '😊', partOfSpeech: 'adj.' },
    { id: 'word10', grade: 1, english: 'good', chinese: '好的', emoji: '👍', partOfSpeech: 'adj.' },
    { id: 'word11', grade: 1, english: 'big', chinese: '大的', emoji: '🔍', partOfSpeech: 'adj.' },
    { id: 'word12', grade: 1, english: 'small', chinese: '小的', emoji: '🔎', partOfSpeech: 'adj.' },
    { id: 'word13', grade: 1, english: 'fast', chinese: '快的', emoji: '🏃', partOfSpeech: 'adj.' },
    { id: 'word14', grade: 1, english: 'slow', chinese: '慢的', emoji: '🐢', partOfSpeech: 'adj.' },
    { id: 'word15', grade: 1, english: 'hot', chinese: '热的', emoji: '🔥', partOfSpeech: 'adj.' },
    { id: 'word16', grade: 1, english: 'cold', chinese: '冷的', emoji: '❄️', partOfSpeech: 'adj.' },
    { id: 'word17', grade: 1, english: 'new', chinese: '新的', emoji: '✨', partOfSpeech: 'adj.' },
    { id: 'word18', grade: 1, english: 'old', chinese: '旧的', emoji: '📅', partOfSpeech: 'adj.' },
    { id: 'word19', grade: 1, english: 'play', chinese: '玩', emoji: '⚽', partOfSpeech: 'v.' },
    { id: 'word20', grade: 1, english: 'watch', chinese: '观看', emoji: '👀', partOfSpeech: 'v.' },

    // 二年级 - 简单词汇（20个）
    { id: 'word21', grade: 2, english: 'picture', chinese: '图片', emoji: '🖼️', partOfSpeech: 'n.' },
    { id: 'word22', grade: 2, english: 'book', chinese: '书', emoji: '📚', partOfSpeech: 'n.' },
    { id: 'word23', grade: 2, english: 'art', chinese: '艺术', emoji: '🎨', partOfSpeech: 'n.' },
    { id: 'word24', grade: 2, english: 'dance', chinese: '舞蹈', emoji: '💃', partOfSpeech: 'v./n.' },
    { id: 'word25', grade: 2, english: 'song', chinese: '歌曲', emoji: '🎤', partOfSpeech: 'n.' },
    { id: 'word26', grade: 2, english: 'story', chinese: '故事', emoji: '📖', partOfSpeech: 'n.' },
    { id: 'word27', grade: 2, english: 'film', chinese: '影片', emoji: '🎬', partOfSpeech: 'n.' },
    { id: 'word28', grade: 2, english: 'photo', chinese: '照片', emoji: '📷', partOfSpeech: 'n.' },
    { id: 'word29', grade: 2, english: 'word', chinese: '单词', emoji: '📝', partOfSpeech: 'n.' },
    { id: 'word30', grade: 2, english: 'write', chinese: '写', emoji: '✏️', partOfSpeech: 'v.' },
    { id: 'word31', grade: 2, english: 'read', chinese: '读', emoji: '📖', partOfSpeech: 'v.' },
    { id: 'word32', grade: 2, english: 'sing', chinese: '唱', emoji: '🎵', partOfSpeech: 'v.' },
    { id: 'word33', grade: 2, english: 'listen', chinese: '听', emoji: '👂', partOfSpeech: 'v.' },
    { id: 'word34', grade: 2, english: 'speak', chinese: '说', emoji: '🗣️', partOfSpeech: 'v.' },
    { id: 'word35', grade: 2, english: 'color', chinese: '颜色', emoji: '🌈', partOfSpeech: 'n.' },
    { id: 'word36', grade: 2, english: 'draw', chinese: '画', emoji: '🖍️', partOfSpeech: 'v.' },
    { id: 'word37', grade: 2, english: 'paint', chinese: '涂色', emoji: '🎨', partOfSpeech: 'v.' },
    { id: 'word38', grade: 2, english: 'cut', chinese: '切', emoji: '✂️', partOfSpeech: 'v.' },
    { id: 'word39', grade: 2, english: 'make', chinese: '制作', emoji: '🔨', partOfSpeech: 'v.' },
    { id: 'word40', grade: 2, english: 'build', chinese: '建造', emoji: '🏗️', partOfSpeech: 'v.' },

    // 三年级 - 中等词汇（20个）
    { id: 'word41', grade: 3, english: 'television', chinese: '电视', emoji: '📺', partOfSpeech: 'n.' },
    { id: 'word42', grade: 3, english: 'program', chinese: '程序', emoji: '📡', partOfSpeech: 'n.' },
    { id: 'word43', grade: 3, english: 'magazine', chinese: '杂志', emoji: '📰', partOfSpeech: 'n.' },
    { id: 'word44', grade: 3, english: 'radio', chinese: '收音机', emoji: '📻', partOfSpeech: 'n.' },
    { id: 'word45', grade: 3, english: 'movie', chinese: '电影', emoji: '🎥', partOfSpeech: 'n.' },
    { id: 'word46', grade: 3, english: 'stage', chinese: '舞台', emoji: '🎪', partOfSpeech: 'n.' },
    { id: 'word47', grade: 3, english: 'audience', chinese: '观众', emoji: '👥', partOfSpeech: 'n.' },
    { id: 'word48', grade: 3, english: 'ticket', chinese: '票', emoji: '🎫', partOfSpeech: 'n.' },
    { id: 'word49', grade: 3, english: 'celebrate', chinese: '庆祝', emoji: '🎉', partOfSpeech: 'v.' },
    { id: 'word50', grade: 3, english: 'actor', chinese: '演员', emoji: '🎭', partOfSpeech: 'n.' },
    { id: 'word51', grade: 3, english: 'camera', chinese: '相机', emoji: '📷', partOfSpeech: 'n.' },
    { id: 'word52', grade: 3, english: 'screen', chinese: '屏幕', emoji: '🖥️', partOfSpeech: 'n.' },
    { id: 'word53', grade: 3, english: 'channel', chinese: '频道', emoji: '📺', partOfSpeech: 'n.' },
    { id: 'word54', grade: 3, english: 'signal', chinese: '信号', emoji: '📶', partOfSpeech: 'n.' },
    { id: 'word55', grade: 3, english: 'sound', chinese: '声音', emoji: '🔊', partOfSpeech: 'n.' },
    { id: 'word56', grade: 3, english: 'volume', chinese: '音量', emoji: '🔊', partOfSpeech: 'n.' },
    { id: 'word57', grade: 3, english: 'noise', chinese: '噪音', emoji: '📢', partOfSpeech: 'n.' },
    { id: 'word58', grade: 3, english: 'quiet', chinese: '安静', emoji: '🤫', partOfSpeech: 'adj.' },
    { id: 'word59', grade: 3, english: 'loud', chinese: '大声', emoji: '📢', partOfSpeech: 'adj.' },
    { id: 'word60', grade: 3, english: 'clear', chinese: '清晰', emoji: '✅', partOfSpeech: 'adj.' },

    // 四年级 - 中高级词汇（20个）
    { id: 'word61', grade: 4, english: 'director', chinese: '导演', emoji: '🎬', partOfSpeech: 'n.' },
    { id: 'word62', grade: 4, english: 'performance', chinese: '表演', emoji: '🎪', partOfSpeech: 'n.' },
    { id: 'word63', grade: 4, english: 'interview', chinese: '采访', emoji: '🎙️', partOfSpeech: 'n./v.' },
    { id: 'word64', grade: 4, english: 'presenter', chinese: '节目主持人', emoji: '📺', partOfSpeech: 'n.' },
    { id: 'word65', grade: 4, english: 'reporter', chinese: '新闻记者', emoji: '📰', partOfSpeech: 'n.' },
    { id: 'word66', grade: 4, english: 'schedule', chinese: '时间表', emoji: '⏰', partOfSpeech: 'n.' },
    { id: 'word67', grade: 4, english: 'studio', chinese: '演播室', emoji: '🎥', partOfSpeech: 'n.' },
    { id: 'word68', grade: 4, english: 'broadcast', chinese: '播放', emoji: '📡', partOfSpeech: 'v./n.' },
    { id: 'word69', grade: 4, english: 'contestant', chinese: '参赛者', emoji: '🏆', partOfSpeech: 'n.' },
    { id: 'word70', grade: 4, english: 'entertainment', chinese: '娱乐', emoji: '🎉', partOfSpeech: 'n.' },
    { id: 'word71', grade: 4, english: 'season', chinese: '季', emoji: '🍂', partOfSpeech: 'n.' },
    { id: 'word72', grade: 4, english: 'episode', chinese: '一集', emoji: '📺', partOfSpeech: 'n.' },
    { id: 'word73', grade: 4, english: 'series', chinese: '系列', emoji: '📺', partOfSpeech: 'n.' },
    { id: 'word74', grade: 4, english: 'subtitle', chinese: '字幕', emoji: '📝', partOfSpeech: 'n.' },
    { id: 'word75', grade: 4, english: 'dialogue', chinese: '对话', emoji: '💬', partOfSpeech: 'n.' },
    { id: 'word76', grade: 4, english: 'scene', chinese: '场景', emoji: '🎬', partOfSpeech: 'n.' },
    { id: 'word77', grade: 4, english: 'costume', chinese: '服装', emoji: '👗', partOfSpeech: 'n.' },
    { id: 'word78', grade: 4, english: 'prop', chinese: '道具', emoji: '🎭', partOfSpeech: 'n.' },
    { id: 'word79', grade: 4, english: 'rehearsal', chinese: '彩排', emoji: '🎭', partOfSpeech: 'n.' },
    { id: 'word80', grade: 4, english: 'premiere', chinese: '首映', emoji: '🎬', partOfSpeech: 'n.' },

    // 五年级 - 高级词汇（20个）
    { id: 'word81', grade: 5, english: 'journalist', chinese: '新闻工作者', emoji: '🖊️', partOfSpeech: 'n.' },
    { id: 'word82', grade: 5, english: 'journalism', chinese: '新闻业', emoji: '📝', partOfSpeech: 'n.' },
    { id: 'word83', grade: 5, english: 'headline', chinese: '头条', emoji: '📰', partOfSpeech: 'n.' },
    { id: 'word84', grade: 5, english: 'commercial', chinese: '广告', emoji: '📢', partOfSpeech: 'n.' },
    { id: 'word85', grade: 5, english: 'variety show', chinese: '综艺节目', emoji: '🎭', partOfSpeech: 'n.' },
    { id: 'word86', grade: 5, english: 'talent show', chinese: '达人秀', emoji: '🌟', partOfSpeech: 'n.' },
    { id: 'word87', grade: 5, english: 'host', chinese: '主持人', emoji: '🎤', partOfSpeech: 'n./v.' },
    { id: 'word88', grade: 5, english: 'internet', chinese: '互联网', emoji: '🌐', partOfSpeech: 'n.' },
    { id: 'word89', grade: 5, english: 'podcast', chinese: '播客', emoji: '🎧', partOfSpeech: 'n.' },
    { id: 'word90', grade: 5, english: 'website', chinese: '网站', emoji: '🌐', partOfSpeech: 'n.' },
    { id: 'word91', grade: 5, english: 'download', chinese: '下载', emoji: '⬇️', partOfSpeech: 'v.' },
    { id: 'word92', grade: 5, english: 'upload', chinese: '上传', emoji: '⬆️', partOfSpeech: 'v.' },
    { id: 'word93', grade: 5, english: 'stream', chinese: '流媒体', emoji: '📡', partOfSpeech: 'v./n.' },
    { id: 'word94', grade: 5, english: 'video', chinese: '视频', emoji: '🎥', partOfSpeech: 'n.' },
    { id: 'word95', grade: 5, english: 'audio', chinese: '音频', emoji: '🎵', partOfSpeech: 'n.' },
    { id: 'word96', grade: 5, english: 'digital', chinese: '数字的', emoji: '💻', partOfSpeech: 'adj.' },
    { id: 'word97', grade: 5, english: 'online', chinese: '在线的', emoji: '🌐', partOfSpeech: 'adj.' },
    { id: 'word98', grade: 5, english: 'offline', chinese: '离线的', emoji: '📴', partOfSpeech: 'adj.' },
    { id: 'word99', grade: 5, english: 'wireless', chinese: '无线的', emoji: '📶', partOfSpeech: 'adj.' },
    { id: 'word100', grade: 5, english: 'cloud', chinese: '云', emoji: '☁️', partOfSpeech: 'n.' },

    // 六年级 - 最复杂词汇（20个）
    { id: 'word101', grade: 6, english: 'livestream', chinese: '直播', emoji: '📡', partOfSpeech: 'n./v.' },
    { id: 'word102', grade: 6, english: 'script', chinese: '剧本', emoji: '📝', partOfSpeech: 'n.' },
    { id: 'word103', grade: 6, english: 'make-up', chinese: '化妆', emoji: '💄', partOfSpeech: 'n.' },
    { id: 'word104', grade: 6, english: 'emergency exit', chinese: '紧急出口', emoji: '🚪', partOfSpeech: 'n.' },
    { id: 'word105', grade: 6, english: 'microscope', chinese: '显微镜', emoji: '🔬', partOfSpeech: 'n.' },
    { id: 'word106', grade: 6, english: 'keyboard', chinese: '键盘', emoji: '⌨️', partOfSpeech: 'n.' },
    { id: 'word107', grade: 6, english: 'survey', chinese: '民意调查', emoji: '📊', partOfSpeech: 'n.' },
    { id: 'word108', grade: 6, english: 'network', chinese: '网络', emoji: '🕸️', partOfSpeech: 'n.' },
    { id: 'word109', grade: 6, english: 'algorithm', chinese: '算法', emoji: '🧮', partOfSpeech: 'n.' },
    { id: 'word110', grade: 6, english: 'database', chinese: '数据库', emoji: '🗄️', partOfSpeech: 'n.' },
    { id: 'word111', grade: 6, english: 'encryption', chinese: '加密', emoji: '🔐', partOfSpeech: 'n.' },
    { id: 'word112', grade: 6, english: 'firewall', chinese: '防火墙', emoji: '🔥', partOfSpeech: 'n.' },
    { id: 'word113', grade: 6, english: 'bandwidth', chinese: '带宽', emoji: '📶', partOfSpeech: 'n.' },
    { id: 'word114', grade: 6, english: 'processor', chinese: '处理器', emoji: '💻', partOfSpeech: 'n.' },
    { id: 'word115', grade: 6, english: 'resolution', chinese: '分辨率', emoji: '📺', partOfSpeech: 'n.' },
    { id: 'word116', grade: 6, english: 'compression', chinese: '压缩', emoji: '🗜️', partOfSpeech: 'n.' },
    { id: 'word117', grade: 6, english: 'streaming', chinese: '流媒体技术', emoji: '📡', partOfSpeech: 'n.' },
    { id: 'word118', grade: 6, english: 'protocol', chinese: '协议', emoji: '📋', partOfSpeech: 'n.' },
    { id: 'word119', grade: 6, english: 'latency', chinese: '网络延迟', emoji: '📊', partOfSpeech: 'n.' },
    { id: 'word120', grade: 6, english: 'cybersecurity', chinese: '网络安全', emoji: '🔒', partOfSpeech: 'n.' }
];

// 年级配置映射 - 按年级难度分级，4列×7行（28格，14对单词）
const GradeConfig = {
    'grade1': { time: 90, level: 'easy', pairs: 14, difficulty: 1.0, grade: 1 },
    'grade2': { time: 100, level: 'easy', pairs: 14, difficulty: 1.1, grade: 2 },
    'grade3': { time: 110, level: 'medium', pairs: 14, difficulty: 1.3, grade: 3 },
    'grade4': { time: 120, level: 'medium', pairs: 14, difficulty: 1.5, grade: 4 },
    'grade5': { time: 130, level: 'hard', pairs: 14, difficulty: 1.8, grade: 5 },
    'grade6': { time: 140, level: 'hard', pairs: 14, difficulty: 2.0, grade: 6 }
};

// 获取指定年级和数量的单词 - 严格按年级分级，不跨年级
function getWords(count, gradeLevel = 1) {
    // 严格只获取指定年级的单词
    const availableWords = WordDatabase.filter(word => word.grade === gradeLevel);

    console.log(`[DEBUG] 年级${gradeLevel}共有${availableWords.length}个单词，需要${count}个`);

    // 验证该年级是否有足够的单词
    if (availableWords.length < count) {
        throw new Error(`年级${gradeLevel}单词不足！只有${availableWords.length}个，但需要${count}个`);
    }

    // 随机打乱并选择count个单词
    const shuffled = [...availableWords].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// 获取单词的英文和中文卡片数据
function generateCards(wordCount, gradeLevel = 1) {
    const words = getWords(wordCount, gradeLevel);
    const cards = [];

    console.log(`[DEBUG] 为年级${gradeLevel}生成${wordCount}对单词，共${words.length}个单词`);
    console.log('[DEBUG] 选中的单词:', words.map(w => `${w.english}(${w.chinese})`));

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

    console.log(`[DEBUG] 生成${cards.length}张卡片，${cards.length/2}对`);

    // 打乱卡片顺序
    const shuffledCards = shuffleArray(cards);

    console.log('[DEBUG] 卡片洗牌完成，开始验证...');

    // 验证卡片配对逻辑
    const isValid = validateCardPairs(shuffledCards);
    if (!isValid) {
        console.error('❌ 卡片配对验证失败！');
        console.log('卡片列表:', shuffledCards);
        console.log('按类型分组:', {
            english: shuffledCards.filter(c => c.type === 'english').map(c => c.content),
            chinese: shuffledCards.filter(c => c.type === 'chinese').map(c => c.content)
        });
        throw new Error('卡片配对逻辑错误！');
    }

    console.log('✅ 卡片配对验证通过！');
    return shuffledCards;
}

// 验证卡片配对逻辑
function validateCardPairs(cards) {
    console.log('[DEBUG] 开始验证卡片配对逻辑，总卡片数:', cards.length);

    // 统计英文和中文卡片的数量
    const englishCount = cards.filter(c => c.type === 'english').length;
    const chineseCount = cards.filter(c => c.type === 'chinese').length;

    console.log(`[DEBUG] 英文卡片: ${englishCount}张, 中文卡片: ${chineseCount}张`);

    if (englishCount !== chineseCount) {
        console.error(`❌ 数量不匹配！英文:${englishCount}, 中文:${chineseCount}`);
        return false;
    }

    // 检查每个matchId是否都有英文和中文两个卡片
    const matchGroups = {};

    cards.forEach(card => {
        if (!matchGroups[card.matchId]) {
            matchGroups[card.matchId] = [];
        }
        matchGroups[card.matchId].push({
            type: card.type,
            content: card.content
        });
    });

    console.log(`[DEBUG] 匹配组数量: ${Object.keys(matchGroups).length}`);

    // 验证每个单词都有英文和中文
    for (const [matchId, cardsOfGroup] of Object.entries(matchGroups)) {
        const types = cardsOfGroup.map(c => c.type);
        const hasEnglish = types.includes('english');
        const hasChinese = types.includes('chinese');

        if (!hasEnglish || !hasChinese) {
            console.error(`❌ 配对错误：${matchId} 缺少 ${!hasEnglish ? '英文' : ''} ${!hasChinese ? '中文' : ''}`);
            console.error('卡片内容:', cardsOfGroup);
            return false;
        }

        // 检查是否有重复的英文或中文
        const englishCount = types.filter(t => t === 'english').length;
        const chineseCount = types.filter(t => t === 'chinese').length;

        if (englishCount !== 1 || chineseCount !== 1) {
            console.error(`❌ 配对错误：${matchId} 重复！英文:${englishCount} 中文:${chineseCount}`);
            console.error('卡片内容:', cardsOfGroup);
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
