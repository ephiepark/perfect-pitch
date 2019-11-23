import React from 'react';
import './App.css';
import PerfectPitch from './components/PerfectPitch';
import {NOTE} from './constants/constants';

function App() {
  return <PerfectPitch
    curNote={NOTE.A}
    curRound={0}
    noteOptions={[NOTE.A]}
    onNoteOptionClick={(note) => {console.log(note);}}
  />;
}

export default App;
