import React, { useEffect, useState } from 'react';
import apiClient from '../../spotify';
import "./widgets.css";
import WigetCard from './wigetCard';

const Widgets = ({ artistId }) => {
  const [similar, setSimilar] = useState([]);
  const [featured, setfeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);
  
  const id = artistId?.artists[0]?.id;

  useEffect(() => {
    if (id) {
      apiClient
        .get(`artists/${id}/related-artists`)
        .then((res) => {
          const a = res.data?.artists?.slice(0, 3);
          setSimilar(a);
        })
        .catch((err) => console.error(err));

      apiClient
        .get(`browse/featured-playlists`)
        .then((res) => {
          const a = res.data?.playlists?.items.slice(0, 3);
          setfeatured(a);
        })
        .catch((err) => console.error(err));

      apiClient
        .get(`browse/new-releases`)
        .then((res) => {
          const a = res.data?.albums?.items.slice(0, 3);
          setNewRelease(a);
        })
        .catch((err) => console.error(err));
    }
  }, [id]);

  return (
    <div className="widgets-body flex">
      <WigetCard title="Similar Artist" similar={similar} />
      <WigetCard title="Made For You" featured={featured} />
      <WigetCard title="New Release" newRelease={newRelease} />
    </div>
  );
}

export default Widgets;