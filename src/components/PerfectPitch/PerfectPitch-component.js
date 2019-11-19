import React, {useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import player from '../../tone/tone';

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
      key={note}
      value={note}
      className={classes.button}
      onClick={(e) => onNoteOptionClick(e.currentTarget.value)}>
      {note}
    </Button>
  );
  return <React.Fragment>
    {noteOptionsButtons}
  </React.Fragment>;
}

function PerfectPitch(props) {
  const {
    curNote,
    curRound,
    noteOptions,
    onNoteOptionClick,
  } = props;
  useEffect(() => {
    player.play(curNote, 4, 1000);
  }, [curRound]);
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
        <NoteOptionButtons
          noteOptions={noteOptions}
          onNoteOptionClick={onNoteOptionClick}
        />
      </Grid>
    </React.Fragment>
  );
}

export default PerfectPitch;
