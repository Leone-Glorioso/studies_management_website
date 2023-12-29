import React, {Component} from "react";
import './StudentCert.css'
import {MenuItems1} from "./MenuItems";
import {MenuItems2} from "./MenuItems";
import {profile} from "./MenuItems";
import './Sidebar.css'
import {MenuItems} from "./MenuItems";
import './Navbar.css'

class StudentCert extends Component {

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

                <ul className="breadcrumb">
                    <li><a href="/#">Αρχική Μαθητή</a></li>
                    <li>Πιστοποιητικά</li>
                </ul>

                <div className="dropdown">
                    <button onClick="myFunction()" className="dropbtn">Κατάσταση Αίτησης</button>
                    <div id="myDropdown" className="dropdown-content">
                        <a href="#">Εγκεκριμένη</a>
                        <a href="#">Σε Εκκρεμότητα</a>
                        <a href="#">Απορριφθείσα</a>
                        <a href="#">Ακυρωμένη</a>
                    </div>
                </div>

                <script>
                    function myFunction() {
                        document.getElementById("myDropdown").classList.toggle("show");
                    }

                    window.onclick = function(event) {
                        if (!event.target.matches('.dropbtn')) {
                            var dropdowns = document.getElementsByClassName("dropdown-content");
                            var i;
                            for (i = 0; i < dropdowns.length; i++) {
                                var openDropdown = dropdowns[i];
                                if (openDropdown.classList.contains('show')) {
                                    openDropdown.classList.remove('show');
                                }
                            }
                        }
                    }
                </script>

            </div>

        )
    }

}



export default StudentCert