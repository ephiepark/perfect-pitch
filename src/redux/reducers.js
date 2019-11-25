import {
  INITIALIZED,
  SELECT_NOTE,
} from './actions';
import { getNote, getRandNote, areSameNotes } from '../constants/constants';
import { NOTE } from '../constants/constants';
import { NOTE_OPTIONS } from '../game/noteOptions';

export const initState = {
  isInit: false,
  curNote: getRandNote(NOTE_OPTIONS[0]),
  noteOptions: [...NOTE_OPTIONS[0]],
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
  state,
  curNote,
  action,
) {
  const curLevel = state.length - 2;
  console.log(curLevel, state);
  switch (action.type) {
    case SELECT_NOTE:
      if (areSameNotes(curNote, action.note)) {
        return [...NOTE_OPTIONS[Math.min(curLevel + 1, NOTE_OPTIONS.length - 1)]];
      } else {
        return [...NOTE_OPTIONS[Math.max(0, curLevel - 1)]];
        // return [state.slice(0, state.length - 1)];
      }
    default:
      return state;
  }
};

export function perfectPitchApp(state, action) {
  const noteOptions = noteOptions(state.noteOptions, state.curNote, action);
  return {
    isInit: isInit(state.isInit, action),
    curNote: curNote(
      state.curNote,
      noteOptions,
      action),
    noteOptions: noteOptions,
  };
};
