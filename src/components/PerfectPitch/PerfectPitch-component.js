import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { getNoteName } from '../../constants/constants';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function PerfectPitchHeader(props) {
  return (
    <Typography variant="h1" component="h2">
      {'Perfect Pitch'}
    </Typography>
  );
}

function NoteOptionButtons(props) {
  const classes = useStyles();
  const {noteOptions, onNoteOptionClick} = props;
  const noteOptionsButtons = noteOptions.map(note =>
    <Button
      variant="contained"
      key={getNoteName(note)}
      value={getNoteName(note)}
      className={classes.button}
      onClick={(e) => onNoteOptionClick(e.currentTarget.value)}>
      {getNoteName(note)}
    </Button>
  );
  return <React.Fragment>
    {noteOptionsButtons}
  </React.Fragment>;
}

function PerfectPitch(props) {
  const {
    isInit,
    noteOptions,
    onGetStarted,
    onNoteOptionClick,
  } = props;
  const content = isInit ?
    <NoteOptionButtons
      noteOptions={noteOptions}
      onNoteOptionClick={onNoteOptionClick}
    /> :
    <Button variant="contained" onClick={(e) => onGetStarted()}>
      {'Get Started!'}
    </Button>;
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <PerfectPitchHeader/>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {content}
      </Grid>
    </React.Fragment>
  );
}

export default PerfectPitch;
