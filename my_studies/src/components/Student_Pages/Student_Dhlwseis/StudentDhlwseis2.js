import React, {Component, useEffect, useState} from "react";
import './StudentDhlwseis2.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../config/firebase_config";

function StudentDhlwseis2() {
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
        console.log(limit, checked);
    }
    if(isLogged)
    fetchLessons();
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
                    <li><a href="/student">Αρχική Φοιτητή</a></li>
                    <li><a href="/student/forms">Δηλώσεις</a></li>
                    <li>Νέα Δήλωση</li>
                </ul>

                <p className="text-d">Η δήλωσή σου υποβλήθηκε με επιτυχία!</p>

                <div className="buttons2-d">
                    <a href="#popup2" className="undo">Αναίρεση</a>
                    <a href="/student" className="home">Επιστροφή στην αρχική</a>
                    <a href="#popup-ep" className="last-form">Επισκόπηση της δήλωσης</a>
                </div>

                <div className="message">
                    <div className="text2">Τι κάνω τώρα;</div>
                    <div className="text1"><p>Μέχρι τη λήξη της προθεσμίας μπορείς να υποβάλεις όσες δηλώσεις θέλεις.</p>
                        <p>Θα ληφθεί υπόψιν μόνο η τελευταία.</p>
                    </div>
                </div>

                <div id="popup2" className="overlay">
                    <div className="popup">
                        <div className="content">
                            Σίγουρα θέλετε να αναιρέσετε την δήλωση;
                        </div>
                        <ul className="buttons1">
                            <li className="buttons-c1">
                                <a href="/student/forms/new-form/done" className="cancel-p">Άκυρο</a>
                                <a href="/student/forms/new-form" className="confirm">Αναίρεση</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="popup-ep" className="overlay">
                    <div className="popup-ep-f">
                        <div className="content">
                            Η δήλωσή σας:
                            <table className="table-dhlf">
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
                                <tr>
                                    <td>111111</td>
                                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                                    <td className="checkboxes"><input type="checkbox"/></td>
                                </tr>
                                <tr>
                                    <td>111111</td>
                                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                                    <td className="checkboxes"><input type="checkbox"/></td>
                                </tr>
                                <tr>
                                    <td>111111</td>
                                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                                    <td className="checkboxes"><input type="checkbox"/></td>
                                </tr>
                            </table>
                        </div>
                        <ul className="button-ok-f">
                            <li className="buttons-c1">
                                <a href="/student/forms/new-form/done" className="confirm">OK</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        )

}


export default StudentDhlwseis2