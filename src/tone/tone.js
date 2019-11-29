import {NOTE, NOTES, HZ, MAX_SCALE} from '../constants/constants';

let audioContext = new AudioContext();

class TonePlayer {
  constructor() {
    this.gains = {
      [NOTE.A]: [],
      [NOTE.B]: [],
      [NOTE.C]: [],
      [NOTE.D]: [],
      [NOTE.E]: [],
      [NOTE.F]: [],
      [NOTE.G]: [],
    };
    this.playing_note = null;
    this.playing_scale = null;
  }

  init() {
    NOTES.forEach(note => {
      for (let scale = 0; scale <= MAX_SCALE; scale++) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.frequency.value = HZ[note][scale];
        oscillator.start(0);
        oscillator.connect(gainNode);
        this.gains[note].push(gainNode);
      }
    });
  }

  play(note, playTimeMs) {
    const self = this;
    const gainNode = self.gains[note.note][note.scale];
    this.playing_note = note.note;
    this.playing_scale = note.scale;
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.connect(audioContext.destination);
    gainNode.gain.setValueCurveAtTime(Float32Array.from([0.001, 0.7, 1.0, 1.0, 1.0, 0.7, 0.001]), audioContext.currentTime, playTimeMs / 1000);
    setTimeout(() => self.stop(), playTimeMs);
  }

  stop() {
    if (this.playing_note !== null && this.playing_scale !== null) {
      this.gains[this.playing_note][this.playing_scale].disconnect(audioContext.destination);
      this.playing_note = null;
      this.playing_scale = null;
    }
  }
}

export default new TonePlayer();
