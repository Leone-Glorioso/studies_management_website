import React from 'react';
import './UniversalNavbar.css';
import {useAuth} from "../Auth/AuthContext";
import {FaChalkboardTeacher, FaGraduationCap, FaHome, FaUser, FaUserCircle, FaUserGraduate} from "react-icons/fa";
import {BiHelpCircle} from "react-icons/bi";
import {IoHelp, IoHelpCircle, IoHelpCircleOutline} from "react-icons/io5";
import {TbLogin, TbLogout} from "react-icons/tb";
import {Tooltip} from "primereact/tooltip";

function UniversalNavbar() {

    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();

    return (
        <div>

            <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"/>

                <nav className="menu">
                    <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
                    <label className="menu-open-button" htmlFor="menu-open">
                        <span className="hamburger hamburger-1"></span>
                        <span className="hamburger hamburger-2"></span>
                        <span className="hamburger hamburger-3"></span>
                    </label>

                    <Tooltip target={".menu-item"} className={'toolTipUniv'} position={"bottom"} mouseTrack/>

                    <a href="/" className="menu-item" id={'start'} data-pr-tooltip="Αρχική"> <i><FaHome/></i> </a>
                    {isLogged && <a href="/student/profile" className="menu-item" id={'profile'} data-pr-tooltip="Προφίλ"> <i><FaUserCircle/></i> </a>}
                    {!isLogged && <a href="#pop-log" className="menu-item" id={'profile'} data-pr-tooltip="Είσοδος"> <i><TbLogin/></i> </a>}
                    <a href="/help" className="menu-item" id={'help'} data-pr-tooltip="Βοήθεια"> <i><IoHelpCircleOutline/></i> </a>
                    <a href="/student" className="menu-item" id={'students'} data-pr-tooltip="Φοιτητές"> <i><FaUserGraduate/></i> </a>
                    <a href="/teacher" className="menu-item" id={'teachers'} data-pr-tooltip="Εκπαιδευτικοί"> <i><FaChalkboardTeacher/></i> </a>
                    {isLogged && <a href={"javascript:window.location.href=window.location.href"} className="menu-item" id={'logout'} onClick={()=>{Auth.userLogout()}} data-pr-tooltip="Αποσύνδεση"> <i><TbLogout/></i> </a>}


                </nav>


                {/*<svg xmlns="http://www.w3.org/2000/svg" version="1.1">*/}
                {/*    <defs>*/}
                {/*        <filter id="shadowed-goo">*/}

                {/*            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />*/}
                {/*            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />*/}
                {/*            <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />*/}
                {/*            <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />*/}
                {/*            <feOffset in="shadow" dx="1" dy="1" result="shadow" />*/}
                {/*            <feComposite in2="shadow" in="goo" result="goo" />*/}
                {/*            <feComposite in2="goo" in="SourceGraphic" result="mix" />*/}
                {/*        </filter>*/}
                {/*        <filter id="goo">*/}
                {/*            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />*/}
                {/*            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />*/}
                {/*            <feComposite in2="goo" in="SourceGraphic" result="mix" />*/}
                {/*        </filter>*/}
                {/*    </defs>*/}
                {/*</svg>*/}

                <div id="popup-log" className="overlay">
                    <div className="popup">
                        <div className="content">
                            Κάποιο από τα στοιχεία σας ήταν λανθασμένο, παρακαλώ ξαναπροσπαθήστε.
                        </div>
                        <ul className="buttons1">
                            <li className="buttons-c1">
                                <a href="/"
                                   className="confirm">OK</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    );
}

export default UniversalNavbar;