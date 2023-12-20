import React, {Component} from "react";
import {MenuItems} from "./MenuItems";
import './Sidebar.css'

class Sidebar extends Component {

    render() {
        return(
            <nav className="SidebarItems">
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
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
        )
    }

}

export default Sidebar