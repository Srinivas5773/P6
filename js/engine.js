/* ==========================================================================
   MEMORY MATCH - CORE GAME ENGINE & STATE MACHINE
   ========================================================================== */

class GameEngine {
    constructor() {
        this.gridDimensions = { rows: 4, cols: 4 };
        this.gridSizeKey = '4x4';
        this.matchGroupSize = 2; // 2 for Pair Match, 3 for Triple Match
        this.cards = []; // Array of Card objects { id, pairId, flipped, matched, element, data }
        this.flippedCards = [];
        this.isBusy = false;
        this.isGameOver = false;

        this.score = 0;
        this.flips = 0;
        this.matchesCount = 0;
        this.comboStreak = 0;
        this.maxCombo = 0;
        this.mismatches = 0;

        this.startTime = null;
        this.elapsedSeconds = 0;
        this.timerInterval = null;

        this.currentMode = 'classic'; // 'classic', 'triple', 'time_attack', 'quest', 'vs_ai', 'multiplayer', 'zen'
        this.activePlayerIndex = 0;
        this.players = [{ name: 'Player 1', score: 0 }, { name: 'Player 2 / AI', score: 0 }];
    }

    initGrid(rows = 4, cols = 4, mode = 'classic', matchGroupSize = 2) {
        this.resetState();
        this.gridDimensions = { rows, cols };
        this.gridSizeKey = `${cols}x${rows}`;
        this.currentMode = mode;
        this.matchGroupSize = matchGroupSize;

        const totalCards = rows * cols;
        const totalPairs = totalCards / matchGroupSize;

        const cardPool = decks.generateCardPool(totalPairs, matchGroupSize);
        this.cards = [];

        const gridContainer = document.getElementById('gameGrid');
        if (!gridContainer) return;

        gridContainer.innerHTML = '';
        gridContainer.className = `game-grid-container grid-${this.gridSizeKey}`;

        cardPool.forEach((cardData, idx) => {
            const cardEl = this.createCardElement(cardData, idx);
            gridContainer.appendChild(cardEl);

            const cardObj = {
                index: idx,
                data: cardData,
                element: cardEl,
                flipped: false,
                matched: false
            };

            this.cards.push(cardObj);
        });

        this.startTimer();
        ui.updateStatsDisplay();
    }

