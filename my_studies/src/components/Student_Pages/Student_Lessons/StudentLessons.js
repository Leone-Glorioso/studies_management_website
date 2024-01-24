import React, {Component, useEffect, useState} from "react";
import './StudentLessons.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {LessonItems} from "./LessonItems";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, orderBy, query, where} from "firebase/firestore";
import {db} from "../../config/firebase_config";

function StudentLessons() {

    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const user = Auth.getUser();
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        async function fetchLessons()
        {
            const db_ref = collection(db, 'dhloseis');
            const q = query(db_ref, where('student_username', '==', user.username), where('isCurrent', '==', true));
            const docs = await getDocs(q);
            const data = [];
            docs.forEach((doc)=> {
                data.push(doc.data().lessons);
            })
            if(data.length !== 1)
                return;
            const data_alt = [];
            const lesson_names = data[0];
            for (const lesson of lesson_names) {
                const db_ref_alt = collection(db, 'lessons');
                const q_alt = query(db_ref_alt, where('num', '==', lesson));
                const docs_alt = await getDocs(q_alt);
                docs_alt.forEach((doc)=> {
                    data_alt.push({code: doc.data().num, name: doc.data().name});
                })
            }
            setLessons(data_alt);
        }
        if(isLogged)
            fetchLessons();
    }, []);

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/student">Αρχική Φοιτητή</a></li>
                <li>Μαθήματα</li>
            </ul>

            {!isLogged && <table className="lessons">
                <tr>
                    <th>Κωδικός Μαθήματος</th>
                    <th>Τίτλος Μαθήματος</th>
                </tr>
                <tr>
                    <td>000000</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                </tr>
                <tr>
                    <td>111111</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                </tr>

            </table>}

            {isLogged &&
                <table>
                    <tr>
                        <th>Κωδικός Μαθήματος</th>
                        <th>Τίτλος Μαθήματος</th>
                    </tr>
                    {lessons.map( (lesson) => {
                            return(
                                <tr>
                                    <td>{lesson.code}</td>
                                    <td>{lesson.name}</td>
                                </tr>
                            )
                        }
                    )}
                </table>
            }

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


export default StudentLessons