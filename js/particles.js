/* ==========================================================================
   MEMORY MATCH - HTML5 CANVAS PARTICLE SYSTEM ENGINE
   ========================================================================== */

class ParticleEngine {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.ambientParticles = [];
        this.width = 0;
        this.height = 0;
        this.isRunning = false;
        this.themeColors = ['#00f0ff', '#ff007f', '#ffe600', '#00ff80', '#9d00ff'];
    }

    init(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');

        this.resize();
        window.addEventListener('resize', () => this.resize());

        this.createAmbientParticles();
        this.start();
    }

    resize() {
        if (!this.canvas) return;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    setColors(colors) {
        if (Array.isArray(colors) && colors.length > 0) {
            this.themeColors = colors;
        }
    }

    createAmbientParticles() {
        this.ambientParticles = [];
        const count = Math.min(50, Math.floor((this.width * this.height) / 25000));

        for (let i = 0; i < count; i++) {
            this.ambientParticles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                radius: Math.random() * 2 + 1,
                color: this.themeColors[Math.floor(Math.random() * this.themeColors.length)],
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                alpha: Math.random() * 0.5 + 0.1,
                pulse: Math.random() * 0.02
            });
        }
    }

    // Spawn celebratory match explosion particles at specific card coordinates
    spawnMatchBurst(x, y, count = 30) {
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.2);
            const speed = Math.random() * 6 + 2;

            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                radius: Math.random() * 4 + 2,
                color: this.themeColors[Math.floor(Math.random() * this.themeColors.length)],
                alpha: 1,
                decay: Math.random() * 0.02 + 0.015,
                gravity: 0.08,
                shape: Math.random() > 0.5 ? 'circle' : 'star'
            });
        }
    }

    // Spawn Victory Confetti Cannon
    spawnConfetti(durationSeconds = 3) {
        const endTime = Date.now() + durationSeconds * 1000;

        const interval = setInterval(() => {
            if (Date.now() > endTime) {
                clearInterval(interval);
                return;
            }

            for (let i = 0; i < 8; i++) {
                this.particles.push({
                    x: Math.random() * this.width,
                    y: -10,
                    vx: (Math.random() - 0.5) * 4,
                    vy: Math.random() * 4 + 3,
                    width: Math.random() * 8 + 6,
                    height: Math.random() * 12 + 8,
                    color: this.themeColors[Math.floor(Math.random() * this.themeColors.length)],
                    alpha: 1,
                    rotation: Math.random() * Math.PI * 2,
                    vRot: (Math.random() - 0.5) * 0.2,
                    decay: 0.005,
                    gravity: 0.05,
                    shape: 'rect'
                });
            }
        }, 100);
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.loop();
    }

    stop() {
        this.isRunning = false;
    }

    loop() {
        if (!this.isRunning) return;

        this.ctx.clearRect(0, 0, this.width, this.height);

        // Render Ambient Background Particles
        for (let p of this.ambientParticles) {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = this.width;
            if (p.x > this.width) p.x = 0;
            if (p.y < 0) p.y = this.height;
            if (p.y > this.height) p.y = 0;

            p.alpha += p.pulse;
            if (p.alpha > 0.6 || p.alpha < 0.1) p.pulse = -p.pulse;

            this.ctx.save();
            this.ctx.globalAlpha = p.alpha;
            this.ctx.fillStyle = p.color;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        }

        // Render Burst & Confetti Particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            if (p.gravity) p.vy += p.gravity;
            p.alpha -= p.decay;

            if (p.rotation !== undefined) p.rotation += p.vRot;

            if (p.alpha <= 0 || p.y > this.height + 20) {
                this.particles.splice(i, 1);
                continue;
            }

            this.ctx.save();
            this.ctx.globalAlpha = p.alpha;
            this.ctx.fillStyle = p.color;

            if (p.shape === 'rect') {
                this.ctx.translate(p.x, p.y);
                this.ctx.rotate(p.rotation);
                this.ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
            } else if (p.shape === 'star') {
                this.ctx.translate(p.x, p.y);
                this.ctx.rotate(p.alpha * 5);
                this.ctx.fillRect(-p.radius, -p.radius, p.radius * 2, p.radius * 2);
            } else {
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                this.ctx.fill();
            }

            this.ctx.restore();
        }

        requestAnimationFrame(() => this.loop());
    }
}

const particles = new ParticleEngine();
