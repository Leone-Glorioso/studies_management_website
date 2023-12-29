import React, {Component, useState, useEffect} from "react";
import './StudentCert.css'
import {MenuItems1} from "./MenuItems";
import {MenuItems2} from "./MenuItems";
import {profile} from "./MenuItems";
import './Sidebar.css'
import {MenuItems} from "./MenuItems";
import './Navbar.css'
import Sidebar from "../Student_Home/Sidebar";

function StudentCert(props) {

    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownVisible && !event.target.matches('.dropbtn')) {
                setDropdownVisible(false);
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [dropdownVisible]);

    const toggleDropdown = () => {
        setDropdownVisible((prevVisible) => !prevVisible);
    };

    return(
        <div>
            {/*<nav className="SidebarItems">*/}
            {/*    <ul className="prof">*/}
            {/*        {profile.map((item, index) => {*/}
            {/*            return (*/}
            {/*                <li key={index}>*/}
            {/*                    <a href={item.url} className={item.cName}>*/}
            {/*                        <i className={item.icon}></i>{item.title}*/}
            {/*                    </a>*/}
            {/*                </li>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </ul>*/}

            {/*    <ul className="side-menu1">*/}
            {/*        {MenuItems1.map((item, index) => {*/}
            {/*            return (*/}
            {/*                <li key={index}>*/}
            {/*                    <a href={item.url} className={item.cName}>*/}
            {/*                        <i className={item.icon}></i>{item.title}*/}
            {/*                    </a>*/}
            {/*                </li>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </ul>*/}

            {/*    <ul className="side-menu2">*/}
            {/*        {MenuItems2.map((item, index) => {*/}
            {/*            return (*/}
            {/*                <li key={index}>*/}
            {/*                    <a href={item.url} className={item.cName}>*/}
            {/*                        <i className={item.icon}></i>{item.title}*/}
            {/*                    </a>*/}
            {/*                </li>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </ul>*/}
            {/*</nav>*/}

            {/*<nav className="NavbarItems">*/}
            {/*    <ul className="nav-menu">*/}
            {/*        {MenuItems.map((item, index) => {*/}
            {/*            return (*/}
            {/*                <li key={index}>*/}
            {/*                    <a href={item.url} className={item.cName}>*/}
            {/*                        <i className={item.icon}></i>*/}
            {/*                    </a>*/}
            {/*                </li>*/}
            {/*            )*/}
            {/*        })}*/}

            {/*    </ul>*/}
            {/*</nav>*/}

            {/*<div className="search-bar">*/}
            {/*    <input type="text" placeholder=" Αναζήτηση"/>*/}
            {/*    <button className="s-button"><i className="fa-solid fa-magnifying-glass"></i></button>*/}
            {/*</div>*/}
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/#">Αρχική Μαθητή</a></li>
                <li>Πιστοποιητικά</li>
            </ul>

            <div className="dropdown">
                <button onClick={toggleDropdown} className="dropbtn">Κατάσταση Αίτησης</button>
                {dropdownVisible && <div id="myDropdown" className="dropdown-content">
                    <a href="#">Εγκεκριμένη</a>
                    <a href="#">Σε Εκκρεμότητα</a>
                    <a href="#">Απορριφθείσα</a>
                    <a href="#">Ακυρωμένη</a>
                </div>}
            </div>

        </div>
    );

}



export default StudentCert