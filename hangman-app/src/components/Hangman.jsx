import React from 'react';
import hangmanImages from '../utils/hangmanImages';

function Hangman({ lives }) {
  const hangmanIndex = hangmanImages.length - lives - 1;

  return (
    <div className="hang">
      <img src={hangmanImages[hangmanIndex]} alt={`Hangman ${hangmanIndex}`} />
    </div>
  );
}

export default Hangman;