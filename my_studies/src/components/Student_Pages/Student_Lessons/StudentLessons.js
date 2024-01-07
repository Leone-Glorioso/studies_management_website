import React, {Component} from "react";
import './StudentLessons.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {LessonItems} from "./LessonItems";
import {profile} from "../Navbar_Sidebar/MenuItems";

class StudentLessons extends Component {

    render() {
        return (
            <div>
                <Sidebar/>

                <ul className="breadcrumb">
                    <li><a href="/#">Αρχική Μαθητή</a></li>
                    <li>Μαθήματα</li>
                </ul>

                <div className="Lessons">
                    <ul className="lesson">
                        {LessonItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.url} className={item.cName}>
                                        {item.title}
                                    </a>
                                    <div className="code">Κωδ</div>
                                    <div className="semester">ΕΞ</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <ul className="dropdowns">
                    <li className="drop-buttons">
                        <details className="dropdown">
                            <summary role="button">
                                <a className="button">Κατηγορίες</a>
                            </summary>

                            {/*<div className="check-buttons">
                        <label><input type="checkbox" name="check"/> Περασμένα</label>
                        <label><input type="checkbox" name="check"/> Κομμένα</label>
                        <label><input type="checkbox" name="check"/> Γενικής Παιδείας</label>
                        <label><input type="checkbox" name="check"/> Κατεύθυνσης Α</label>
                        <label><input type="checkbox" name="check"/> Κατεύθυνσης Β</label>
                        <label><input type="checkbox" name="check"/> Υποχρεωτικά</label>
                        <label><input type="checkbox" name="check"/> Προαιρετικά</label>
                        <label><input type="checkbox" name="check"/> Κατ' επιλογή υποχρεωτικά</label>
                    </div>*/}

                            <ul>
                                <li><a href="#">Όλα</a></li>
                                <li><a href="#">Περασμένα</a></li>
                                <li><a href="#">Κομμένα</a></li>
                                <li><a href="#">Γενικής Παιδείας</a></li>
                                <li><a href="#">Κατεύθυνσης Α</a></li>
                                <li><a href="#">Κατεύθυνσης Β</a></li>
                                <li><a href="#">Υποχρεωτικά</a></li>
                                <li><a href="#">Προαιρετικά</a></li>
                                <li><a href="#">Κατ' επιλογή υποχρεωτικά</a></li>
                            </ul>
                        </details>

                        <details className="dropdown1">
                            <summary role="button">
                                <a className="button1">Ακαδημαϊκή Περίοδος</a>
                            </summary>
                            <ul>
                                <li><a href="#">2022-2023</a></li>
                                <li><a href="#">2023-2024</a></li>
                            </ul>
                        </details>

                        <details className="dropdown2">
                            <summary role="button">
                                <a className="button2">Εξάμηνο</a>
                            </summary>
                            <ul>
                                <li><a href="#">1ο</a></li>
                                <li><a href="#">2ο</a></li>
                                <li><a href="#">3ο</a></li>
                                <li><a href="#">4ο</a></li>
                                <li><a href="#">5ο</a></li>
                                <li><a href="#">6ο</a></li>
                                <li><a href="#">7ο</a></li>
                                <li><a href="#">8ο</a></li>
                            </ul>
                        </details>

                        <details className="dropdown3">
                            <summary role="button">
                                <a className="button3">Ταξινόμηση κατά</a>
                            </summary>
                            <ul>
                                <li><a href="#">Πιο Πρόσφατα</a></li>
                                <li><a href="#">Λιγότερο πρόσφατα</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>


            </div>

        )
    }

}


export default StudentLessons