import React, {Component, useEffect, useState} from "react";
import {MenuItems1, MenuItems2_alt} from "./MenuItems";
import {MenuItems2} from "./MenuItems";
import {profile} from "./MenuItems";
import './Sidebar.css'
import {MenuItems} from "./MenuItems";
import './Navbar.css'
import {useAuth} from "../../Auth/AuthContext";
import {Button} from "primereact/button";
import {IoLogIn} from "react-icons/io5";
import UniversalNavbar from "../../Navbar/UniversalNavbar";



function Sidebar() {

    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const [fullname, setFullname] = useState("");

    useEffect(() => {
        if(isLogged)
        {
            const user = Auth.getUser();
            setFullname(" " + user.name + " " + user.surname);
        }
    }, []);

    return (
        <div>
            <img src={'/logo.png'} alt={"Logo"} className={'logo_ekpa_special'}/>
            <UniversalNavbar/>
            <nav className="SidebarItems">
                <ul className="prof">
                    {!isLogged && profile.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.cName}>
                                    <i className={item.icon}></i>{item.title}
                                </a>
                            </li>
                        )
                    })}
                    {isLogged && profile.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.cName}>
                                    <i className={item.icon}></i>{fullname}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <ul className="side-menu1">
                    {MenuItems1.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.cName}>
                                    <i className={item.icon}></i>{item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                {/*<ul className="side-menu2">*/}
                {/*    {isLogged && MenuItems2.map((item, index) => {*/}
                {/*        return (*/}
                {/*            <li key={index}>*/}
                {/*                <a href={item.url} className={item.cName}>*/}
                {/*                    <i className={item.icon}></i>{item.title}*/}
                {/*                </a>*/}
                {/*            </li>*/}
                {/*        )*/}
                {/*    })}*/}
                {/*    {!isLogged && MenuItems2_alt.map((item, index) => {*/}
                {/*        return (*/}
                {/*            <li key={index}>*/}
                {/*                <a href={item.url} className={item.cName}>*/}
                {/*                    <i className={item.icon}></i>{item.title}*/}
                {/*                </a>*/}
                {/*            </li>*/}
                {/*        )*/}
                {/*    })}*/}
                {/*</ul>*/}
            </nav>

            <nav className="NavbarItems">
                <ul className="nav-menu-i">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.cName}>
                                    <i className={item.icon}></i>
                                </a>
                            </li>
                        )
                    })}

                </ul>
            </nav>

            {/*<div className="search-bar">*/}
            {/*    <input type="text" placeholder=" Αναζήτηση"/>*/}
            {/*    <button className="s-button"><i className="fa-solid fa-magnifying-glass"></i></button>*/}
            {/*</div>*/}

        </div>

    )

}

export default Sidebar