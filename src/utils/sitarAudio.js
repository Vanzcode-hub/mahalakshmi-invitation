// Classical Devotional Sitar & Tanpura Audio Engine
class SitarMusicManager {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timerId = null;
    this.audioElement = null;
    this.volume = 0.6;
    this.droneNodes = [];
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

  // Pluck a realistic Sitar string with Jawari buzz harmonics and sympathetic resonance
  pluckSitarString(freq, duration = 3.2, velocity = 0.5, slideTo = null) {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;

    // Jawari harmonics specific to Sitar
    const harmonics = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const weights = [1.0, 0.75, 0.55, 0.4, 0.3, 0.22, 0.15, 0.1, 0.05];

    harmonics.forEach((h, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Jawari non-linear buzz mix
      osc.type = idx % 2 === 0 ? 'triangle' : 'sawtooth';
      
      const noteFreq = freq * h;
      osc.frequency.setValueAtTime(noteFreq, now);

      // Meend (Sitar string pitch bend / glide)
      if (slideTo && idx === 0) {
        osc.frequency.setTargetAtTime(slideTo * h, now + 0.15, 0.25);
      }

      // Sitar envelope (instant bright attack + long resonant decay)
      const decayTime = duration / (1 + idx * 0.35);
      gain.gain.setValueAtTime(velocity * weights[idx] * 0.07 * this.volume, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + decayTime);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + decayTime);
    });

