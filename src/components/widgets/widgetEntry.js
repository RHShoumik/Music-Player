import React from 'react';
import "./widgetEntry.css";

const WidgetEntry = ({ title, subTitle, image }) => {
    //console.log("sub" + subTitle)
    return (
      <div className='entry-body flex'>
        <img src={image} className="entry-image" alt={image} />
        <div className='entry-right-body flex'>
          <p className="entry-title">{title}</p>
          <p className="entry-subTitle">{subTitle}</p>
        </div>
      </div>
    );
};

export default WidgetEntry