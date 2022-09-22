import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from "react-icons/ai";
import { useLocation, useNavigate } from 'react-router-dom';
import apiClient from '../../spotify';
import "./library.css";

const Library = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [playlists, setPlayLists] = useState("");
  useEffect(() => {
    apiClient.get("me/playlists").then(function (response) {
      setPlayLists(response.data.items);
    });
  }, [location.state]);

  const playPlayList = (id) => {
    navigate("/player", {state: {id : id}});
  }
  
  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists &&
          playlists.map((playlist) => {
            const title = playlist.name.slice(0, 20);
            if (playlist.tracks.total === 0) {
              return (
                <div className="playlist-card" key={playlist.id}>
                  <img
                    src="https://t3.ftcdn.net/jpg/01/70/72/72/360_F_170727291_EX8xpPWgjfTelHuUPeIliPYN7RpmxUt2.jpg"
                    className="playlist-image"
                    alt="playlist"
                  />
                  <p className="playlist-title">{title}</p>
                  <p className="playlist-subtitle">No Song Found</p>
                </div>
              );
            }
              if (playlist.tracks.total) {
                return (
                  <div
                    className="playlist-card"
                    key={playlist.id}
                    onClick={() => {
                      playPlayList(playlist.id);
                    }}
                  >
                    <img
                      src={playlist.images[0].url}
                      className="playlist-image"
                      alt="playlist"
                    />
                    <p className="playlist-title">{title}</p>
                    <p className="playlist-subtitle">
                      {playlist.tracks.total} Songs
                    </p>
                    <div className="playlist-playBtn">
                      <IconContext.Provider
                        value={{ size: "50px", color: "#f8c676" }}
                      >
                        <AiFillPlayCircle />
                      </IconContext.Provider>
                    </div>
                  </div>
                );
              }
            
          })}
      </div>
    </div>
  );
}

export default Library

