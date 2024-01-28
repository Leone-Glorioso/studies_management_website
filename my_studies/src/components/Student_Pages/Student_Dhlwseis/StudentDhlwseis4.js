import React, {Component, useEffect, useState} from "react";
import './StudentDhlwseis4.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, orderBy, query, where, doc, getDoc} from "firebase/firestore";
import {db} from "../../config/firebase_config";

function StudentDhlwseis4() {

    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const user = Auth.getUser();
    const [comps, setComps] = useState([]);
    // const [active, setActive] = useState(false);
    const [lessons_in, setLessonsIn] = useState([]);
    const [lessons_out, setLessonsOut] = useState([]);
    // const [pos, setPos] = useState(0);
    // let pos = 0;
    // let lessons_in = [];
    // let lessons_out = [];

    useEffect(() => {
        async function fetdhDhl()
        {
            const db_ref = collection(db, 'dhloseis');
            const q = query(db_ref, where('student_username', '==', user.username), where('type', '==', 'final') , where('isCurrent', '==', false), orderBy("date", "desc"));
            const docs = await getDocs(q);
            const data = [];
            docs.forEach((doc)=> {
                data.push({date: doc.data().date.toDate().toDateString(), time: doc.data().date.toDate().toLocaleTimeString("en-GB"), id:doc.id});
            })
            console.log(data);
            setComps(data);
        }
        if(isLogged && user.type === 'student')
            fetdhDhl();
    }, []);

    async function onClickView(e, id) {
        async function fetchLessons()
        {
            const doc_ref = doc(db, 'dhloseis', id);
            const doc_ret = await getDoc(doc_ref);
            const in_dhloseis = doc_ret.data().lessons;
            const db_ref_alt = collection(db, 'lessons');
            const q_alt = query(db_ref_alt);
            const docs_alt = await getDocs(q_alt);
            const less_in = [];
            const less_out = [];
            docs_alt.forEach((doc)=> {
                if(in_dhloseis.includes(doc.data().num))
                    less_in.push({id: doc.id, ...doc.data()});
                else
                    less_out.push({id: doc.id, ...doc.data()});
            })
            setLessonsIn(less_in);
            setLessonsOut(less_out);
        }
        if(isLogged && user.type === 'student'){
            await fetchLessons();
        }

    }

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/student">Αρχική Φοιτητή</a></li>
                <li><a href="/student/forms">Δηλώσεις</a></li>
                <li>Οριστικοποιημένες</li>
            </ul>

            {(!isLogged || user.type !== 'student') && <div className="container">
                <ul className="responsive-table-df">
                    <li className="table-header">
                        <div className="col col-1">Ημερομηνία</div>
                        <div className="col col-2">Ώρα</div>
                        <div className="col col-3"></div>
                    </li>
                    <li className="table-row">
                        <div className="col col-1" data-label="date">00-00-0000</div>
                        <div className="col col-2" data-label="type">ΧΧΧΧΧΧΧΧ</div>
                        <a href="#popup-ep" className="col col-3">Προβολή</a>
                    </li>
                    <li className="table-row">
                        <div className="col col-1" data-label="date">00-00-0000</div>
                        <div className="col col-2" data-label="type">ΧΧΧΧΧΧΧΧ</div>
                        <a href="#popup-ep" className="col col-3">Προβολή</a>
                    </li>
                </ul>
            </div>}

            {isLogged && user.type === 'student' && <div className="container">
                <ul className="responsive-table-df">
                    <li className="table-header">
                        <div className="col col-1">Ημερομηνία</div>
                        <div className="col col-2">Ώρα</div>
                        <div className="col col-3"></div>
                    </li>
                    {comps.map((comp) => {
                        return (
                            <li className="table-row">
                                <div className="col col-1" data-label="date">{comp.date}</div>
                                <div className="col col-2" data-label="type">{comp.time}</div>
                                <a id={comp.id} href="#popup-ep" className="col col-3" onClick={(e)=> onClickView(e, comp.id)}>Προβολή</a>
                            </li>
                        );
                    })}
                </ul>
            </div>}

            {(!isLogged || user.type !== 'student') && <div id="popup-ep" className="overlay">
                <div className="popup-ep-fs">
                    <div className="content">
                        Η δήλωσή σας:
                        <table className="table-dhlfs">
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
                    <ul className="button-ok-fs">
                        <li className="buttons-c1">
                            <a href="/student/forms/final" className="confirm">OK</a>
                        </li>
                    </ul>
                </div>
            </div>}

            {isLogged && user.type === 'student' && <div id="popup-ep" className="overlay">
                <div className="popup-ep-fs">
                    <div className="content">
                        Η δήλωσή σας:
                        <table className="table-dhlfs">
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
                        </table>
                    </div>
                    <ul className="button-ok-fs">
                        <li className="buttons-c1">
                            <a href="/student/forms/final" className="confirm">OK</a>
                        </li>
                    </ul>
                </div>
            </div>}

        </div>

    )

}


export default StudentDhlwseis4