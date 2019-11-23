import {
  INITIALIZED,
  SELECT_NOTE,
} from './actions';
import {getNote, getRandNote, areSameNotes} from '../constants/constants';
import {NOTE} from '../constants/constants';

export const initState = {
  isInit: false,
  curNote: getNote(NOTE.A, 4),
  noteOptions: [getNote(NOTE.A, 4), getNote(NOTE.B, 4)],
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
  switch (action.type) {
    case SELECT_NOTE:
      if (areSameNotes(curNote, action.note)) {
        return [...state];
      } else {
        return [...state];
        // return [state.slice(0, state.length - 1)];
      }
    default:
      return state;
  }
};

export function perfectPitchApp(state, action) {
  return {
    isInit: isInit(state.isInit, action),
    curNote: curNote(
      state.curNote,
      state.noteOptions,
      action),
    noteOptions: noteOptions(state.noteOptions, state.curNote, action),
  };
};