    // Sympathetic resonant string ring (Tarab)
    const tarabOsc = this.ctx.createOscillator();
    const tarabGain = this.ctx.createGain();
    tarabOsc.type = 'sine';
    tarabOsc.frequency.setValueAtTime(freq * 2, now);
    tarabGain.gain.setValueAtTime(0.015 * this.volume, now);
    tarabGain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 1.2);
    tarabOsc.connect(tarabGain);
    tarabGain.connect(this.ctx.destination);
    tarabOsc.start(now);
    tarabOsc.stop(now + duration * 1.2);
  }

  // Tanpura background drone for sitar
  startTanpuraDrone() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Pa - Sa - Sa - Sa (196Hz, 130.81Hz, 130.81Hz, 65.4Hz)
    const freqs = [196.0, 130.81, 130.81, 65.41];
    
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.01, now);
    this.droneGain.gain.linearRampToValueAtTime(0.07 * this.volume, now + 3);
    this.droneGain.connect(this.ctx.destination);

    freqs.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      osc.type = i === 3 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(f, now);

      // Subtle vibrato
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.value = 0.2 + (i * 0.08);
      lfoGain.gain.value = 0.6;
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start(now);

      osc.connect(this.droneGain);
      osc.start(now);
      this.droneNodes.push(osc, lfo);
    });
  }

  // Play continuous meditative devotional Sitar Alap
  startSitarAlap() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;

    // Check if custom user-provided MP3 exists
    try {
      if (!this.audioElement) {
        this.audioElement = new Audio('/assets/audio/sitar.mp3');
        this.audioElement.loop = true;
        this.audioElement.volume = this.volume;
      }
      this.audioElement.play().catch(() => {
        // Run meditative Sitar synthesizer engine
        this.runSitarMelodyLoop();
      });
    } catch {
      this.runSitarMelodyLoop();
    }
  }

  runSitarMelodyLoop() {
    this.startTanpuraDrone();

    // Raag Bhairavi / Yaman meditative devotional sitar notes
    // C# scale (Sa: 277.18Hz, Re: 293.66Hz, Ga: 349.23Hz, Ma: 369.99Hz, Pa: 415.30Hz, Dha: 440.0Hz, Ni: 523.25Hz, Tar Sa: 554.37Hz)
    const Sa = 277.18;
    const KomalRe = 293.66;
    const ShuddhaGa = 349.23;
    const TeevraMa = 392.00;
    const Pa = 415.30;
    const Dha = 466.16;
    const ShuddhaNi = 523.25;
    const TarSa = 554.37;
    const MandraPa = 207.65;

    // Sitar devotional sequence phrases
    const phrases = [
      // Phrase 1: Mandra Pa -> Sa -> Re -> Ga (gentle opening)
      [
        { note: MandraPa, dur: 2.5, vel: 0.5, slide: Sa, delay: 0 },
        { note: Sa, dur: 3.0, vel: 0.6, delay: 900 },
        { note: KomalRe, dur: 2.2, vel: 0.5, delay: 2100 },
        { note: ShuddhaGa, dur: 3.5, vel: 0.7, slide: Sa, delay: 3100 },
      ],
      // Phrase 2: Ga -> Ma -> Pa -> Dha -> Pa
      [
        { note: ShuddhaGa, dur: 2.0, vel: 0.55, delay: 0 },
        { note: TeevraMa, dur: 2.0, vel: 0.6, delay: 1000 },
        { note: Pa, dur: 3.8, vel: 0.75, delay: 2000 },
        { note: Dha, dur: 2.2, vel: 0.6, slide: Pa, delay: 3500 },
        { note: Pa, dur: 3.0, vel: 0.5, delay: 4700 },
      ],
      // Phrase 3: Pa -> Ni -> TarSa (Devotional ascent)
      [
        { note: Pa, dur: 2.2, vel: 0.6, delay: 0 },
        { note: ShuddhaNi, dur: 2.5, vel: 0.65, delay: 1100 },
        { note: TarSa, dur: 4.5, vel: 0.85, slide: ShuddhaNi, delay: 2300 },
        { note: ShuddhaNi, dur: 2.0, vel: 0.5, delay: 4500 },
        { note: Dha, dur: 2.2, vel: 0.5, delay: 5600 },
        { note: Pa, dur: 3.5, vel: 0.6, delay: 6800 },
      ],
      // Phrase 4: Ga -> Re -> Sa (Calm resolution)
      [
        { note: ShuddhaGa, dur: 2.5, vel: 0.6, delay: 0 },
        { note: KomalRe, dur: 2.8, vel: 0.55, slide: Sa, delay: 1200 },
        { note: Sa, dur: 5.0, vel: 0.75, delay: 2600 },
      ]
    ];

    let currentPhrase = 0;

    const playNextPhrase = () => {
      if (!this.isPlaying) return;
      const phrase = phrases[currentPhrase];
      let maxDelay = 0;

      phrase.forEach(item => {
        setTimeout(() => {
          if (this.isPlaying) {
            this.pluckSitarString(item.note, item.dur, item.vel, item.slide);
          }
        }, item.delay);
        if (item.delay + (item.dur * 1000) > maxDelay) {
          maxDelay = item.delay + (item.dur * 1000);
        }
      });

      // Chikari rhythmic strumming between phrases
      setTimeout(() => {
        if (this.isPlaying) {
          this.pluckSitarString(TarSa, 1.2, 0.35);
          setTimeout(() => this.pluckSitarString(TarSa, 1.0, 0.28), 180);
          setTimeout(() => this.pluckSitarString(Sa, 1.5, 0.4), 360);
        }
      }, maxDelay - 800);

      currentPhrase = (currentPhrase + 1) % phrases.length;
      this.timerId = setTimeout(playNextPhrase, maxDelay + 1200);
    };

    playNextPhrase();
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) clearTimeout(this.timerId);
    if (this.audioElement) {
      this.audioElement.pause();
    }
    if (this.droneGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.droneGain.gain.linearRampToValueAtTime(0.001, now + 0.5);
      setTimeout(() => {
        this.droneNodes.forEach(o => {
          try { o.stop(); } catch {}
        });
        this.droneNodes = [];
        this.droneGain = null;
      }, 500);
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.startSitarAlap();
      return true;
    }
  }
}

export const sitarMusic = new SitarMusicManager();
