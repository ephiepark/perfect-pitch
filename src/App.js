import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import player from './tone/tone';
import PerfectPitch from './components/PerfectPitch';
import {NOTE} from './constants/constants';

function App() {
  const [is_init, setInit] = useState(false);

  useEffect(() => {
    if (!is_init) {
      player.init();
      setInit(true);
    }
  });

  return is_init ? <PerfectPitch
    curNote={NOTE.A}
    curRound={0}
    noteOptions={[NOTE.A]}
    onNoteOptionClick={(note) => {console.log(note);}}
  /> : null;
}

export default App;
