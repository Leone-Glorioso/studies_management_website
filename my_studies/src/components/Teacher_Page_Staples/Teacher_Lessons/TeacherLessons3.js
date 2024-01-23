import React, {Component, useEffect, useState} from "react";
import './TeacherLessons3.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, orderBy, query, where} from "firebase/firestore";
import {db} from "../../config/firebase_config";

function TeacherLessons3() {

    // Function to toggle between hiding and showing the dropdown content
    const myFunction = () => {
        const dropdown = document.getElementById("myDropdown");
        dropdown.classList.toggle("show");
    };

    // Function to filter dropdown content based on user input
    const filterFunction = () => {
        const input = document.getElementById("myInput");
        const filter = input.value.toUpperCase();
        const dropdown = document.getElementById("myDropdown");
        const anchors = dropdown.getElementsByTagName("a");

        for (let i = 0; i < anchors.length; i++) {
            const txtValue = anchors[i].textContent || anchors[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                anchors[i].style.display = "";
            } else {
                anchors[i].style.display = "none";
            }
        }
    };

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/teacher">Αρχική Καθηγητή</a></li>
                <li><a href="/teacher/lessons">Βαθμολόγια</a></li>
                <li>Νέο βαθμολόγιο</li>
            </ul>

            <p className="les-title">Όνομα μαθήματος</p>
            <p className="text">Μπορείτε να δημιουργήσετε το βαθμολόγιο:</p>
            <p className="text1">- είτε ανεβάζοντας κάποιο αρχείο "Πολλαπλή Βαθμολόγηση"</p>
            <p className="text2">- είτε περνώντας κάθε βαθμολογία ξεχωριστά "+"</p>

            <div className="teach-buttons">
                <a href="#popup-mult" className="mult">Πολλαπλή Βαθμολόγηση</a>
                <a href="#popup-one" className="new"><i className="fa-solid fa-plus"></i> </a>
            </div>

            <div id="popup-mult" className="overlay">
                <div className="popup-m">
                    <div className="content">
                        <p>Επιλέξτε κάποιο από τα αρχεία σας</p>
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/teacher/lessons/new-grades"
                               className="cancel-g">Άκυρο</a>
                            <a href="/teacher/lessons/edit-grades"
                               className="confirm">OK</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="popup-one" className="overlay">
                <div className="popup-o">
                    <div className="content">
                        <p>Εισάγετε τελικό βαθμό:</p>
                        <div className="dropdown-st">
                            <button onClick={myFunction} className="dropbtn">
                                Επιλογή φοιτητή
                            </button>
                            <div id="myDropdown" className="dropdown-content">
                                <input
                                    type="text"
                                    placeholder="Αναζήση AM.."
                                    id="myInput"
                                    onKeyUp={filterFunction}
                                />
                                <a href="/teacher/lessons/new-grades#popup-one">sdi2100127</a>
                                <a href="/teacher/lessons/new-grades#popup-one">sdi2100129</a>
                                <a href="/teacher/lessons/new-grades#popup-one">sdi2100074</a>
                            </div>
                        </div>
                        <p></p>
                        <label htmlFor="grade">Βαθμός:</label><input type="number" fname="grade"></input>
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/teacher/lessons/new-grades"
                               className="cancel-g">Άκυρο</a>
                            <a href="/teacher/lessons/edit-grades"
                               className="confirm">ΟΚ</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    )

}


export default TeacherLessons3