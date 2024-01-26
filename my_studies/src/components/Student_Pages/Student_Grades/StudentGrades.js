import React, {Component, useEffect, useState} from "react";
import './StudentGrades.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import Dropdown from "../Dropdowns/Dropdown";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../config/firebase_config";

function StudentGrades() {

    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const user = Auth.getUser();
    const [grades, setGrades] = useState([]);

    useEffect(() => {
    async function fetchGrades()
    {
        const db_ref = collection(db, 'grades');
        const q = query(db_ref, where('student_username', '==', user.username));
        const docs = await getDocs(q);
        const data = [];
        docs.forEach((doc)=> {
            data.push({lesson: doc.data().lesson_id, grade: doc.data().grade});
        })
        const data_alt = [];
        for (const grade of data) {
            const db_ref_alt = collection(db, 'lessons');
            const q_alt = query(db_ref_alt, where('num', '==', grade.lesson));
            const docs_alt = await getDocs(q_alt);
            docs_alt.forEach((doc)=> {
                data_alt.push({code: doc.data().num, name: doc.data().name, grade: grade.grade});
            })
        }
        setGrades(data_alt);
    }
        if(isLogged && user.type === 'student')
            fetchGrades();
    }, []);

    const onNotLogged = () => {
        Auth.setWindow(true);
    }


        return (
            <div>
                <Sidebar/>

                <ul className="breadcrumb">
                    <li><a href="/student">Αρχική Φοιτητή</a></li>
                    <li>Βαθμολογίες</li>
                </ul>

                {(!isLogged || user.type !== 'student') && <table className="table-gr">
                    <tr>
                        <th>Κωδικός Μαθήματος</th>
                        <th>Τίτλος Μαθήματος</th>
                        <th>Βαθμός</th>
                    </tr>
                    <tr>
                        <td>000000</td>
                        <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                        <td>Χ</td>
                    </tr>
                    <tr>
                        <td>111111</td>
                        <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                        <td>Χ</td>
                    </tr>
                </table>}

                {isLogged && user.type === 'student' &&
                    <table className="table-gr">
                        <tr>
                            <th>Κωδικός Μαθήματος</th>
                            <th>Τίτλος Μαθήματος</th>
                            <th>Βαθμός</th>
                        </tr>
                        {grades.map((grade)=> {
                            return(
                                <tr>
                                    <td>{grade.code}</td>
                                    <td>{grade.name}</td>
                                    {grade.grade >= 5 && <td className={'passed_grade'}>{grade.grade}</td>}
                                    {grade.grade < 5 && <td className={'failed_grade'}>{grade.grade}</td>}
                                </tr>
                            )
                        })}
                    </table>}

                <Dropdown/>

                {!isLogged && <a onClick={onNotLogged} className="print_button">Εκτύπωση</a>}
                {isLogged && user.type === 'student' && <a href="#popup-pr" className="print_button">Εκτύπωση</a>}
                {isLogged && user.type !== 'student' && <button href="#popup-pr" className="print_button_dis" disabled={true}>Εκτύπωση</button>}

                <div id="popup-pr" className="overlay">
                    <div className="popup">
                        <div className="content">
                            Οι βαθμολογίες σας αποθηκεύτηκαν με επιτυχία!
                        </div>
                        <ul className="buttons1">
                            <li className="buttons-c1">
                                <a href="/student/grades"
                                   className="confirm">OK</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        )

}


export default StudentGrades