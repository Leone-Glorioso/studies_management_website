import React, {Component, useEffect, useState} from "react";
import './TeacherLessons4.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, orderBy, query, where} from "firebase/firestore";
import {db} from "../../config/firebase_config";

function TeacherLessons4() {

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/teacher">Αρχική Καθηγητή</a></li>
                <li><a href="/teacher/lessons">Βαθμολόγια</a></li>
                <li>Αποθηκευμένα βαθμολόγια</li>
            </ul>

            <a href="/teacher/lessons/new-grades" className="n-button">Νέο Βαθμολόγιο</a>

            <div className="container-t">
                <ul className="responsive-table-t">
                    <li className="table-header">
                        <div className="col col-1">Ημερομηνία</div>
                        <div className="col col-2">Τίτλος μαθήματος</div>
                        <div className="col col-3">Κατάσταση</div>
                        <div className="col col-4"></div>
                        <div className="col col-5"></div>
                    </li>
                    <li className="table-row">
                        <div className="col col-1" data-label="date">00-00-0000</div>
                        <div className="col col-2" data-label="type">ΧΧΧΧΧΧΧΧ</div>
                        <div className="col col-3" data-label="state">ΚΚΚΚΚΚΚΚ</div>
                        <a href="#popup-pr" className="col col-4">Εκτύπωση</a>
                        <a href="/teacher/lessons/edit-grades" className="col col-5">Επεξεργασία</a>
                    </li>
                    <li className="table-row">
                        <div className="col col-1" data-label="date">00-00-0000</div>
                        <div className="col col-2" data-label="type">ΧΧΧΧΧΧΧΧ</div>
                        <div className="col col-3" data-label="state">ΚΚΚΚΚΚΚΚ</div>
                        <a href="#popup-pr" className="col col-4">Εκτύπωση</a>
                        <a href="/teacher/lessons/edit-grades" className="col col-5">Επεξεργασία</a>
                    </li>
                </ul>
            </div>

            <details className="dropdown-c">
                <summary role="button">
                    <a className="button-c">Κατάσταση Βαθμολογίου</a>
                </summary>
                <ul>
                    <li><a href="#">Οριστικοποιημένες</a></li>
                    <li><a href="#">Σε Εκκρεμότητα</a></li>
                </ul>
            </details>

            <details className="dropdown1-c">
                <summary role="button">
                    <a className="button1-c">Ταξινόμηση κατά</a>
                </summary>
                <ul>
                    <li><a href="#">Πιο Πρόσφατα</a></li>
                    <li><a href="#">Λιγότερο πρόσφατα</a></li>
                </ul>
            </details>

            <div id="popup-pr" className="overlay">
                <div className="popup">
                    <div className="content">
                        Το βαθμολόγιό σας αποθηκεύτηκε με επιτυχία!
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/student/certificates"
                               className="confirm">OK</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    )

}


export default TeacherLessons4