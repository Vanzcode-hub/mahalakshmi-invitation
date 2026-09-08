// Web Audio API based Devotional Sound Engine (Temple Bells, Shankha/Drone, Chimes)
class DevotionalAudioManager {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.droneGain = null;
    this.droneOscs = [];
    this.audioElement = null;
    this.customAudioUrl = '/assets/audio/mahalakshmi-stotra.mp3';
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play rich resonant brass temple bell with natural harmonics & sustain
  playTempleBell(frequency = 528) {
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // Harmonic frequencies for temple bell
    const harmonics = [1, 2.02, 2.98, 4.15, 5.43];
    const gains = [0.6, 0.4, 0.25, 0.15, 0.08];

    harmonics.forEach((ratio, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = i === 0 ? 'sine' : (i % 2 === 0 ? 'triangle' : 'sine');
      osc.frequency.setValueAtTime(frequency * ratio, now);

      // Bell envelope: sharp strike and long decaying ring
      const decay = 3.5 - (i * 0.4);
      gain.gain.setValueAtTime(gains[i] * 0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + Math.max(decay, 1.2));

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + Math.max(decay, 1.2));
    });
  }

  // Soft sacred chime
  playSacredChime() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [659.25, 783.99, 987.77, 1174.66, 1318.51]; // E5, G5, B5, D6, E6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startTime = now + (idx * 0.12);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(0.12, startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 2.0);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 2.0);
    });
  }

  // Start continuous peaceful meditative background ambience (Tanpura drone + Om frequency resonance)
  startDevotionalAmbience() {
    this.init();
    if (!this.ctx || this.isPlaying) return;
    this.isPlaying = true;

    // Try HTML5 Audio first if available
    try {
      if (!this.audioElement) {
        this.audioElement = new Audio();
        // Online high quality royalty-free sacred meditation stotra stream/loop
        this.audioElement.src = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=meditation-flute-and-bell-113884.mp3';
        this.audioElement.loop = true;
        this.audioElement.volume = 0.45;
      }
      const promise = this.audioElement.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // If network or external audio blocked, fallback seamlessly to our Web Audio harmonic drone
          this.startWebAudioDrone();
        });
      }
    } catch {
      this.startWebAudioDrone();
    }
  }

  startWebAudioDrone() {
    if (!this.ctx || this.droneGain) return;
    const now = this.ctx.currentTime;
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.01, now);
    this.droneGain.gain.linearRampToValueAtTime(0.18, now + 3);
    this.droneGain.connect(this.ctx.destination);

    // Sacred C# (Sa) 136.1 Hz Om frequency + Pancham (G# 204.15 Hz)
    const baseFreqs = [136.1, 204.15, 272.2, 408.3];
    baseFreqs.forEach(freq => {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      
      // Subtle pitch vibrato/beating
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.value = 0.2 + Math.random() * 0.3;
      lfoGain.gain.value = 0.5;
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start(now);

      osc.connect(this.droneGain);
      osc.start(now);
      this.droneOscs.push(osc, lfo);
    });
  }

  pause() {
    this.isPlaying = false;
    if (this.audioElement) {
      this.audioElement.pause();
    }
    if (this.droneGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.droneGain.gain.linearRampToValueAtTime(0.001, now + 0.5);
      setTimeout(() => {
        this.droneOscs.forEach(o => {
          try { o.stop(); } catch {}
        });
        this.droneOscs = [];
        this.droneGain = null;
      }, 500);
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.startDevotionalAmbience();
      return true;
    }
  }
}

export const devotionalAudio = new DevotionalAudioManager();
