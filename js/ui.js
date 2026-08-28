/* ==========================================================================
   MEMORY MATCH - UI MANAGER & DOM CONTROLLER
   ========================================================================== */

class UIManager {
    constructor() {
        this.activeModal = null;
        this.focusedCardIndex = 0;
    }

    init() {
        this.bindEvents();
        this.setupKeyboardNavigation();
    }

    bindEvents() {
        // Theme selector listener
        const themeSelect = document.getElementById('themeSelect');
        if (themeSelect) {
            themeSelect.addEventListener('change', (e) => {
                this.setTheme(e.target.value);
            });
        }

        // Deck selector listener
        const deckSelect = document.getElementById('deckSelect');
        if (deckSelect) {
            deckSelect.addEventListener('change', (e) => {
                decks.setDeck(e.target.value);
                achievements.trackDeckUse(e.target.value);
            });
        }

        // Mute button toggle
        const muteBtn = document.getElementById('muteBtn');
        if (muteBtn) {
            muteBtn.addEventListener('click', () => {
                audio.setMuted(!audio.isMuted);
                muteBtn.innerHTML = audio.isMuted ? '🔇' : '🔊';
            });
        }

        // Sound FX & Music sliders
        const fxSlider = document.getElementById('fxVolSlider');
        if (fxSlider) {
            fxSlider.addEventListener('input', (e) => audio.setFxVolume(parseFloat(e.target.value)));
        }

        const musicSlider = document.getElementById('musicVolSlider');
        if (musicSlider) {
            musicSlider.addEventListener('input', (e) => {
                audio.setMusicVolume(parseFloat(e.target.value));
                if (parseFloat(e.target.value) > 0 && !audio.musicPlaying) {
                    audio.startMusic();
                }
            });
        }

        // Power-up Buttons
        ['peek', 'freeze', 'shuffle', 'magnet'].forEach(type => {
            const btn = document.getElementById(`powerup_${type}`);
            if (btn) {
                btn.addEventListener('click', () => powerups.usePowerup(type, engine));
            }
        });
    }

    setTheme(themeName) {
        document.documentElement.setAttribute('data-theme', themeName);
        achievements.trackThemeUse(themeName);

        // Update particle colors based on theme
        const style = getComputedStyle(document.documentElement);
        const particleStr = style.getPropertyValue('--particle-colors');
        if (particleStr) {
            const colors = particleStr.split(',').map(c => c.trim());
            particles.setColors(colors);
        }
    }

    updateStatsDisplay() {
        const scoreEl = document.getElementById('statScore');
        const flipsEl = document.getElementById('statFlips');
        const matchesEl = document.getElementById('statMatches');
        const comboEl = document.getElementById('statCombo');

        if (scoreEl) scoreEl.textContent = engine.score;
        if (flipsEl) flipsEl.textContent = engine.flips;
        if (matchesEl) matchesEl.textContent = engine.matchesCount;
        if (comboEl) {
            comboEl.textContent = engine.comboStreak > 1 ? `${engine.comboStreak}x` : '1x';
            comboEl.style.color = engine.comboStreak > 2 ? 'var(--accent-glow)' : 'var(--text-main)';
        }
    }

    updateTimerDisplay(seconds) {
        const timerEl = document.getElementById('statTimer');
        if (!timerEl) return;

        if (engine.currentMode === 'time_attack' && modes.timeLimit) {
            const remaining = Math.max(0, modes.timeLimit - seconds);
            const mins = Math.floor(remaining / 60);
            const secs = remaining % 60;
            timerEl.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
            if (remaining <= 10) timerEl.style.color = '#ff3333';
        } else {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            timerEl.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
            timerEl.style.color = 'var(--text-main)';
        }
    }

