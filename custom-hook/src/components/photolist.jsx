import React from 'react';
import './PhotoList.css';

const PhotoList = ({ data }) => {
  return (
    <div className="photo-list">
      {data.slice(0, 100).map(photo => (
        <div key={photo.id} className="photo-card">
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <h3>{photo.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default PhotoList;