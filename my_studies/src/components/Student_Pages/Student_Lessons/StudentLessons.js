import React, {Component, useEffect, useState} from "react";
import './StudentLessons.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import Dropdown from "../Dropdowns/Dropdown";
import {LessonItems} from "./LessonItems";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, orderBy, query, where, doc, getDoc} from "firebase/firestore";
import {db} from "../../config/firebase_config";
import {useNavigate} from "react-router-dom";

function StudentLessons() {

    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const user = Auth.getUser();
    const [lessons, setLessons] = useState([]);
    const navigate = useNavigate();

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
                    data_alt.push({code: doc.data().num, name: doc.data().name, id: doc.id});
                })
            }
            console.log(data_alt);
            setLessons(data_alt);
        }
        if(isLogged && user.type === 'student')
            fetchLessons();
    }, []);

    const setLesson = (e, code) => {
        async function fetchlesson(){
            const db_ref_alt = collection(db, 'lessons');
            console.log(e.target.id);
            const q_alt = query(db_ref_alt, where('num', '==', code));
            const docs_alt = await getDocs(q_alt);
            const data_alt = [];
            docs_alt.forEach((doc)=> {
                data_alt.push({id: doc.id, ...doc.data()});
            })
            Auth.lessonSetter(data_alt[0]);
            console.log(data_alt);
            navigate('/student/lessons/lesson');
        }
        if(isLogged && user.type === 'student')
            fetchlesson()
    }

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/student">Αρχική Φοιτητή</a></li>
                <li>Μαθήματα</li>
            </ul>

            {(!isLogged || user.type !== 'student') && <table className="lessons">
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

            {isLogged && user.type === 'student' &&
                <table className="lessons">
                    <tr>
                        <th>Κωδικός Μαθήματος</th>
                        <th>Τίτλος Μαθήματος</th>
                    </tr>
                    {lessons.map((lesson) => {
                            return (
                                // <a href={'/student/lessons/lesson'} id={lesson.id}>
                                    <tr onClick={(e) => setLesson(e,lesson.code)}>
                                        <td>{lesson.code}</td>
                                        <td>{lesson.name}</td>
                                    </tr>
                                // </a>
                            )
                        }
                    )}
                </table>
            }

            <Dropdown/>

        </div>

    )

}


export default StudentLessons