import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from '../../components/sidebar';
import { setClientToken } from '../../spotify';
import Login from '../auth/login';
import Favourites from '../favourites/favourite';
import Feed from '../feed/feed';
import Library from '../library/index';
import Player from '../player';
import Trending from '../trending/trending';

import "./home.css";

const Home = () => {

  const [token, setToken] = useState("");
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;//it will get anchor part of the url
    window.location.hash = "";
    console.log(hash);
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1]; // split to get the access token value
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  
  return (
     !token ?  <Login /> : 
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;