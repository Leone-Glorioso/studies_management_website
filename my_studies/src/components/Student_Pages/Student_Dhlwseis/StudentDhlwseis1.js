import React, {Component, useEffect, useState} from "react";
import './StudentDhlwseis1.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../config/firebase_config";

function StudentDhlwseis1() {
    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const user = Auth.getUser();
    const [lessons_in, setLessonsIn] = useState([]);
    const [lessons_out, setLessonsOut] = useState([]);
    const [limit, setLimit] = useState(0);
    const [checked, setChecked] = useState(0);

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
        switch (user.year)
        {
            case 1:
                setLimit(3);
                break;
            case 2:
                setLimit(4);
                break;
            case 3:
                setLimit(5);
                break;
            default:
                setLimit(10);
                break;
        }
        setChecked(lessons_in.length);
    }, []);

    const onClickCheckBox = (e) => {
        if(e.target.checked)
            setChecked(checked+1);
        else
            setChecked(checked-1);
    }

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/student">Αρχική Μαθητή</a></li>
                <li><a href="/student/forms">Δηλώσεις</a></li>
                <li>Νέα Δήλωση</li>
            </ul>

            {checked > limit && <div className="warning">Μπορείς να δηλώσεις μέχρι {limit} μαθήματα!</div>}

            {!isLogged &&
                <table className="table-dhl">
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
                </table>
            }

            {
                <table className="table-dhl">
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
                                <td className="checkboxes"><input type="checkbox" defaultChecked={true} onClick={onClickCheckBox.bind(this)}/></td>
                            </tr>
                        )
                    })}

                    {lessons_out.map((item) => {
                        return (
                            <tr>
                                <td>{item.num}</td>
                                <td>{item.name}</td>
                                <td className="checkboxes"><input type="checkbox" defaultChecked={false} onClick={onClickCheckBox.bind(this)}/></td>
                            </tr>
                        )
                    })}
                </table>
            }

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
                <a href="#" className="cancel"> Άκυρο</a>
                <a href="#" className="temp">Προσωρινή αποθήκευση</a>
                <a href="/student/forms/new-form/done" className="submit">Οριστική υποβολή</a>
            </div>


        </div>

    )

}


export default StudentDhlwseis1