import React from 'react';
import { IconContext } from 'react-icons';
import {
    IoPauseSharp, IoPlay,
    IoPlaySkipBack,
    IoPlaySkipForward
} from "react-icons/io5";
import "./controls.css";

const Controls = ({ isPlaying, setIsPlaying, handleNext, handlePrev }) => {
    //console.log(setIsPlaying);
  return (
    <IconContext.Provider value={{ size: "35px", color: "#C4D0E3" }}>
      <div className="controls-wrapper flex">
        <div className="action-btn flex" onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>
        <div
          className="play-pause-btn flex"
          onClick={() => setIsPlaying(!isPlaying)}
        >
                  {isPlaying ? <IoPauseSharp /> : <IoPlay />}
        </div>
        <div className="action-btn flex" onClick={handleNext}>
          <IoPlaySkipForward />
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Controls;