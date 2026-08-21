/**
 * Synthesizes realistic mechanical watch escapement ticking and ratchet clicks
 * using Web Audio API (Zero external assets required).
 */
export class AudioManager {
  constructor() {
    this.audioCtx = null;
    this.isEnabled = false;
    this.tickInterval = null;
    this.tickToggle = false;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggle() {
    this.init();
    this.isEnabled = !this.isEnabled;

    if (this.isEnabled) {
      this.startTicking();
    } else {
      this.stopTicking();
    }

    return this.isEnabled;
  }

  startTicking() {
    if (this.tickInterval) clearInterval(this.tickInterval);
    // 28,800 VPH = 8 beats per second = every 125ms
    this.tickInterval = setInterval(() => {
      this.playTick();
    }, 125);
  }

  stopTicking() {
    if (this.tickInterval) {
      clearInterval(this.tickInterval);
      this.tickInterval = null;
    }
  }

  playTick() {
    if (!this.audioCtx || !this.isEnabled) return;

    const t = this.audioCtx.currentTime;
    this.tickToggle = !this.tickToggle;

    // Escapement pallet click (short noise + sine impulse)
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'triangle';
    // Alternate pitch between Tic and Toc (higher crisp pallet stone vs deeper balance jewel)
    osc.frequency.setValueAtTime(this.tickToggle ? 3800 : 2900, t);
    osc.frequency.exponentialRampToValueAtTime(800, t + 0.015);

    gain.gain.setValueAtTime(0.04, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.015);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(t);
    osc.stop(t + 0.015);
  }

  playRatchetClick() {
    if (!this.audioCtx || !this.isEnabled) return;

    const t = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1200, t);
    osc.frequency.exponentialRampToValueAtTime(300, t + 0.03);

    gain.gain.setValueAtTime(0.06, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(t);
    osc.stop(t + 0.03);
  }
}
