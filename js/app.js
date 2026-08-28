/* ==========================================================================
   MEMORY MATCH - APPLICATION LAUNCHER & MAIN INITIALIZER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Stats & LocalStorage
    stats.init();

    // Initialize Canvas Particles
    particles.init('particleCanvas');

    // Initialize UI Event Listeners
    ui.init();

    // Bind Navbar Modal Buttons
    const openSettingsBtn = document.getElementById('openSettingsBtn');
    if (openSettingsBtn) openSettingsBtn.addEventListener('click', () => ui.openModal('settingsModal'));

    const openHelpBtn = document.getElementById('openHelpBtn');
    if (openHelpBtn) openHelpBtn.addEventListener('click', () => ui.openModal('helpModal'));

    const openStatsBtn = document.getElementById('openStatsBtn');
    if (openStatsBtn) openStatsBtn.addEventListener('click', () => {
        populateStatsModal();
        ui.openModal('statsModal');
    });

    const openAchievementsBtn = document.getElementById('openAchievementsBtn');
    if (openAchievementsBtn) openAchievementsBtn.addEventListener('click', () => {
        populateAchievementsModal();
        ui.openModal('achievementsModal');
    });

    // Grid Size Selectors
    document.querySelectorAll('[data-grid-size]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('[data-grid-size]').forEach(b => b.classList.remove('btn-primary'));
            btn.classList.add('btn-primary');

            const size = btn.dataset.gridSize;
            const [cols, rows] = size.split('x').map(Number);
            engine.initGrid(rows, cols, modes.currentMode);
        });
    });

    // Mode Selector Buttons
    document.querySelectorAll('[data-mode]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('[data-mode]').forEach(b => b.classList.remove('btn-primary'));
            btn.classList.add('btn-primary');

            const mode = btn.dataset.mode;
            modes.setMode(mode, { rows: engine.gridDimensions.rows, cols: engine.gridDimensions.cols });
        });
    });

    // Restart Button
    const restartBtn = document.getElementById('restartBtn');
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            engine.initGrid(engine.gridDimensions.rows, engine.gridDimensions.cols, modes.currentMode);
        });
    }

    // Modal Close Buttons
    document.querySelectorAll('.modal-close, [data-modal-close]').forEach(btn => {
        btn.addEventListener('click', () => ui.closeAllModals());
    });

    // JSON Export / Import buttons
    const exportBtn = document.getElementById('exportSaveBtn');
    if (exportBtn) exportBtn.addEventListener('click', () => stats.exportJSON());

    const importInput = document.getElementById('importSaveInput');
    if (importInput) {
        importInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => stats.importJSON(event.target.result);
                reader.readAsText(file);
            }
        });
    }

    // Unlock Audio Context on first click anywhere
    document.body.addEventListener('click', () => {
        audio.ensureContext();
    }, { once: true });

    // Start Default Game (4x4 Classic Match)
    engine.initGrid(4, 4, 'classic');
});

function populateStatsModal() {
    const statsContainer = document.getElementById('statsModalContent');
    if (!statsContainer) return;

    statsContainer.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
            <div style="background: var(--bg-primary); padding: 16px; border-radius: 12px;">
                <div class="stat-label">Total Played</div>
                <div class="stat-value">${stats.data.totalGames}</div>
            </div>
            <div style="background: var(--bg-primary); padding: 16px; border-radius: 12px;">
                <div class="stat-label">Total Wins</div>
                <div class="stat-value">${stats.data.wins}</div>
            </div>
            <div style="background: var(--bg-primary); padding: 16px; border-radius: 12px;">
                <div class="stat-label">Matching Accuracy</div>
                <div class="stat-value">${stats.getAccuracy()}%</div>
            </div>
            <div style="background: var(--bg-primary); padding: 16px; border-radius: 12px;">
                <div class="stat-label">Highest Streak</div>
                <div class="stat-value">${stats.data.highestCombo}x</div>
            </div>
        </div>
        <h4 style="font-family: var(--font-heading); margin-bottom: 12px;">Best Times</h4>
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
            ${Object.entries(stats.data.bestTimes).map(([size, time]) => `
                <div style="background: var(--bg-primary); padding: 10px 16px; border-radius: 8px;">
                    <span style="color: var(--text-muted); font-size: 0.8rem;">${size}:</span>
                    <strong style="color: var(--text-main);">${time ? time + 's' : '--'}</strong>
                </div>
            `).join('')}
        </div>
    `;
}

function populateAchievementsModal() {
    const achContainer = document.getElementById('achievementsModalContent');
    if (!achContainer) return;

    achContainer.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; background: var(--bg-primary); padding: 16px; border-radius: 12px;">
            <div>
                <span class="stat-label">Player Level</span>
                <div class="stat-value" style="color: var(--accent-gold);">Level ${achievements.level}</div>
            </div>
            <div>
                <span class="stat-label">Total XP</span>
                <div class="stat-value">${achievements.xp} XP</div>
            </div>
            <div>
                <span class="stat-label">Unlocked</span>
                <div class="stat-value">${achievements.unlocked.size} / ${ACHIEVEMENTS_LIST.length}</div>
            </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px; max-height: 400px; overflow-y: auto;">
            ${ACHIEVEMENTS_LIST.map(ach => {
                const isUnlocked = achievements.unlocked.has(ach.id);
                return `
                    <div style="display: flex; align-items: center; gap: 14px; padding: 12px; background: var(--bg-primary); border-radius: 12px; opacity: ${isUnlocked ? 1 : 0.45}; border: 1px solid ${isUnlocked ? 'var(--accent-glow)' : 'transparent'};">
                        <div style="font-size: 2rem;">${ach.icon}</div>
                        <div style="flex: 1;">
                            <div style="font-weight: 700; color: ${isUnlocked ? 'var(--text-main)' : 'var(--text-muted)'}">${ach.title}</div>
                            <div style="font-size: 0.8rem; color: var(--text-muted);">${ach.desc}</div>
                        </div>
                        <div style="font-weight: 800; color: var(--accent-gold); font-size: 0.85rem;">+${ach.xp} XP</div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}
