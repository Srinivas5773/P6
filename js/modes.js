/* ==========================================================================
   MEMORY MATCH - GAME MODES & CAMPAIGN QUEST SYSTEM
   ========================================================================== */

const QUEST_LEVELS = [
    { level: 1, title: 'Beginner Field', rows: 2, cols: 2, deck: 'nature', mode: 'classic', timeLimit: 30, targetStars: { 3: 15, 2: 25 } },
    { level: 2, title: 'Tech Discovery', rows: 2, cols: 4, deck: 'tech', mode: 'classic', timeLimit: 40, targetStars: { 3: 20, 2: 30 } },
    { level: 3, title: 'Fantasy Realm', rows: 4, cols: 4, deck: 'fantasy', mode: 'classic', timeLimit: 75, targetStars: { 3: 40, 2: 55 } },
    { level: 4, title: 'Sweet Tooth', rows: 4, cols: 4, deck: 'food', mode: 'classic', timeLimit: 60, targetStars: { 3: 35, 2: 50 } },
    { level: 5, title: 'Speed Circuit', rows: 4, cols: 4, deck: 'tech', mode: 'time_attack', timeLimit: 45, targetStars: { 3: 25, 2: 35 } },
    { level: 6, title: 'Triple Trouble', rows: 3, cols: 4, deck: 'nature', mode: 'triple', timeLimit: 90, targetStars: { 3: 50, 2: 70 } },
    { level: 7, title: 'Deep Space Grid', rows: 6, cols: 6, deck: 'tech', mode: 'classic', timeLimit: 120, targetStars: { 3: 75, 2: 100 } },
    { level: 8, title: 'AI Showdown', rows: 4, cols: 4, deck: 'fantasy', mode: 'vs_ai', aiDiff: 'medium' },
    { level: 9, title: 'Mega Matrix', rows: 8, cols: 8, deck: 'tech', mode: 'classic', timeLimit: 240, targetStars: { 3: 150, 2: 200 } }
];

class ModeManager {
    constructor() {
        this.currentMode = 'classic';
        this.timeLimit = 0;
        this.currentQuestLevel = 1;
    }

    setMode(mode, options = {}) {
        this.currentMode = mode;

        let rows = options.rows || 4;
        let cols = options.cols || 4;
        let groupSize = mode === 'triple' ? 3 : 2;

        if (mode === 'time_attack') {
            this.timeLimit = options.timeLimit || (rows * cols * 4);
        } else {
            this.timeLimit = 0;
        }

        if (mode === 'vs_ai') {
            aiOpponent.setDifficulty(options.aiDifficulty || 'medium');
            aiOpponent.reset();
        }

        if (mode === 'quest') {
            this.loadQuestLevel(options.questLevel || 1);
            return;
        }

        engine.initGrid(rows, cols, mode, groupSize);
    }

    loadQuestLevel(levelNum) {
        const lvlData = QUEST_LEVELS.find(l => l.level === levelNum) || QUEST_LEVELS[0];
        this.currentQuestLevel = lvlData.level;
        this.currentMode = lvlData.mode || 'classic';
        this.timeLimit = lvlData.timeLimit || 0;

        decks.setDeck(lvlData.deck || 'tech');
        if (lvlData.aiDiff) aiOpponent.setDifficulty(lvlData.aiDiff);

        engine.initGrid(lvlData.rows, lvlData.cols, this.currentMode, lvlData.mode === 'triple' ? 3 : 2);
        ui.showToast(`🎯 Quest Level ${lvlData.level}: ${lvlData.title}`);
    }

    calculateStars(elapsedSeconds, mismatches) {
        const lvlData = QUEST_LEVELS.find(l => l.level === this.currentQuestLevel);
        if (!lvlData || !lvlData.targetStars) return 3;

        if (elapsedSeconds <= lvlData.targetStars[3]) return 3;
        if (elapsedSeconds <= lvlData.targetStars[2]) return 2;
        return 1;
    }
}

const modes = new ModeManager();
