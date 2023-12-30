import React from 'react';
import {FaGraduationCap, FaUser} from "react-icons/fa";
import {HiMiniBuildingLibrary} from "react-icons/hi2";
import './HelpHomeBody.css';
import {Link} from "react-router-dom";

function HelpHomeBody(props) {
    return (
        <div className="centered-container">
            <Link to={'/help/student'} className={"link"}>
                <button className="big-button">
                    <FaUser /> Φοιτητές
                </button>
            </Link>
            <Link to={'/help/teacher'} className={"link"}>
                <button className="big-button">
                    <FaGraduationCap/> Εκπαιδευτικοί
                </button>
            </Link>
            <Link to={'/help/admin'} className={"link"}>
                <button className="big-button">
                    <HiMiniBuildingLibrary/> Γραμματεία
                </button>
            </Link>
        </div>
    );
}

export default HelpHomeBody;