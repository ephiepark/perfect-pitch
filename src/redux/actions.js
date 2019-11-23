import player from '../tone/tone';

/*
 * action types
 */

export const INITIALIZED = 'INITIALIZED';
export const SELECT_NOTE = 'SELECT_NOTE';

/*
 * action creators
 */

function selectNoteAction(note) {
  return { type: SELECT_NOTE, note };
};

function initializedAction() {
  return { type: INITIALIZED };
}

/*
 * Player side effects
 */
function initTonePlayer() {
  return (dispatch, getState) => {
    player.init();
  };
};

function playCurNote() {
  return (dispatch, getState) => {
    player.play(getState().curNote, 1000);
  };
};

/*
 * Thunks
 */
export function initPerfectPitch() {
  return (dispatch, getState) => {
    dispatch(initTonePlayer());
    dispatch(initializedAction());
    dispatch(playCurNote());
  };
};

export function selectNote(note) {
  return (dispatch, getState) => {
    dispatch(selectNoteAction(note));
    dispatch(playCurNote());
  };
};
