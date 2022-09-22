import React from 'react';
import "./albumInfo.css";

const AlbumInfo = ({ album }) => {
    const artists = [];
    album?.artists?.forEach(element => {
        artists.push(element.name);
    });
  return (
    <div className="albumName-card">
      <div className="albumName-container">
        <div className="marquee">
          <p>{album?.name + " - " + artists?.join(", ")}</p>
        </div>
      </div>
      <div className="albumInfo">
        <p>{`${album?.name} is an ${album?.album_type} by ${artists?.join(
          ", "
        )} with ${album?.total_tracks} tracks`}</p>
      </div>
      <div className="album-release">
        <p>Release Date: {album?.release_date}</p>
      </div>
    </div>
  );
}

export default AlbumInfo