import React from 'react';
import './StartPageHeader.css';

function StartPageHeader(props) {
    return (
        <div>
            <img src={'/logo.png'} alt={"Logo"} className={'logo_ekpa'}/>
        </div>
    );
}

export default StartPageHeader;