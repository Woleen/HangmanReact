import React, { useState } from 'react';
import './App.css';
import StartMenu from './components/StartMenu';
import Hangman from './components/Hangman';
import AlphabetButtons from './components/AlphabetButtons';

const wordList = [
  { word: "golang" },
  { word: "java" },
  { word: "python" },
  { word: "ruby" },
  { word: "console" },
  { word: "terminal" },
  { word: "window" },
];

function App() {
  const [word, setWord] = useState('');
  const [lives, setLives] = useState(6);
  const [score, setScore] = useState(0);
  const [alphabet] = useState("abcdefghijklmnopqrstuvwxyz");
  const [gameStarted, setGameStarted] = useState(false);

  function onStart() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    setWord(wordList[randomIndex].word.toLowerCase());
    setLives(6);
    setScore(0);
    setGameStarted(true);
  }

  function handleAlphabetClick(letter) {
    const found = word.includes(letter);

    if (found) {
      const updatedWord = word.split('').map((char) => {
        if (char === letter) return char;
        return '-';
      }).join('');
      setWord(updatedWord);
      setScore(score + 10);

      if (!updatedWord.includes('-')) {
        // Implement logic for winning the game - WinImage
      }
    } else {
      setLives(lives - 1);

      if (lives - 1 === 0) {
        // Implement logic for losing the game - GameOverImage
      }
    }
  }

  return (
    <div className="App">
      {!gameStarted && <StartMenu onStart={onStart} />}
      {gameStarted && (
        <div className="wrapper">
          <Hangman lives={lives} />
          <div className="container">
            {word.split('').map((_, index) => (
              <div key={index} className="item" />
            ))}
          </div>
          <AlphabetButtons alphabet={alphabet} onClick={handleAlphabetClick} />
          <div id="score">
            <p>Score: {score}</p>
          </div>
          {lives === 0 && (
            <button className="restart" onClick={onStart}>Restart</button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
