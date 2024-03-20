import React, { useState, useEffect } from 'react';
import animationImages from '../utils/animationImages';

function StartMenu({ onStart, showLeaderboard, showAuthors }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % animationImages.length);
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="start-menu">
      <div className="animation">
        <img src={animationImages[currentImageIndex]} alt={`Animation ${currentImageIndex}`} />
      </div>
      <button className="start-button" onClick={onStart}>START</button>
      <button className="leaderboard-button" onClick={() => window.alert("There will be authors later")}>LEADERBOARD</button>
      <button className="authors-button" onClick={() => window.alert("Marcin Dadon")}>AUTHORS</button>
    </div>
  );
}

export default StartMenu;
