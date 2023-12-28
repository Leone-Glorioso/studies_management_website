import React, {Component} from "react";
import {MenuItems1, subjects} from "./MenuItems";
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

                <ul className="sub-list">
                    {subjects.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.cName}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <div className="title">Ακαδημαϊκή περίοδος, έτος</div>

                <table>
                    <tr>
                        <th>Κωδικός Μαθήματος</th>
                        <th>Τίτλος Μαθήματος</th>
                    </tr>
                    <tr>
                        <td>000000</td>
                        <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    </tr>
                    <tr>
                        <td>111111</td>
                        <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    </tr>
                </table>

            </div>

        )
    }

}

export default Sidebar