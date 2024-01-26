import React, {Component, useEffect, useState} from "react";
import './TeacherLessons1.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, orderBy, query, where} from "firebase/firestore";
import {db} from "../../config/firebase_config";

function TeacherLessons1() {

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

    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const user = Auth.getUser();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        async function fetchStudents()
        {
            const list_of = []
            for(const grade of Auth.getLessonsEdit().grading.grades)
            {
                const db_ref = collection(db, 'user');
                const q = query(db_ref, where('username', '==', grade.student));
                const docs = await getDocs(q);
                docs.forEach((doc) => {
                    list_of.push({username: doc.data().username, name: doc.data().name, surname: doc.data().surname, grade: grade.grade})
                })
            }
            setStudents(list_of);

        }
        if(isLogged && Auth.getLessonsEdit() !== undefined)
            fetchStudents();
    }, []);

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/teacher">Αρχική Καθηγητή</a></li>
                <li><a href="/teacher/lessons">Βαθμολόγια</a></li>
                <li>Επεξεργασία βαθμολογίου</li>
            </ul>

            {(!isLogged || Auth.getLessonsEdit() === undefined) && <p className="les-title">Όνομα μαθήματος</p>}
            {isLogged && Auth.getLessonsEdit() !== undefined && <p className="les-title">{Auth.getLessonsEdit().less.name}</p>}


            {!isLogged && <table className="table-s">
                <tr>
                    <th>ΑΜ</th>
                    <th>Όνομα</th>
                    <th>Επώνυμο</th>
                    <th>Βαθμός</th>
                </tr>
                <tr>
                    <td>000000</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td>000000</td>
                </tr>
                <tr>
                    <td>111111</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td>000000</td>
                </tr>

            </table>}

            {isLogged &&
                <table className="table-s">
                    <tr>
                        <th>ΑΜ</th>
                        <th>Όνομα</th>
                        <th>Επώνυμο</th>
                        <th>Βαθμός</th>
                    </tr>
                    {students.map((student) => {
                            return (
                                <tr>
                                    <td>{student.username}</td>
                                    <td>{student.name}</td>
                                    <td>{student.surname}</td>
                                    <td>{student.grade}</td>
                                </tr>
                            )
                        }
                    )}
                </table>
            }

            <div className="teach-buttons">
                <a href="#popup-save" className="save">Προσωρινή αποθήκευση</a>
                <a href="#popup-mult" className="mult">Πολλαπλή Βαθμολόγηση</a>
                <a href="#popup-one" className="new"><i className="fa-solid fa-plus"></i> </a>
                <a href="#popup-sub" className="sub">Οριστική Υποβολή</a>
            </div>

            <div id="popup-sub" className="overlay">
                <div className="popup-s">
                    <div className="content">
                        <p>Σίγουρα θέλετε να υποβάλετε το βαθμολόγιο;</p><p>Οι οριστικές βαθμολογίες ΔΕΝ αλλάζουν!</p>
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/teacher/lessons/edit-grades"
                               className="cancel-g">Άκυρο</a>
                            <a href="/teacher/lessons/fin-grades"
                               className="confirm">Επιβεβαίωση</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="popup-save" className="overlay">
                <div className="popup-sv">
                    <div className="content">
                        Σίγουρα θέλετε να αποθηκεύσετε το βαθμολόγιο;
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/teacher/lessons/edit-grades"
                               className="cancel-g">Άκυρο</a>
                            <a href="/teacher/lessons/saved-grades"
                               className="confirm">Αποθήκευση</a>
                        </li>
                    </ul>
                </div>
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


export default TeacherLessons1