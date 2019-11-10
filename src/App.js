import React from 'react';
import logo from './logo.svg';
import './App.css';

const REAL_TIME_FREQUENCY = 440;

let audioContext = new AudioContext();

let myOscillator = audioContext.createOscillator();
myOscillator.frequency.value = REAL_TIME_FREQUENCY;


myOscillator.start();
// myOscillator.stop(audioContext.currentTime + 100); // Stop after two seconds
console.log("hi");

window.addEventListener('mousedown', e => {
  myOscillator.connect(audioContext.destination);
  console.log("mousedown");
});
window.onmouseup = (e) => {
  myOscillator.disconnect(audioContext.destination);
  console.log("mouseup");
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
