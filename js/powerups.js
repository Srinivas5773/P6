/* ==========================================================================
   MEMORY MATCH - POWER-UPS & SPECIAL CARD MODIFIERS MODULE
   ========================================================================== */

class PowerupManager {
    constructor() {
        this.inventory = {
            peek: 2,
            freeze: 2,
            shuffle: 2,
            magnet: 1
        };
        this.activeFreezeTimer = null;
        this.isFrozen = false;
    }

    resetInventory() {
        this.inventory = {
            peek: 2,
            freeze: 2,
            shuffle: 2,
            magnet: 1
        };
        this.isFrozen = false;
        if (this.activeFreezeTimer) {
            clearTimeout(this.activeFreezeTimer);
            this.activeFreezeTimer = null;
        }
    }

    usePowerup(type, gameEngine) {
        if (!this.inventory[type] || this.inventory[type] <= 0) return false;
        if (gameEngine.isBusy || gameEngine.isGameOver) return false;

        this.inventory[type]--;
        audio.playPowerup();

        switch (type) {
            case 'peek':
                this.executePeek(gameEngine);
                break;
            case 'freeze':
                this.executeFreeze(gameEngine);
                break;
            case 'shuffle':
                this.executeShuffle(gameEngine);
                break;
            case 'magnet':
                this.executeMagnet(gameEngine);
                break;
        }

        ui.updatePowerupCounts(this.inventory);
        return true;
    }

    // X-Ray Peek: Flip all cards face up for 2 seconds
    executePeek(gameEngine) {
        gameEngine.isBusy = true;
        const unmatchedCards = gameEngine.cards.filter(c => !c.matched && !c.flipped);

        unmatchedCards.forEach(c => c.element.classList.add('flipped', 'xray-active'));

        setTimeout(() => {
            unmatchedCards.forEach(c => {
                if (!c.flippedByTurn) {
                    c.element.classList.remove('flipped', 'xray-active');
                }
            });
            gameEngine.isBusy = false;
        }, 2200);
    }

    // Freeze: Stop timer for 10 seconds
    executeFreeze(gameEngine) {
        this.isFrozen = true;
        ui.showToast("⏰ Timer Frozen for 10 seconds!");

        if (this.activeFreezeTimer) clearTimeout(this.activeFreezeTimer);

        this.activeFreezeTimer = setTimeout(() => {
            this.isFrozen = false;
            ui.showToast("⏳ Timer resumed");
        }, 10000);
    }

    // Shuffle: Rearrange positions of all unmatched cards
    executeShuffle(gameEngine) {
        const unmatchedIndices = [];
        const unmatchedData = [];

        gameEngine.cards.forEach((c, idx) => {
            if (!c.matched && !c.flipped) {
                unmatchedIndices.push(idx);
                unmatchedData.push(c.data);
            }
        });

        const shuffledData = decks.shuffle(unmatchedData);

        unmatchedIndices.forEach((gridIndex, i) => {
            gameEngine.cards[gridIndex].data = shuffledData[i];
            ui.renderCardFront(gameEngine.cards[gridIndex]);
        });

        ui.showToast("🔀 Cards shuffled!");
    }

    // Magnet: Find and highlight one matching pair
    executeMagnet(gameEngine) {
        const unmatched = gameEngine.cards.filter(c => !c.matched && !c.flipped);
        const pairMap = new Map();
        let targetPair = null;

        for (let card of unmatched) {
            if (pairMap.has(card.data.pairId)) {
                targetPair = [pairMap.get(card.data.pairId), card];
                break;
            }
            pairMap.set(card.data.pairId, card);
        }

        if (targetPair) {
            targetPair[0].element.classList.add('matched');
            targetPair[1].element.classList.add('matched');

            setTimeout(() => {
                targetPair[0].element.classList.remove('matched');
                targetPair[1].element.classList.remove('matched');
            }, 2000);

            ui.showToast("🧲 Pair highlighted!");
        }
    }
}

const powerups = new PowerupManager();