    createCardElement(cardData, index) {
        const cardNode = document.createElement('div');
        cardNode.className = 'memory-card';
        cardNode.tabIndex = 0;
        cardNode.setAttribute('role', 'button');
        cardNode.setAttribute('aria-label', `Memory card ${index + 1}`);

        cardNode.innerHTML = `
            <div class="card-face card-back">
                <div class="card-back-pattern"></div>
                <svg class="card-back-logo" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
            </div>
            <div class="card-face card-front">
                <svg class="card-icon" viewBox="0 0 24 24" style="color: ${cardData.color || 'var(--text-main)'}">
                    ${cardData.svg}
                </svg>
                <span class="card-label">${cardData.label}</span>
            </div>
        `;

        cardNode.addEventListener('click', () => this.handleCardClick(index));
        cardNode.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.handleCardClick(index);
            }
        });

        return cardNode;
    }

    handleCardClick(index) {
        if (this.isBusy || this.isGameOver) return;
        const cardObj = this.cards[index];
        if (!cardObj || cardObj.flipped || cardObj.matched) return;

        // Flip card
        audio.playFlip();
        cardObj.flipped = true;
        cardObj.element.classList.add('flipped');
        this.flippedCards.push(cardObj);

        if (this.currentMode === 'vs_ai') {
            aiOpponent.observeCard(index, cardObj.data.pairId);
        }

        // Check turn evaluation when target flipped count reached
        if (this.flippedCards.length === this.matchGroupSize) {
            this.flips++;
            this.evaluateTurn();
        }

        ui.updateStatsDisplay();
    }

    evaluateTurn() {
        this.isBusy = true;
        const firstPairId = this.flippedCards[0].data.pairId;
        const isMatch = this.flippedCards.every(c => c.data.pairId === firstPairId);

        if (isMatch) {
            this.handleMatchSuccess();
        } else {
            this.handleMismatchFailure();
        }
    }

    handleMatchSuccess() {
        this.comboStreak++;
        if (this.comboStreak > this.maxCombo) this.maxCombo = this.comboStreak;

        const basePoints = 100 * this.matchGroupSize;
        const comboBonus = (this.comboStreak - 1) * 50;
        const earned = basePoints + comboBonus;

        this.score += earned;
        this.matchesCount++;

        audio.playMatch(this.comboStreak);
        achievements.unlock('first_match');

        // Particle explosion at first card's center
        const firstRect = this.flippedCards[0].element.getBoundingClientRect();
        particles.spawnMatchBurst(firstRect.left + firstRect.width / 2, firstRect.top + firstRect.height / 2, 35);

        this.flippedCards.forEach(c => {
            c.matched = true;
            c.element.classList.add('matched');
        });

        if (this.currentMode === 'vs_ai') {
            aiOpponent.forgetIndices(this.flippedCards.map(c => c.index));
            this.players[this.activePlayerIndex].score += earned;
        }

        this.flippedCards = [];
        this.isBusy = false;

        this.checkWinCondition();
    }

    handleMismatchFailure() {
        this.mismatches++;
        this.comboStreak = 0;
        audio.playMismatch();

        this.flippedCards.forEach(c => c.element.classList.add('mismatch'));

        setTimeout(() => {
            this.flippedCards.forEach(c => {
                c.flipped = false;
                c.element.classList.remove('flipped', 'mismatch');
            });
            this.flippedCards = [];
            this.isBusy = false;

            // Switch turn in VS or Multiplayer modes
            if (this.currentMode === 'vs_ai' || this.currentMode === 'multiplayer') {
                this.switchTurn();
            }
        }, 1000);
    }

    switchTurn() {
        this.activePlayerIndex = (this.activePlayerIndex + 1) % this.players.length;
        ui.updatePlayerTurnIndicator();

        if (this.currentMode === 'vs_ai' && this.activePlayerIndex === 1) {
            this.triggerAITurn();
        }
    }

    triggerAITurn() {
        if (this.isGameOver) return;
        this.isBusy = true;

        const unmatchedIndices = this.cards.filter(c => !c.matched && !c.flipped).map(c => c.index);
        
        aiOpponent.chooseNextMove(unmatchedIndices, null).then(firstChoice => {
            this.handleCardClick(firstChoice);

            if (this.flippedCards.length > 0 && !this.isGameOver) {
                aiOpponent.chooseNextMove(unmatchedIndices, firstChoice).then(secondChoice => {
                    this.handleCardClick(secondChoice);
                });
            }
        });
    }

    checkWinCondition() {
        const allMatched = this.cards.every(c => c.matched);
        if (allMatched) {
            this.handleGameOver(true);
        }
    }

    handleGameOver(isWin = true) {
        this.isGameOver = true;
        this.stopTimer();

        if (isWin) {
            audio.playVictory();
            particles.spawnConfetti(4);

            const gameRecord = {
                gridSize: this.gridSizeKey,
                mode: this.currentMode,
                score: this.score,
                flips: this.flips,
                matches: this.matchesCount,
                mismatches: this.mismatches,
                maxCombo: this.maxCombo,
                elapsedSeconds: this.elapsedSeconds,
                isWin: true,
                aiDifficulty: aiOpponent.difficulty,
                winner: this.players[this.activePlayerIndex].name
            };

            stats.recordGame(gameRecord);
            achievements.checkGameCompletion(gameRecord);
            ui.showWinModal(gameRecord);
        }
    }

    startTimer() {
        this.stopTimer();
        this.startTime = Date.now();
        this.elapsedSeconds = 0;

        this.timerInterval = setInterval(() => {
            if (!this.isGameOver && !powerups.isFrozen) {
                this.elapsedSeconds = Math.floor((Date.now() - this.startTime) / 1000);
                ui.updateTimerDisplay(this.elapsedSeconds);

                // Time Attack mode timer countdown check
                if (this.currentMode === 'time_attack' && modes.timeLimit) {
                    const remaining = modes.timeLimit - this.elapsedSeconds;
                    if (remaining <= 0) {
                        this.handleGameOver(false);
                        ui.showToast("⏳ Time's Up! Game Over");
                    }
                }
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    resetState() {
        this.stopTimer();
        this.cards = [];
        this.flippedCards = [];
        this.isBusy = false;
        this.isGameOver = false;
        this.score = 0;
        this.flips = 0;
        this.matchesCount = 0;
        this.comboStreak = 0;
        this.maxCombo = 0;
        this.mismatches = 0;
        this.elapsedSeconds = 0;
        this.activePlayerIndex = 0;
        powerups.resetInventory();
    }
}

const engine = new GameEngine();
