import React from 'react';
import "./albumImage.css";
const AlbumImage = ({ url }) => {
  return (
      <div className="albumImage flex">
        <img src={url} alt="Album Art" />
        <div className="albumImage-shadow">
          <img src={url} alt="albumImage Shadow" />
        </div>
      </div>
  );
}

export default AlbumImage