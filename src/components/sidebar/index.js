import React, { useEffect, useState } from 'react';
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import apiClient from '../../spotify';
import "./sidebar.css";
import SidebarButton from './SidebarButton';

const Sidebar = () => {
  const [image, setImage] = useState("https://imgs2.dab3games.com/talking-tom-game.png");
  const [username, setUsername] = useState("User001")
  useEffect(() => {
    apiClient.get("me").then(response => {
      setImage(response.data.images[0].url);
      setUsername(response.data.display_name);
    });
  },[])
    return (
      <div className="sidebar-container">
        <div className='profile'>
          <img src={image} className="profile-img" alt="profile" />
          <h5 className="username">{username}</h5>
        </div>
        <div>
          <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
          <SidebarButton
            title="Trending"
            to="/trending"
            icon={<FaGripfire />}
          />
          <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
          <SidebarButton
            title="Favourites"
            to="/favourites"
            icon={<MdFavorite />}
          />
          <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
        </div>
        <SidebarButton title="Log Out" to="" icon={<FaSignOutAlt />} />
      </div>
    );
}

export default Sidebar;