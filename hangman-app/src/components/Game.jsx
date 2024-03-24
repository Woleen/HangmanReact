import React, { useState, useEffect } from 'react';
import Hangman from './Hangman';
import AlphabetButtons from './AlphabetButtons';
import wordList from '../utils/wordList';
import alphabetImages from '../utils/alphabetImages';
import winAndLoseImages from '../utils/winAndLoseImages';

function Game() {
  const [word, setWord] = useState('');
  const [lives, setLives] = useState(6);
  const [displayedWord, setDisplayedWord] = useState([]);
  const [score, setScore] = useState(0);
  const [alphabet] = useState("abcdefghijklmnopqrstuvwxyz");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    const updatedWord = word ? word.split('').map(char => guessedLetters.includes(char) ? char : '_') : [];
    setDisplayedWord(updatedWord);
    if (updatedWord.join('') === word) {
      setWin(true);
    }
  }, [guessedLetters, word]);

  function handleAlphabetClick(letter) {
    if (guessedLetters.includes(letter)) {
      return;
    }
  
    const found = word.includes(letter);
  
    if (found) {
      setGuessedLetters([...guessedLetters, letter]);
      setScore(score + 10);
    } else {
      setLives(lives - 1);
      if (lives - 1 === 0) {
        setLose(true);
      }
    }
  }

  function startGame() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    setWord(wordList[randomIndex].word.toLowerCase());
    setLives(6);
    setScore(0);
    setGuessedLetters([]);
    setWin(false);
    setLose(false);
  }
  
  return (
    <div className="wrapper">
      <Hangman lives={lives} />
      <div className="container">
        {displayedWord.map((letter, index) => (
          <div key={index} className="item">
            {guessedLetters.includes(letter) && (          
              <img
                key={index}
                src={alphabetImages[letter]}
                alt={letter}
              />
            )}
          </div>
        ))}
      </div>
      <div className="alphabet-buttons-container">
        <AlphabetButtons
          alphabet={alphabet}
          onClick={handleAlphabetClick}
          guessedLetters={guessedLetters}
        />
      </div>
      <div id="score">
        <p>Score: {score}</p>
      </div>
      {win && (
        <img src={winAndLoseImages.win} alt="You win" />
      )}
      {lose && (
        <img src={winAndLoseImages.lose} alt="You lose" />
      )}
      {lives === 0 && (
        <button className="restart" onClick={startGame}>Restart</button>
      )}
    </div>
  );
}

export default Game;