export const MAX_SCALE = 8;

export const NOTE = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  G: 'G',
};

export const NOTES = [NOTE.A, NOTE.B, NOTE.C, NOTE.D, NOTE.E, NOTE.F, NOTE.G];

export const HZ = {
  [NOTE.A]: [0, 28, 55, 110, 220, 440, 880, 1760, 3520],
  [NOTE.B]: [0, 31, 62, 123, 247, 494, 988, 1976, 3951],
  [NOTE.C]: [16, 33, 65, 131, 262, 523, 1047, 2093, 4186],
  [NOTE.D]: [18, 37, 73, 147, 294, 587, 1175, 2349, 4699],
  [NOTE.E]: [21, 41, 82, 165, 330, 659, 1319, 2637, 5274],
  [NOTE.F]: [22, 44, 87, 175, 349, 698, 1397, 2794, 5588],
  [NOTE.G]: [25, 49, 98, 196, 392, 784, 1568, 3136, 6272],
};

export function getNote(note, scale) {
  return {note, scale};
};

export function getNoteName(note) {
  return note.note + note.scale;
};

export function getRandNote(noteOptions) {
  const randIdx = Math.floor(Math.random() * noteOptions.length);
  return noteOptions[randIdx];
};

export function areSameNotes(noteA, noteB) {
  return noteA.note === noteB.note && noteA.scale === noteB.scale;
};
