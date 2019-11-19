import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import player from '../../tone/tone';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

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
  );
}

export default PerfectPitch;
