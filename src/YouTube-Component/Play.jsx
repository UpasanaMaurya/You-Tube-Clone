import React, { useState } from "react";

const Play = ({ children, onPlay, onPause }) => {
  const [play, setPlay] = useState(false);
  const clickHandle = (e) => {
    e.stopPropagation();
    play ? onPause() : onPlay();
    setPlay(!play);
  };
  return (
    <>
      <div>
        <button className="btn-dark" onClick={clickHandle}>
          {children}:{play ? "⏸️" : "▶️"}
        </button>
      </div>
    </>
  );
};

export default Play;
