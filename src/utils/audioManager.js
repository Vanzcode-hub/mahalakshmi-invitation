// Dedicated Background Music Controller for Pixabay Track (India Drums Tabla Sitar Ethnic Mood)
class BackgroundMusicManager {
  constructor() {
    this.audio = null;
    this.isPlaying = false;
    this.audioSrc = '/assets/audio/devotional-bgm.mp3';
    this.fallbackSrc = 'https://cdn.pixabay.com/audio/2026/08/10/audio_c0bf011257.mp3';
  }

  init() {
    if (!this.audio) {
      this.audio = new Audio(this.audioSrc);
      this.audio.loop = true;
      this.audio.volume = 0.55;

      this.audio.addEventListener('error', () => {
        // Fallback to online CDN if local path fails
        if (this.audio.src !== this.fallbackSrc) {
          this.audio.src = this.fallbackSrc;
          if (this.isPlaying) {
            this.audio.play().catch(() => {});
          }
        }
      });
    }
  }

  play() {
    this.init();
    if (!this.audio) return;
    this.isPlaying = true;
    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.log('Audio autoplay prevented:', err);
      });
    }
  }

  pause() {
    if (this.audio) {
      this.audio.pause();
    }
    this.isPlaying = false;
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }
}

export const bgMusic = new BackgroundMusicManager();
