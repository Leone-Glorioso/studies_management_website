import React, {Component, useEffect, useState} from "react";
import './StudentHome.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../config/firebase_config";
import {Prof1} from "../Student_Profile/ProfItems";

function StudentHome()  {

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

    const [Prof1_logged, setProf1_Logged] = useState([]);

    useEffect(() => {
        if (isLogged) {
            setProf1_Logged([
                {
                    cName: "prof-info",
                    title: "Ημερομηνία πρώτης εγγραφής: ",
                    text: user.first_sign_in
                },
                {
                    cName: "prof-info",
                    title: "Εξάμηνο φοίτησης: ",
                    text: user.semester + "ο"
                },
                {
                    cName: "prof-info",
                    title: "Εξάμηνο πρώτης εγγραφής: ",
                    text: user.semester_first_signup
                },
                {
                    cName: "prof-info",
                    title: "Ακαδημαϊκό έτος: ",
                    text: user.year + "ο"
                },
            ])
        }
    }, []);

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
        if(isLogged)
            fetchGrades();
    }, []);

    const onNotLogged = () => {
        Auth.setWindow(true);
    }

    return (
        <div>
            <Sidebar/>
            <a className="title-sp" href="/student/lessons">Τα μαθηματά μου</a>
            <p className="desc-sp">Παρακάτω βλέπεις τα μαθήματα που έχεις δηλώσει το τρέχον εξάμηνο:</p>

            {!isLogged && <table>
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
                    {lessons.map((lesson) => {
                            return (
                                <tr>
                                    <td>{lesson.code}</td>
                                    <td>{lesson.name}</td>
                                </tr>
                            )
                        }
                    )}
                </table>
            }

            <p className="go-to-lessons">Δες περισσότερα στα: <a href="/student/lessons">Μαθήματα</a></p>

            <p className="title1-sp">Σχετικά με της σπουδές μου:</p>
            {!isLogged && <div className="Study-info-sp">
                <ul className="info">
                    {Prof1.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>}
            {isLogged && <div className="Study-info-logged-sp">
                <ul className="info">
                    {Prof1_logged.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName}>
                                    {item.title + " " + item.text}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>}
            <p className="go-to-profile">Δες περισσότερα στο: <a href="/student/profile">Προφίλ</a></p>

            <p className="title2-sp">Οι τελευταίες βαθμολογίες μου:</p>
            {!isLogged && <table className="table-gr">
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
                <tr>
                    <td>111111</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td>Χ</td>
                </tr>
                <tr>
                    <td>111111</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td>Χ</td>
                </tr>
            </table>}
            {isLogged &&
                <table className="table-gr">
                    <tr>
                        <th>Κωδικός Μαθήματος</th>
                        <th>Τίτλος Μαθήματος</th>
                        <th>Βαθμός</th>
                    </tr>
                    {grades.map((grade) => {
                        return (
                            <tr>
                                <td>{grade.code}</td>
                                <td>{grade.name}</td>
                                {grade.grade >= 5 && <td className={'passed_grade'}>{grade.grade}</td>}
                                {grade.grade < 5 && <td className={'failed_grade'}>{grade.grade}</td>}
                            </tr>
                        )
                    })}
                </table>}
            <p className="go-to-grades">Δες περισσότερα στις: <a href="/student/grades">Βαθμολογίες</a></p>

        </div>

    )

}

export default StudentHome