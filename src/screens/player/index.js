import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AudioPlayer from '../../components/audioPlayer';
import Queue from '../../components/queue';
import SongCard from '../../components/songCard';
import Widgets from '../../components/widgets';
import apiClient from '../../spotify';
import "./player.css";
const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    if (location.state.id) {
      apiClient.get("playlists/" + location.state.id + "/tracks")
        .then(function (response) {
          //console.log(response.data.items)
          setTracks(response.data.items);
          setCurrentTrack(response.data.items[0].track);
          //console.log(currentTrack)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);
  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);
  
  
  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPlayer
          track={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Widgets artistId={currentTrack?.album} />
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack} />
        <Queue tracks={tracks} setTrack={setCurrentIndex} />
      </div>
    </div>
  );
}

export default Player