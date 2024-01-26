import React, {Component, useEffect, useState} from "react";
import './StudentDhlwseis3.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, orderBy, query, where, doc, deleteDoc} from "firebase/firestore";
import {db} from "../../config/firebase_config";

function StudentDhlwseis3() {

    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const user = Auth.getUser();
    const [comps, setComps] = useState([]);

    useEffect(() => {
        async function fetdhDhl()
        {
            const db_ref = collection(db, 'dhloseis');
            const q = query(db_ref, where('student_username', '==', user.username), where('type', '==', 'temporary'), orderBy("date", "desc"));
            const docs = await getDocs(q);
            const data = [];
            docs.forEach((doc)=> {
                data.push({date: doc.data().date.toDate().toDateString(), time: doc.data().date.toDate().toLocaleTimeString("en-GB"), id: doc.id});
            })
            setComps(data);
        }
        if(isLogged && user.type === 'student')
            fetdhDhl();
    }, []);

    const onPressDel = (e) => {
        Auth.setDelId(e.target.id);
        console.log(Auth.deleteId);
    }

    const onDeleteSaved = () => {
        async function fetdhDhl()
        {
            await deleteDoc(doc(db, 'dhloseis', Auth.getDelId()));
            Auth.setDelId(0);
        }
        if(isLogged)
            fetdhDhl();
    }



    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/student">Αρχική Φοιτητή</a></li>
                <li><a href="/student/forms">Δηλώσεις</a></li>
                <li>Προσωρινά αποθηκευμένες</li>
            </ul>

            {(!isLogged || user.type !== 'student') && <div className="container">
                <ul className="responsive-table-d">
                    <li className="table-header">
                        <div className="col col-1">Ημερομηνία</div>
                        <div className="col col-2">Ώρα</div>
                        <div className="col col-3"></div>
                        <div className="col col-4"></div>
                        <div className="col col-5"></div>
                    </li>
                    <li className="table-row">
                        <div className="col col-1" data-label="date">00-00-0000</div>
                        <div className="col col-2" data-label="type">ΧΧΧΧΧΧΧΧ</div>
                        <a href="#popup-d" className="col col-3">Διαγραφή</a>
                        <a href="#popup-ep" className="col col-4">Προβολή</a>
                        <a href="#popup-pr-d" className="col col-5">Εκτύπωση</a>
                    </li>
                    <li className="table-row">
                        <div className="col col-1" data-label="date">00-00-0000</div>
                        <div className="col col-2" data-label="type">ΧΧΧΧΧΧΧΧ</div>
                        <a href="#popup-d" className="col col-3">Διαγραφή</a>
                        <a href="#popup-ep" className="col col-4">Προβολή</a>
                        <a href="#popup-pr-d" className="col col-5">Εκτύπωση</a>
                    </li>
                </ul>
            </div>}

            {isLogged && user.type === 'student' && <div className="container">
                <ul className="responsive-table-d">
                    <li className="table-header">
                        <div className="col col-1">Ημερομηνία</div>
                        <div className="col col-2">Ώρα</div>
                        <div className="col col-3"></div>
                        <div className="col col-4"></div>
                        <div className="col col-5"></div>
                    </li>
                    {comps.map((comp) => {
                        return (
                            <li className="table-row">
                                <div className="col col-1" data-label="date">{comp.date}</div>
                                <div className="col col-2" data-label="type">{comp.time}</div>
                                <a id={comp.id} href="#popup-d" className="col col-3" onClick={onPressDel}>Διαγραφή</a>
                                <a href="#popup-ep" className="col col-4">Προβολή</a>
                                <a href="#popup-pr-d" className="col col-5">Εκτύπωση</a>
                            </li>
                        );
                    })}
                </ul>
            </div>}

            <div id="popup-pr-d" className="overlay">
                <div className="popup">
                    <div className="content">
                        Η δήλωσή σας αποθηκεύτηκε με επιτυχία!
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/student/forms/saved"
                               className="confirm">OK</a>
                        </li>
                    </ul>
                </div>
            </div>

            {(!isLogged || user.type !== 'student') && <div id="popup-d" className="overlay">
                <div className="popup">
                    <div className="content">
                        Σίγουρα θέλετε να διαγράψετε τη δήλωση;
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/student/forms/saved" className="cancel-p">Άκυρο</a>
                            <a href="/student/forms/saved" className="delete">Διαγραφή</a>
                        </li>
                    </ul>
                </div>
            </div>}

            {isLogged && user.type === 'student' && <div id="popup-d" className="overlay">
                <div className="popup">
                    <div className="content">
                        Σίγουρα θέλετε να διαγράψετε τη δήλωση;
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/student/forms/saved" className="cancel-p">Άκυρο</a>
                            <a href="/student/forms/saved" className="delete" onClick={onDeleteSaved}>Διαγραφή</a>
                        </li>
                    </ul>
                </div>
            </div>}

            <div id="popup-ep" className="overlay">
                <div className="popup-ep-s">
                    <div className="content">
                        Η δήλωσή σας:
                        <table className="table-dhls">
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
                    <ul className="button-ok-s">
                        <li className="buttons-c1">
                            <a href="/student/forms/saved" className="confirm">OK</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    )

}


export default StudentDhlwseis3