import React, { useState } from 'react';
import Announcement from './Announcement';
import './AnnouncementBoard.css';

const AnnouncementBoard = ({ announcements }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? announcements.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === announcements.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="announcement-board">
            <div className="announcements-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {announcements.map((announcement, index) => (
                    <Announcement key={index} {...announcement} />
                ))}
            </div>
            <button className="nav-button prev" onClick={handlePrev}>
                &lt;
            </button>
            <button className="nav-button next" onClick={handleNext}>
                &gt;
            </button>
        </div>
    );
};

export default AnnouncementBoard;