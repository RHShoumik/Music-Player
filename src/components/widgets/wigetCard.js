import React from 'react';
import { IconContext } from 'react-icons';
import { FiChevronRight } from "react-icons/fi";
import "./widgetCard.css";
import WidgetEntry from './widgetEntry';

const WigetCard = ({ title, similar, featured, newRelease }) => {
  return (
    <div className="widgetcard-body">
      <p className="widget-title">{title}</p>
      {similar
        ? similar.map((artist) => (
            <WidgetEntry
              title={artist?.name}
              subTitle={artist?.followers?.total + "Followers"}
              image={artist?.images[2].url}
            />
          ))
        : featured
        ? featured.map((playlist) => (
            <WidgetEntry
              title={playlist.name}
              subTitle={playlist.tracks?.total + "Songs"}
              image={playlist?.images[0]?.url}
            />
          ))
        : newRelease
        ? newRelease.map((album) => (
            <WidgetEntry
              title={album?.name}
              subTitle={album?.artists[0]?.name}
              image={album?.images[2].url}
            />
          ))
            : null}
      <div className='wiget-fade'>
        <div className='fade-button'>
          <IconContext.Provider value={{size:"24px", color:"#c9d0e3"}}>
            <FiChevronRight />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default WigetCard