import React, {Component, useEffect, useState} from "react";
import './TeacherLessons2.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";

function TeacherLessons2() {
    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const user = Auth.getUser();

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/teacher">Αρχική Καθηγητή</a></li>
                <li><a href="/teacher/lessons">Βαθμολόγια</a></li>
                <li>Οριστικοποίηση βαθμολογίου</li>
            </ul>

            <p className="les-title">Όνομα μαθήματος</p>
            <p className="text">Το βαθμολόγιο του μαθήματός σας υποβλήθηκε με επιτυχία!</p>

            <div className="final-buttons">
                <a href="#popup-cancel" className="canc">Αναίρεση</a>
                <a href="/teacher" className="ret">Επιστροφή στην αρχική</a>
                <a href="/teacher/lessons" className="new-g">Βαθμολόγια</a>
            </div>

            <div id="popup-cancel" className="overlay">
                <div className="popup-c">
                    <div className="content">
                        <p>Σίγουρα θέλετε να αναιρέσετε το βαθμολόγιο;</p>
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/teacher/lessons/edit-grades"
                               className="cancel-g">Άκυρο</a>
                            <a href="/teacher/lessons"
                               className="confirm">Αναίρεση</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    )

}


export default TeacherLessons2