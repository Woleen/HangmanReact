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

  // Function to start the game
  function onStart() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    setWord(wordList[randomIndex].word.toLowerCase());
    setLives(6); // Reset lives
    setScore(0); // Reset score
  }

  // Function to handle alphabet button clicks
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
        // All letters are revealed, player wins
        // Implement logic for winning the game
      }
    } else {
      setLives(lives - 1);

      if (lives - 1 === 0) {
        // Player has lost all lives, implement logic for losing the game
      }
    }
  }

  return (
    <div className="App">
      <StartMenu onStart={onStart} />
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
    </div>
  );
}

export default App;