import React, {Component, useEffect, useState} from "react";
import './StudentDhlwseis.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, orderBy, query, where} from "firebase/firestore";
import {db} from "../../config/firebase_config";

function StudentDhlwseis() {

    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const user = Auth.getUser();
    const [lessons_in, setLessonsIn] = useState([]);
    const [lessons_out, setLessonsOut] = useState([]);

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
            const in_dhloseis = data[0];
            const db_ref_alt = collection(db, 'lessons');
            const q_alt = query(db_ref_alt);
            const docs_alt = await getDocs(q_alt);
            const less_in = [];
            const less_out = [];
            docs_alt.forEach((doc)=> {
                if(doc.data().num in in_dhloseis)
                    less_in.push({id: doc.id, ...doc.data()});
                else
                    less_out.push({id: doc.id, ...doc.data()});
            })
            setLessonsIn(less_in);
            setLessonsOut(less_out);
        }
        if(isLogged)
            fetchLessons();
    }, []);


    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/student">Αρχική Μαθητή</a></li>
                <li>Δηλώσεις</li>
            </ul>

            {/*<table className="table-dhl">*/}
            {/*    <tr>*/}
            {/*        <th>Κωδικός Μαθήματος</th>*/}
            {/*        <th>Τίτλος Μαθήματος</th>*/}
            {/*        <th>Δήλωση</th>*/}
            {/*    </tr>*/}
            {/*    <tr>*/}
            {/*        <td>000000</td>*/}
            {/*        <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>*/}
            {/*        <td className="checkboxes"><input type="checkbox"/></td>*/}
            {/*    </tr>*/}
            {/*    <tr>*/}
            {/*        <td>111111</td>*/}
            {/*        <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>*/}
            {/*        <td className="checkboxes"><input type="checkbox"/></td>*/}
            {/*    </tr>*/}
            {/*</table>*/}

            {!isLogged && <table className="table-dhl">
                <tr>
                    <th>Κωδικός Μαθήματος</th>
                    <th>Τίτλος Μαθήματος</th>
                    <th>Δήλωση</th>
                </tr>
                <tr>
                    <td>000000</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td className="checkboxes"><input type="checkbox"/></td>
                </tr>
                <tr>
                    <td>111111</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td className="checkboxes"><input type="checkbox"/></td>
                </tr>
            </table>}

            {isLogged && <table className="table-dhl">
                <tr>
                    <th>Κωδικός Μαθήματος</th>
                    <th>Τίτλος Μαθήματος</th>
                    <th>Δήλωση</th>
                </tr>

                {lessons_in.map((item) => {
                    return (
                        <tr>
                            <td>{item.num}</td>
                            <td>{item.name}</td>
                            <td className="checkboxes"><input type="checkbox" defaultChecked={true} /></td>
                        </tr>
                    )
                })}

                {lessons_out.map((item) => {
                    return (
                        <tr>
                            <td>{item.num}</td>
                            <td>{item.name}</td>
                            <td className="checkboxes"><input type="checkbox" defaultChecked={false}/></td>
                        </tr>
                    )
                })}
            </table>}

            <ul className="dropdowns-d">
                <li className="drop-buttons">
                    <details className="dropdown">
                        <summary role="button">
                            <a className="button">Κατηγορίες</a>
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


            <div className="buttons-c">
                <a href="/student/forms/saved" className="saved">Αποθηκευμένες Δηλώσεις</a>
                <a href="/student/forms/new-form" className="new">Νέα Δήλωση</a>
            </div>


        </div>

    )

}


export default StudentDhlwseis