import React from 'react';

function StartMenu({ onStart }) {
  return (
    <div className="start-menu">
      <div className="animation">
        {/* Animation images */}
      </div>
      <button className="start-button" onClick={onStart}>START</button>
      {/* Other menu buttons */}
    </div>
  );
}

export default StartMenu;