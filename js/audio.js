/* ==========================================================================
   MEMORY MATCH - WEB AUDIO API SYNTHESIZER ENGINE
   ========================================================================== */

class SoundEngine {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
        this.fxVolume = 0.5;
        this.musicVolume = 0.3;
        this.musicPlaying = false;
        this.musicInterval = null;
        this.masterGain = null;
        this.musicGain = null;
        this.fxGain = null;

        // Custom scale frequencies for procedural melodies
        this.notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 587.33, 659.25];
    }

    init() {
        if (this.ctx) return;
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();

        this.masterGain = this.ctx.createGain();
        this.fxGain = this.ctx.createGain();
        this.musicGain = this.ctx.createGain();

        this.fxGain.gain.value = this.fxVolume;
        this.musicGain.gain.value = this.musicVolume;
        this.masterGain.gain.value = this.isMuted ? 0 : 1;

        this.fxGain.connect(this.masterGain);
        this.musicGain.connect(this.masterGain);
        this.masterGain.connect(this.ctx.destination);
    }

    ensureContext() {
        if (!this.ctx) {
            this.init();
        } else if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    setMuted(muted) {
        this.isMuted = muted;
        if (this.masterGain) {
            this.masterGain.gain.value = muted ? 0 : 1;
        }
    }

    setFxVolume(vol) {
        this.fxVolume = Math.max(0, Math.min(1, vol));
        if (this.fxGain) this.fxGain.gain.value = this.fxVolume;
    }

    setMusicVolume(vol) {
        this.musicVolume = Math.max(0, Math.min(1, vol));
        if (this.musicGain) this.musicGain.gain.value = this.musicVolume;
    }

    // Play synthesized Card Flip sound
    playFlip() {
        this.ensureContext();
        if (this.isMuted) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        const now = this.ctx.currentTime;
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.08);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

        osc.connect(gain);
        gain.connect(this.fxGain);

        osc.start(now);
        osc.stop(now + 0.08);
    }

    // Play synthesized Pair Match Chime
    playMatch(combo = 1) {
        this.ensureContext();
        if (this.isMuted) return;

        const now = this.ctx.currentTime;
        const baseFreq = 440 * Math.min(1.8, 1 + (combo - 1) * 0.15);

        [0, 4, 7, 12].forEach((semitone, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            const freq = baseFreq * Math.pow(2, semitone / 12);
            osc.frequency.setValueAtTime(freq, now + i * 0.06);

            gain.gain.setValueAtTime(0, now + i * 0.06);
            gain.gain.linearRampToValueAtTime(0.2, now + i * 0.06 + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.35);

            osc.connect(gain);
            gain.connect(this.fxGain);

            osc.start(now + i * 0.06);
            osc.stop(now + i * 0.06 + 0.35);
        });
    }

    // Play synthesized Mismatch Error sound
    playMismatch() {
        this.ensureContext();
        if (this.isMuted) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(110, now + 0.2);

        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

        osc.connect(gain);
        gain.connect(this.fxGain);

        osc.start(now);
        osc.stop(now + 0.2);
    }

    // Play Victory Fanfare
    playVictory() {
        this.ensureContext();
        if (this.isMuted) return;

        const now = this.ctx.currentTime;
        const arpeggio = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99];

        arpeggio.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.1);

            gain.gain.setValueAtTime(0, now + idx * 0.1);
            gain.gain.linearRampToValueAtTime(0.3, now + idx * 0.1 + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.4);

            osc.connect(gain);
            gain.connect(this.fxGain);

            osc.start(now + idx * 0.1);
            osc.stop(now + idx * 0.1 + 0.4);
        });
    }

    // Play Power-Up sound
    playPowerup() {
        this.ensureContext();
        if (this.isMuted) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.25);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

        osc.connect(gain);
        gain.connect(this.fxGain);

        osc.start(now);
        osc.stop(now + 0.25);
    }

    // Play Bomb Explosion sound
    playBomb() {
        this.ensureContext();
        if (this.isMuted) return;

        const now = this.ctx.currentTime;
        const bufferSize = this.ctx.sampleRate * 0.3;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, now);
        filter.frequency.exponentialRampToValueAtTime(50, now + 0.3);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.fxGain);

        noise.start(now);
        noise.stop(now + 0.3);
    }

    // Start Ambient Synthesizer Background Music
    startMusic() {
        if (this.musicPlaying) return;
        this.ensureContext();
        this.musicPlaying = true;

        let step = 0;
        this.musicInterval = setInterval(() => {
            if (!this.musicPlaying || this.isMuted) return;

            const now = this.ctx.currentTime;
            const freq = this.notes[step % this.notes.length];

            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq / 2, now); // Warm bass octave lower

            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(0.12, now + 0.4);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

            osc.connect(gain);
            gain.connect(this.musicGain);

            osc.start(now);
            osc.stop(now + 1.8);

            step = (step + Math.floor(Math.random() * 3) + 1) % this.notes.length;
        }, 1200);
    }

    stopMusic() {
        this.musicPlaying = false;
        if (this.musicInterval) {
            clearInterval(this.musicInterval);
            this.musicInterval = null;
        }
    }
}

const audio = new SoundEngine();
