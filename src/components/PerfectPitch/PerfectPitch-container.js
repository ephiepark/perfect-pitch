import { connect } from 'react-redux';
import { selectNote, replayNote, initPerfectPitch } from '../../redux/actions';
import PerfectPitch from './PerfectPitch-component';

const mapStateToProps = state => {
  return {
    isInit: state.isInit,
    noteOptions: state.noteOptions,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGetStarted: () => {
      dispatch(initPerfectPitch());
    },
    onNoteOptionClick: (note) => {
      dispatch(selectNote(note));
    },
    onReplayNoteClick: () => {
      dispatch(replayNote());
    },
  };
};

const PerfectPitchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PerfectPitch);

export default PerfectPitchContainer;
