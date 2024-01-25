import React, {Component, useEffect, useState} from "react";
import './Dropdown.css'


function Dropdown() {
    return (
        <ul className="dropdowns">
            <li className="drop-buttons">
                <details className="dropdown_grades">
                    <summary role="button">
                        <div className="title0">Κατηγορίες</div>
                        <a className="button_grades">Όλα <i className="fa-solid fa-chevron-down"></i></a>
                    </summary>


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

                <details className="dropdown1_grades">
                    <summary role="button">
                        <div className="title1">Ακαδημαϊκή Περίοδος</div>
                        <a className="button1_grades">2023-2024 <i
                            className="fa-solid fa-chevron-down"></i></a>
                    </summary>
                    <ul>
                        <li><a href="#">Όλες</a></li>
                        <li><a href="#">2022-2023</a></li>
                        <li><a href="#">2023-2024</a></li>
                    </ul>
                </details>

                <details className="dropdown2_grades">
                    <summary role="button">
                        <div className="title2">Εξάμηνο</div>
                        <a className="button2_grades">Όλα <i className="fa-solid fa-chevron-down"></i></a>
                    </summary>
                    <ul>
                        <li><a href="#">Όλα</a></li>
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

                <details className="dropdown3_grades">
                    <summary role="button">
                        <div className="title3">Ταξινόμηση κατά</div>
                        <a className="button3_grades">Εξάμηνο(Αύξουσα)<i
                            className="fa-solid fa-chevron-down"></i></a>
                    </summary>
                    <ul>
                        <li><a href="#">Εξάμηνο(Αύξουσα)</a></li>
                        <li><a href="#">Εξάμηνο(Φθίνουσα)</a></li>
                    </ul>
                </details>
            </li>
        </ul>
    )
}

export default Dropdown