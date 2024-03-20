import React, { useState } from 'react';
import Hangman from './Hangman';
import AlphabetButtons from './AlphabetButtons';
import wordList from '../utils/wordList';
import alphabetImages from '../utils/alphabetImages'
import winAndLoseImages from '../utils/winAndLoseImages';

function Game() {
  const [word, setWord] = useState('');
  const [lives, setLives] = useState(6);
  const [score, setScore] = useState(0);
  const [alphabet] = useState("abcdefghijklmnopqrstuvwxyz");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);

  function handleAlphabetClick(letter) {

    if (guessedLetters.includes(letter)) {
      return;
    }
  
    const found = word.includes(letter);
  
    if (found) {
      setGuessedLetters([...guessedLetters, letter]);
  
      const updatedWord = word.split('').map((char) => {
        if (char === letter) {
          return <img src={alphabetImages[letter]} alt={letter} />;
        }
        return ' ';
      });
      setWord(updatedWord);
      setScore(score + 10);
  
      if (!updatedWord.includes(' ')) {
        setWin(true);
      }
    } else {

      if (!guessedLetters.includes(letter)) {
        setLives(lives - 1);
      }
  
      if (lives - 1 === 0) {

      }
    }
  }

  function startGame() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    setWord(wordList[randomIndex].word.toLowerCase());
    setLives(6);
    setScore(0);
    setGuessedLetters([]);
  }

  return (
    <div className="wrapper">
      <Hangman lives={lives} />
      <div className="container">
        {word.split('').map((letter, index) => (
          <div key={index} className="item">
            {guessedLetters.includes(letter) ? alphabetImages[letter] : ' '}
          </div>
        ))}
      </div>
      <AlphabetButtons
        alphabet={alphabet}
        onClick={handleAlphabetClick}
        guessedLetters={guessedLetters}
      />
      <div id="score">
        <p>Score: {score}</p>
      </div>
      {lives === 0 && (
        <button className="restart" onClick={startGame}>Restart</button>
      )}
    </div>
  );
}

export default Game;