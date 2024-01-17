import React, {Component, useEffect, useState} from "react";
import './TeacherLessons2.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, orderBy, query, where} from "firebase/firestore";
import {db} from "../../config/firebase_config";

function TeacherLessons2() {
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

    // const onGoToLessonPage = async (event) => {
    //     async function fetchLesson()
    //     {
    //         const lesson_id = lessons[event.currentTarget.id].code;
    //         const db_ref = collection(db, 'lessons');
    //         const q = query(db_ref, where('num', '==', lesson_id));
    //         const docs = await getDocs(q);
    //         const data = [];
    //         docs.forEach((doc) => {
    //             data.push({id: doc.id, ...doc.data()})
    //         })
    //         Auth.lessonSetter(data[0]);
    //     }
    //     await fetchLesson();
    // }

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/teacher">Αρχική Καθηγητή</a></li>
                <li><a href="/teacher/lessons">Βαθμολόγια</a></li>
                <li>Οριστικοποίηση βαθμολογίου</li>
            </ul>

            <p className="les-title">Όνομα μαθήματος</p>
            <p className="text">Το βαθμολόγιο του μαθήματός σας υποβλήθηκε με επιτυχία!</p>

            <div className="final-buttons">
                <a href="#popup-cancel" className="canc">Αναίρεση</a>
                <a href="/teacher" className="ret">Επιστροφή στην αρχική</a>
                <a href="/teacher/lessons/new-grades" className="new-g">Νέο βαθμολόγιο</a>
            </div>

            <div id="popup-cancel" className="overlay">
                <div className="popup-c">
                    <div className="content">
                        <p>Σίγουρα θέλετε να αναιρέσετε το βαθμολόγιο;</p>
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/teacher/lessons/edit-grades"
                               className="cancel-g">Άκυρο</a>
                            <a href="/teacher/lessons"
                               className="confirm">Αναίρεση</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    )

}


export default TeacherLessons2