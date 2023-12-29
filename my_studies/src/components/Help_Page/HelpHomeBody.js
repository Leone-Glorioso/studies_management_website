import React from 'react';
import {FaGraduationCap, FaUser} from "react-icons/fa";
import {HiMiniBuildingLibrary} from "react-icons/hi2";
import './HelpHomeBody.css';

function HelpHomeBody(props) {
    return (
        <div className="centered-container">
            <button className="big-button">
                <FaUser /> Φοιτητές
            </button>
            <button className="big-button">
                <FaGraduationCap/> Εκπαιδευτικοί
            </button>
            <button className="big-button">
                <HiMiniBuildingLibrary/> Γραμματεία
            </button>
        </div>
    );
}

export default HelpHomeBody;