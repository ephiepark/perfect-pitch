import React from 'react';
import logo from './logo.svg';
import './App.css';
import player from './tone/tone';

// window.addEventListener('mousedown', e => {
//   player.init();
//   player.play("A", 4);
//   console.log("mousedown");
// });
//
// window.onmouseup = (e) => {
//   player.stop();
//   console.log("mouseup");
// }

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
