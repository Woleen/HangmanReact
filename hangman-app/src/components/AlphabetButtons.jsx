import React from 'react';
import alphabetImages from '../utils/alphabetImages';

function AlphabetButtons({ alphabet, onClick, guessedLetters }) {
  return (
    <div className="letters">
      {alphabet.split('').map((letter, index) => (
        !guessedLetters.includes(letter) && (
          <img
            key={index}
            src={alphabetImages[letter]}
            alt={letter}
            onClick={() => onClick(letter)}
            className="alphabet-button"
          />
        )
      ))}
    </div>
  );
}

export default AlphabetButtons;