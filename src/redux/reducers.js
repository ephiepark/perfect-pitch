import {
  INITIALIZED,
  SELECT_NOTE,
} from './actions';
import { getRandNote, areSameNotes } from '../constants/constants';
import { NOTE_OPTIONS } from '../game/noteOptions';

export const initState = {
  isInit: false,
  curNote: getRandNote(NOTE_OPTIONS[0]),
  noteOptions: [...NOTE_OPTIONS[0]],
  score: 0,
};

function isInit(state, action) {
  switch (action.type) {
    case INITIALIZED:
      return true;
    default:
      return state;
  }
};

function curNote(
  state,
  noteOptions,
  action,
) {
  switch (action.type) {
    case SELECT_NOTE:
      return getRandNote(noteOptions);
    default:
      return state;
  }
};

function noteOptions(
  curNoteOptions,
  curNote,
  curScore,
  action,
) {
  const curLevel = curNoteOptions.length - 2;
  switch (action.type) {
    case SELECT_NOTE:
      if (areSameNotes(curNote, action.note)) {
        if (curScore >= 10) {
          return {
            score: 0,
            noteOptions: [...NOTE_OPTIONS[Math.min(curLevel + 1, NOTE_OPTIONS.length - 1)]],
          };
        } else {
          return {
            score: curScore + 1,
            noteOptions: curNoteOptions,
          };
        }
      } else {
        return {
          score: 0,
          noteOptions: [...NOTE_OPTIONS[Math.max(0, curLevel - 1)]],
        };
      }
    default:
      return {
        score: curScore,
        noteOptions: curNoteOptions,
      };
  }
};

export function perfectPitchApp(state, action) {
  const newNoteOptions = noteOptions(state.noteOptions, state.curNote, state.score, action);
  return {
    isInit: isInit(state.isInit, action),
    curNote: curNote(
      state.curNote,
      newNoteOptions.noteOptions,
      action),
    noteOptions: newNoteOptions.noteOptions,
    score: newNoteOptions.score,
  };
};
