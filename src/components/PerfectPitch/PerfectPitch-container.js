import { connect } from 'react-redux';
import { selectNote, initPerfectPitch } from '../../redux/actions';
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
  };
};

const PerfectPitchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PerfectPitch);

export default PerfectPitchContainer;
