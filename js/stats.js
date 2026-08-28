/* ==========================================================================
   MEMORY MATCH - STATISTICS & PERSISTENCE ENGINE
   ========================================================================== */

const STORAGE_KEY = 'MEMORY_MATCH_PRO_SAVE_DATA_V1';

class StatsManager {
    constructor() {
        this.data = {
            totalGames: 0,
            wins: 0,
            totalFlips: 0,
            totalMatches: 0,
            highestCombo: 0,
            bestTimes: {
                '2x2': null,
                '4x4': null,
                '6x6': null,
                '8x8': null,
                '10x10': null
            },
            history: []
        };
    }

    init() {
        this.load();
    }

    load() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed.stats) this.data = { ...this.data, ...parsed.stats };
                if (parsed.achievements) achievements.loadSaveData(parsed.achievements);
            }
        } catch (e) {
            console.error('Failed to load save data from LocalStorage', e);
        }
    }

    save() {
        try {
            const payload = {
                stats: this.data,
                achievements: achievements.getSaveData(),
                savedAt: new Date().toISOString()
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        } catch (e) {
            console.error('Failed to save data to LocalStorage', e);
        }
    }

    recordGame(gameRecord) {
        this.data.totalGames++;
        if (gameRecord.isWin) this.data.wins++;
        this.data.totalFlips += gameRecord.flips || 0;
        this.data.totalMatches += gameRecord.matches || 0;

        if (gameRecord.maxCombo > this.data.highestCombo) {
            this.data.highestCombo = gameRecord.maxCombo;
        }

        const gridKey = gameRecord.gridSize;
        if (gameRecord.isWin && gameRecord.elapsedSeconds) {
            if (!this.data.bestTimes[gridKey] || gameRecord.elapsedSeconds < this.data.bestTimes[gridKey]) {
                this.data.bestTimes[gridKey] = gameRecord.elapsedSeconds;
                ui.showToast(`⚡ New Best Time for ${gridKey}: ${gameRecord.elapsedSeconds}s!`);
            }
        }

        // Add to history log (keep last 50 games)
        this.data.history.unshift({
            date: new Date().toLocaleDateString(),
            gridSize: gameRecord.gridSize,
            mode: gameRecord.mode,
            score: gameRecord.score,
            flips: gameRecord.flips,
            time: gameRecord.elapsedSeconds
        });

        if (this.data.history.length > 50) {
            this.data.history.pop();
        }

        this.save();
    }

    getAccuracy() {
        if (this.data.totalFlips === 0) return 0;
        return Math.min(100, Math.round((this.data.totalMatches * 2 / this.data.totalFlips) * 100));
    }

    exportJSON() {
        const payload = {
            stats: this.data,
            achievements: achievements.getSaveData(),
            version: '1.0.0'
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `memory_match_backup_${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    importJSON(jsonString) {
        try {
            const parsed = JSON.parse(jsonString);
            if (parsed.stats && parsed.achievements) {
                this.data = parsed.stats;
                achievements.loadSaveData(parsed.achievements);
                this.save();
                ui.showToast("💾 Save data imported successfully!");
                return true;
            }
        } catch (e) {
            ui.showToast("❌ Invalid JSON save file");
        }
        return false;
    }
}

const stats = new StatsManager();
