import player from '../tone/tone';
import { areSameNotes } from '../constants/constants';

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

function initRound() {
  return (dispatch, getState) => {
    player.play(getState().curNote, 1000);
  };
};

function playSelectFeedback(note) {
  // Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Tips
  return (dispatch, getState) => {
    const feedbackTargetDom = document.querySelector(".feedback-target");
    const classNameStr = feedbackTargetDom.className;
    const classNames = classNameStr.split(' ');
    const newClassNames = classNames.filter(
      className =>
      className !== 'select-note-feedback-correct' && className !== 'select-note-feedback-wrong'
    );
    feedbackTargetDom.className = newClassNames.join(' ');
    const animationClass = areSameNotes(getState().curNote, note) ?
      'select-note-feedback-correct' : 'select-note-feedback-wrong';
    newClassNames.push(animationClass);
    window.requestAnimationFrame(function(time) {
      window.requestAnimationFrame(function(time) {
        document.querySelector(".feedback-target").className = newClassNames.join(' ');
      });
    });
  };
};

function finishRound(note) {
  return (dispatch, getState) => {
    dispatch(playSelectFeedback(note));
  };
};

/*
 * Thunks
 */
export function initPerfectPitch() {
  return (dispatch, getState) => {
    dispatch(initTonePlayer());
    dispatch(initializedAction());
    dispatch(initRound());
  };
};

export function selectNote(note) {
  return (dispatch, getState) => {
    dispatch(finishRound(note));
    setTimeout(() => {
      dispatch(selectNoteAction(note));
      dispatch(initRound());
    }, 750); // This should match animation time in App.css for feedback
  };
};

export function replayNote() {
  return (dispatch, getState) => {
    player.play(getState().curNote, 1000);
  }
};
