import React, {Component} from "react";
import {MenuItems1} from "./MenuItems";
import {MenuItems2} from "./MenuItems";
import {profile} from "./MenuItems";
import './Sidebar.css'
import {MenuItems} from "../Navbar/MenuItems";
import '../Navbar/Navbar.css'

class Sidebar extends Component {

    render() {
        return (
            <div>

                <nav className="SidebarItems">
                    <ul className="prof">
                        {profile.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.url} className={item.cName}>
                                        <i className={item.icon}></i>{item.title}
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

                    <ul className="side-menu2">
                        {MenuItems2.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.url} className={item.cName}>
                                        <i className={item.icon}></i>{item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <nav className="NavbarItems">
                    <ul className="nav-menu">
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

                <div className="search-bar">
                    <input type="text" placeholder=" Αναζήτηση"/>
                    <button className="s-button"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className="title">Ακαδημαϊκή περίοδος, έτος</div>

            </div>
        )
    }

}

export default Sidebar