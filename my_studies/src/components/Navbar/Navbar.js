import React, {Component} from "react";
import {MenuItems} from "./MenuItems";
import './Navbar.css'

class Navbar extends Component {

    render() {
        return(
            <nav className="NavbarItems">
                <ul className="nav-menu">
                    {MenuItems.map((item, index)=> {
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
        )
    }

}

export default Navbar