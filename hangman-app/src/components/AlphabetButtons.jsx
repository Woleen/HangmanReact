import React from 'react';

// Import all alphabet images
import aImg from '../assets/alphabet/a.png';
import bImg from '../assets/alphabet/b.png';
// Import other alphabet images as needed

function AlphabetButtons({ alphabet, onClick }) {
  // Map each letter to its corresponding image
  const alphabetImages = {
    'a': aImg,
    'b': bImg,
    // Add other letters here
  };

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