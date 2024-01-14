import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import './HelpNavBar.css';
import {Tooltip} from "primereact/tooltip";

function HelpNavbar() {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <img src={"/logo_1-removebg-preview.png"} alt={"Logo Σελίδας Βοήθειας"} className={'nav-img2'}/>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                        <Tooltip target={".nav-img"} mouseTrack mouseTrackTop={15} className={'toolTipHelp'} position={"top"} />
                        <Link to={'/'}>
                            <img src={"/cyan-left-greek-1-1024x283.png"} alt={"Logo ΕΚΠΑ"} className={"nav-img"} data-pr-tooltip="Αρχική Σελίδα"/>
                        </Link>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default HelpNavbar;