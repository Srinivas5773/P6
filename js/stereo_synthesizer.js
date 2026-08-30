/**
 * Stereo Synthesizer and Spatial Audio FX
 * Generates card flip swooshes, chime fanfare, and mismatch buzzing.
 */

class StereoSynthesizer {
  constructor() {
    this.soundEffects = {
      flip: { freq: 440, type: 'sine', duration: 0.1 },
      match: { freq: 880, type: 'triangle', duration: 0.35 },
      mismatch: { freq: 150, type: 'sawtooth', duration: 0.2 },
      victory: { freq: 659, type: 'sine', duration: 1.2 }
    };
  }

  getEffectConfig(effectName) {
    return this.soundEffects[effectName] || this.soundEffects.flip;
  }

  listAvailableEffects() {
    return Object.keys(this.soundEffects);
  }
}

module.exports = new StereoSynthesizer();
