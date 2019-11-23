import {NOTE, NOTES, HZ, MAX_SCALE} from '../constants/constants';

let audioContext = new AudioContext();

class TonePlayer {
  constructor() {
    this.oscillators = {
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
        oscillator.frequency.value = HZ[note][scale];
        oscillator.start(0);
        this.oscillators[note].push(oscillator);
      }
    });
  }

  play(note, playTimeMs) {
    const self = this;
    self.stop();
    self.playing_note = note.note;
    self.playing_scale = note.scale;
    self.oscillators[note.note][note.scale].connect(audioContext.destination);
    setTimeout(() => self.stop(), playTimeMs);
  }

  stop() {
    if (this.playing_note !== null && this.playing_scale !== null) {
      this.oscillators[this.playing_note][this.playing_scale].disconnect(audioContext.destination);
      this.playing_note = null;
      this.playing_scale = null;
    }
  }
}

export default new TonePlayer();
