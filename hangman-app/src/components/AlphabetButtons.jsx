import React from 'react';
import alphabetImages from '../utils/AlphabetImages';

function AlphabetButtons({ alphabet, onClick }) {
  return (
    <div className="letters">
      {alphabet.split('').map((letter, index) => (
        <img
          key={index}
          src={alphabetImages[letter]}
          alt={letter}
          onClick={() => onClick(letter)}
        />
      ))}
    </div>
  );
}

export default AlphabetButtons;