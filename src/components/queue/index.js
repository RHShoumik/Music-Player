import React from 'react';
import "./queue.css";

const Queue = ({ tracks, setTrack }) => {
  const time = (time) => {
    const date = new Date(time);
    return `${date.getMinutes()} : ${date.getSeconds()}`;
  };

  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>
        <div className="queue-list">
          {tracks?.map((track, index) => (
            <div className="queue-item flex" onClick={() => setTrack(index)}>
              <p className="track-name">{track?.track?.name}</p>
              <p>{time(track?.track?.duration_ms)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queue