import React from 'react';
import AlbumImage from './albumImage';
import AlbumInfo from './albumInfo';
import "./songCard.css";
const SongCard = ( props ) => {
  const { album } = props;
  //console.log(album?.album?.images[0]?.url)
  //console.log(album?.images[0]?.url);
  return (
    <div className="songcard-body flex">
      <AlbumImage url={album?.album?.images[0]?.url} />
      <AlbumInfo album={album?.album} />
    </div>
  );
};

export default SongCard