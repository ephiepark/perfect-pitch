import React from 'react';
import './App.css';
import PerfectPitch from './components/PerfectPitch';
import {NOTE} from './constants/constants';

function App() {
  return <div className={'App feedback-target full-screen'}>
    <PerfectPitch
      curNote={NOTE.A}
      curRound={0}
      noteOptions={[NOTE.A]}
      onNoteOptionClick={(note) => {console.log(note);}}
    />
  </div>;
}

export default App;
