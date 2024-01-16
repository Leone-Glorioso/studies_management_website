import React from 'react';
import './StartPageHeader.css';
import UniversalNavbar from "../Navbar/UniversalNavbar";
import {MenuItems} from "../Student_Pages/Navbar_Sidebar/MenuItems";

function StartPageHeader(props) {
    return (
        <div className={'out_div'}>
            <img src={'/logo.png'} alt={"Logo"} className={'logo_ekpa'}/>
            <UniversalNavbar/>
        </div>
    );
}

export default StartPageHeader;