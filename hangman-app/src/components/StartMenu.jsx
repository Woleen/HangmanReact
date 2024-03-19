import React, { useState, useEffect } from 'react';
import animationImages from '../utils/AnimationImages';

function StartMenu({ onStart }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % animationImages.length);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="start-menu">
      <div className="animation">
        <img src={animationImages[currentImageIndex]} alt={`Animation ${currentImageIndex}`} />
      </div>
      <button className="start-button" onClick={onStart}>START</button>
      {/* Other menu buttons */}
    </div>
  );
}

export default StartMenu;
