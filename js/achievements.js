/* ==========================================================================
   MEMORY MATCH - ACHIEVEMENTS & PROGRESSION SYSTEM
   ========================================================================== */

const ACHIEVEMENTS_LIST = [
    { id: 'first_match', title: 'First Spark', desc: 'Complete your first card match', icon: '⚡', xp: 50 },
    { id: 'first_win', title: 'Victory Standard', desc: 'Win your first game', icon: '🏆', xp: 100 },
    { id: 'flawless', title: 'Eagle Eye', desc: 'Complete a game with zero mismatches', icon: '👁️', xp: 300 },
    { id: 'combo_3', title: 'Combo Rookie', desc: 'Achieve a 3x match streak', icon: '🔥', xp: 100 },
    { id: 'combo_5', title: 'Combo Master', desc: 'Achieve a 5x match streak', icon: '💥', xp: 250 },
    { id: 'combo_8', title: 'Unstoppable Flow', desc: 'Achieve an 8x match streak', icon: '⚡', xp: 500 },
    { id: 'speed_demon', title: 'Speed Demon', desc: 'Complete a 4x4 grid in under 30 seconds', icon: '⏱️', xp: 250 },
    { id: 'grid_master', title: 'Grand Master', desc: 'Conquer a giant 8x8 or 10x10 grid', icon: '🧩', xp: 400 },
    { id: 'beat_ai_easy', title: 'Bot Buster (Easy)', desc: 'Defeat the AI on Easy difficulty', icon: '🤖', xp: 100 },
    { id: 'beat_ai_hard', title: 'AI Overlord (Hard)', desc: 'Defeat the AI on Hard difficulty', icon: '🦾', xp: 350 },
    { id: 'beat_ai_master', title: 'Cyber Mind', desc: 'Defeat the Perfect Memory AI', icon: '🧠', xp: 600 },
    { id: 'quest_5', title: 'Adventurer', desc: 'Clear 5 levels in Quest Mode', icon: '🗺️', xp: 200 },
    { id: 'quest_15', title: 'Campaign Hero', desc: 'Clear 15 levels in Quest Mode', icon: '⚔️', xp: 500 },
    { id: 'triple_match', title: 'Triple Threat', desc: 'Win a game in Triple Match mode', icon: '🔺', xp: 250 },
    { id: 'zen_peace', title: 'Inner Peace', desc: 'Complete a game in Zen Mode', icon: '☯️', xp: 100 },
    { id: 'theme_collector', title: 'Style Icon', desc: 'Try 5 different color themes', icon: '🎨', xp: 150 },
    { id: 'deck_master', title: 'Deck Collector', desc: 'Play games across all card decks', icon: '🃏', xp: 200 }
];

class AchievementSystem {
    constructor() {
        this.unlocked = new Set();
        this.xp = 0;
        this.level = 1;
        this.usedThemes = new Set();
        this.usedDecks = new Set();
    }

    loadSaveData(savedData) {
        if (!savedData) return;
        if (Array.isArray(savedData.unlocked)) {
            this.unlocked = new Set(savedData.unlocked);
        }
        this.xp = savedData.xp || 0;
        this.level = this.calculateLevel(this.xp);
        if (Array.isArray(savedData.usedThemes)) this.usedThemes = new Set(savedData.usedThemes);
        if (Array.isArray(savedData.usedDecks)) this.usedDecks = new Set(savedData.usedDecks);
    }

    getSaveData() {
        return {
            unlocked: Array.from(this.unlocked),
            xp: this.xp,
            usedThemes: Array.from(this.usedThemes),
            usedDecks: Array.from(this.usedDecks)
        };
    }

    calculateLevel(xpPoints) {
        // XP curve: Level N requires 100 * N XP
        return Math.floor(Math.sqrt(xpPoints / 50)) + 1;
    }

    addXP(amount) {
        const oldLevel = this.level;
        this.xp += amount;
        this.level = this.calculateLevel(this.xp);

        if (this.level > oldLevel) {
            ui.showToast(`🎉 LEVEL UP! You reached Level ${this.level}!`);
            audio.playVictory();
        }
    }

    unlock(achievementId) {
        if (this.unlocked.has(achievementId)) return;

        const ach = ACHIEVEMENTS_LIST.find(a => a.id === achievementId);
        if (!ach) return;

        this.unlocked.add(achievementId);
        this.addXP(ach.xp);

        ui.showToast(`🏆 ACHIEVEMENT UNLOCKED: ${ach.title} (+${ach.xp} XP)`);
        audio.playVictory();
        stats.save();
    }

    trackThemeUse(themeId) {
        this.usedThemes.add(themeId);
        if (this.usedThemes.size >= 5) {
            this.unlock('theme_collector');
        }
    }

    trackDeckUse(deckId) {
        this.usedDecks.add(deckId);
        if (this.usedDecks.size >= Object.keys(DECKS).length) {
            this.unlock('deck_master');
        }
    }

    checkGameCompletion(gameStats) {
        this.unlock('first_win');

        if (gameStats.mismatches === 0) {
            this.unlock('flawless');
        }

        if (gameStats.maxCombo >= 3) this.unlock('combo_3');
        if (gameStats.maxCombo >= 5) this.unlock('combo_5');
        if (gameStats.maxCombo >= 8) this.unlock('combo_8');

        if (gameStats.gridSize === '4x4' && gameStats.elapsedSeconds <= 30) {
            this.unlock('speed_demon');
        }

        if (gameStats.gridSize === '8x8' || gameStats.gridSize === '10x10') {
            this.unlock('grid_master');
        }

        if (gameStats.mode === 'triple') this.unlock('triple_match');
        if (gameStats.mode === 'zen') this.unlock('zen_peace');

        if (gameStats.mode === 'vs_ai' && gameStats.winner === 'Player 1') {
            if (gameStats.aiDifficulty === 'easy') this.unlock('beat_ai_easy');
            if (gameStats.aiDifficulty === 'hard') this.unlock('beat_ai_hard');
            if (gameStats.aiDifficulty === 'master') this.unlock('beat_ai_master');
        }

        if (gameStats.mode === 'quest') {
            if (gameStats.questLevel >= 5) this.unlock('quest_5');
            if (gameStats.questLevel >= 15) this.unlock('quest_15');
        }
    }
}

const achievements = new AchievementSystem();
