import { getNote } from '../constants/constants';
import { NOTE } from '../constants/constants';

export const NOTE_OPTIONS = [
  [getNote(NOTE.C, 4), getNote(NOTE.D, 4)],
  [getNote(NOTE.C, 4), getNote(NOTE.D, 4), getNote(NOTE.E, 4)],
  [getNote(NOTE.C, 4), getNote(NOTE.D, 4), getNote(NOTE.E, 4), getNote(NOTE.F, 4)],
  [getNote(NOTE.C, 4), getNote(NOTE.D, 4), getNote(NOTE.E, 4), getNote(NOTE.F, 4), getNote(NOTE.G, 4)],
  [getNote(NOTE.C, 4), getNote(NOTE.D, 4), getNote(NOTE.E, 4), getNote(NOTE.F, 4), getNote(NOTE.G, 4), getNote(NOTE.A, 4)],
  [getNote(NOTE.C, 4), getNote(NOTE.D, 4), getNote(NOTE.E, 4), getNote(NOTE.F, 4), getNote(NOTE.G, 4), getNote(NOTE.A, 4), getNote(NOTE.B, 4)],
];
