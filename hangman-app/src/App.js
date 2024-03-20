import React, { useState } from 'react';
import './App.css';
import StartMenu from './components/StartMenu';
import Game from './components/Game';



function App() {
  const [gameStarted, setGameStarted] = useState(false);
  function onStart() {
    setGameStarted(true);
  }

  return (
    <div className="App">
      {!gameStarted && <StartMenu onStart={onStart} />}
      {gameStarted && <Game />}
    </div>
  );
}

export default App;
