import React, {Component} from "react";
import {MenuItems} from "./MenuItems";
import './Navbar.css'

class Navbar extends Component {

    render() {
        return(
            <div>
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
                    <button type="s-button"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

            </div>

        )
    }

}

export default Navbar