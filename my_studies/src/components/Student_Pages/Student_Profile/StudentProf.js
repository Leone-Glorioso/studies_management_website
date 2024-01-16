import React, {Component} from "react";
import './StudentProf.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {Prof1, Prof2, Prof3} from "./ProfItems";

class StudentProf extends Component {

    render() {
        return (
            <div>
                <Sidebar/>

                <ul className="breadcrumb">
                    <li><a href="/student">Αρχική Μαθητή</a></li>
                    <li>Προφίλ μαθητή</li>
                </ul>

                <a href="#" className="cert-button">Πιστοποιητικά</a>

                <p className="title1">Σχετικά με της σπουδές μου:</p>
                <div className="Study-info">
                    <ul className="info">
                        {Prof1.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <p className="title2">Προσωπικά στοιχεία:</p>
                <div className="pers-info">
                    <ul className="info">
                        {Prof2.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <p className="title3">Στοιχεία επικοινωνίας:</p>
                <div className="com-info">
                    <ul className="info">
                        {Prof3.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>


            </div>

        )
    }

}


export default StudentProf