/* ==========================================================================
   MEMORY MATCH - AI OPPONENT LOGIC MODULE
   ========================================================================== */

class AIOpponent {
    constructor(difficulty = 'medium') {
        this.difficulty = difficulty; // 'easy', 'medium', 'hard', 'master'
        this.memoryMap = new Map(); // Index -> { pairId, timestamp }
        this.retentionRates = {
            easy: 0.35,
            medium: 0.65,
            hard: 0.88,
            master: 1.0
        };
        this.thinkDelayMs = {
            easy: 1200,
            medium: 900,
            hard: 600,
            master: 400
        };
    }

    setDifficulty(diff) {
        if (this.retentionRates[diff]) {
            this.difficulty = diff;
        }
    }

    // Observe a card flip on the grid
    observeCard(index, pairId) {
        const retentionProb = this.retentionRates[this.difficulty];

        if (this.difficulty === 'master' || Math.random() <= retentionProb) {
            this.memoryMap.set(index, pairId);
        }
    }

    // Forget matched card indices
    forgetIndices(indices = []) {
        indices.forEach(idx => this.memoryMap.delete(idx));
    }

    // Decide which card to flip next
    // Returns Promise resolving to index to click
    chooseNextMove(unmatchedIndices = [], currentlyFlippedIndex = null) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const availableMemory = new Map();

                // Clean memory map of matched cards
                for (let [idx, pairId] of this.memoryMap.entries()) {
                    if (unmatchedIndices.includes(idx)) {
                        availableMemory.set(idx, pairId);
                    }
                }

                // If FIRST card of the turn: check if we know any matching pair in memory
                if (currentlyFlippedIndex === null) {
                    const pairIndices = this.findMatchingPairInMemory(availableMemory);
                    if (pairIndices) {
                        resolve(pairIndices[0]);
                        return;
                    }
                    // Otherwise flip a random unrevealed card
                    const unremembered = unmatchedIndices.filter(idx => !availableMemory.has(idx));
                    const pool = unremembered.length > 0 ? unremembered : unmatchedIndices;
                    const choice = pool[Math.floor(Math.random() * pool.length)];
                    resolve(choice);
                    return;
                }

                // If SECOND card of the turn: check if we know the pair for currentlyFlippedIndex
                const targetPairId = this.memoryMap.get(currentlyFlippedIndex);
                if (targetPairId) {
                    for (let [idx, pairId] of availableMemory.entries()) {
                        if (idx !== currentlyFlippedIndex && pairId === targetPairId) {
                            resolve(idx);
                            return;
                        }
                    }
                }

                // Fallback: Pick a random unmatched card that is not the currently flipped one
                const candidates = unmatchedIndices.filter(idx => idx !== currentlyFlippedIndex);
                const choice = candidates[Math.floor(Math.random() * candidates.length)];
                resolve(choice);
            }, this.thinkDelayMs[this.difficulty]);
        });
    }

    findMatchingPairInMemory(memoryMap) {
        const seenPairs = new Map(); // pairId -> index
        for (let [idx, pairId] of memoryMap.entries()) {
            if (seenPairs.has(pairId)) {
                return [seenPairs.get(pairId), idx];
            }
            seenPairs.set(pairId, idx);
        }
        return null;
    }

    reset() {
        this.memoryMap.clear();
    }
}

const aiOpponent = new AIOpponent();