    updatePowerupCounts(inventory) {
        Object.keys(inventory).forEach(type => {
            const badge = document.getElementById(`powerup_count_${type}`);
            const btn = document.getElementById(`powerup_${type}`);
            if (badge) badge.textContent = inventory[type];
            if (btn) btn.disabled = inventory[type] <= 0;
        });
    }

    updatePlayerTurnIndicator() {
        const p1Card = document.getElementById('p1TurnCard');
        const p2Card = document.getElementById('p2TurnCard');

        if (p1Card && p2Card) {
            p1Card.classList.toggle('active', engine.activePlayerIndex === 0);
            p2Card.classList.toggle('active', engine.activePlayerIndex === 1);

            document.getElementById('p1ScoreVal').textContent = engine.players[0].score;
            document.getElementById('p2ScoreVal').textContent = engine.players[1].score;
        }
    }

    renderCardFront(cardObj) {
        const frontEl = cardObj.element.querySelector('.card-front');
        if (!frontEl) return;

        frontEl.innerHTML = `
            <svg class="card-icon" viewBox="0 0 24 24" style="color: ${cardObj.data.color || 'var(--text-main)'}">
                ${cardObj.data.svg}
            </svg>
            <span class="card-label">${cardObj.data.label}</span>
        `;
    }

    showToast(message) {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    openModal(modalId) {
        this.closeAllModals();
        const overlay = document.getElementById(modalId);
        if (overlay) {
            overlay.classList.add('active');
            this.activeModal = overlay;
        }
    }

    closeAllModals() {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
        this.activeModal = null;
    }

    showWinModal(record) {
        const winModalContent = document.getElementById('winModalContent');
        if (!winModalContent) return;

        const stars = modes.currentMode === 'quest' ? modes.calculateStars(record.elapsedSeconds, record.mismatches) : 3;
        const starHTML = '⭐'.repeat(stars);

        winModalContent.innerHTML = `
            <h2 style="font-family: var(--font-heading); color: var(--accent-gold); font-size: 2rem; margin-bottom: 12px;">VICTORY!</h2>
            <div style="font-size: 2.5rem; margin-bottom: 16px;">${starHTML}</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px; text-align: left;">
                <div><strong>Final Score:</strong> ${record.score}</div>
                <div><strong>Time:</strong> ${record.elapsedSeconds}s</div>
                <div><strong>Total Flips:</strong> ${record.flips}</div>
                <div><strong>Max Combo:</strong> ${record.maxCombo}x</div>
                <div><strong>Accuracy:</strong> ${stats.getAccuracy()}%</div>
                <div><strong>Grid Size:</strong> ${record.gridSize}</div>
            </div>
            <button class="btn btn-primary" onclick="engine.initGrid(engine.gridDimensions.rows, engine.gridDimensions.cols, engine.currentMode); ui.closeAllModals();">Play Again</button>
        `;

        this.openModal('winModal');
    }

    // Full Keyboard Accessibility Arrow Key Navigation
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (this.activeModal || engine.cards.length === 0) return;

            const cols = engine.gridDimensions.cols;
            const rows = engine.gridDimensions.rows;
            const total = engine.cards.length;

            let newIndex = this.focusedCardIndex;

            switch (e.key) {
                case 'ArrowRight':
                    newIndex = (this.focusedCardIndex + 1) % total;
                    break;
                case 'ArrowLeft':
                    newIndex = (this.focusedCardIndex - 1 + total) % total;
                    break;
                case 'ArrowDown':
                    if (this.focusedCardIndex + cols < total) newIndex = this.focusedCardIndex + cols;
                    break;
                case 'ArrowUp':
                    if (this.focusedCardIndex - cols >= 0) newIndex = this.focusedCardIndex - cols;
                    break;
                default:
                    return;
            }

            if (newIndex !== this.focusedCardIndex && engine.cards[newIndex]) {
                e.preventDefault();
                this.focusedCardIndex = newIndex;
                engine.cards[newIndex].element.focus();
            }
        });
    }
}

const ui = new UIManager();
