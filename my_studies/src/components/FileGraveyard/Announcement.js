import React from 'react';

const Announcement = ({ text, imageUrl }) => (
    <div className="announcement">
        <div className="announcement-text">{text}</div>
        <img className="announcement-image" src={imageUrl} alt="Announcement" />
    </div>
);

export default Announcement;