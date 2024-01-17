import React, {Component, useEffect, useState} from "react";
import './TeacherLessons1.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, orderBy, query, where} from "firebase/firestore";
import {db} from "../../config/firebase_config";

function TeacherLessons1() {
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
                <li>Επεξεργασία βαθμολογίου</li>
            </ul>

            <p className="les-title">Όνομα μαθήματος</p>

            {/*<div className="Lessons">*/}
            {/*    <ul className="lesson">*/}
            {/*        {LessonItems.map((item, index) => {*/}
            {/*            return (*/}
            {/*                <li key={index}>*/}
            {/*                    <a href={item.url} className={item.cName}>*/}
            {/*                        {item.title}*/}
            {/*                    </a>*/}
            {/*                    <div className="code">Κωδ</div>*/}
            {/*                    <div className="semester">ΕΞ</div>*/}
            {/*                </li>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </ul>*/}
            {/*</div>*/}

            {!isLogged && <table className="table-s">
                <tr>
                    <th>ΑΜ</th>
                    <th>Όνομα</th>
                    <th>Επώνυμο</th>
                    <th>Βαθμός</th>
                </tr>
                <tr>
                    <td>000000</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td>000000</td>
                </tr>
                <tr>
                    <td>111111</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td>000000</td>
                </tr>

            </table>}

            {isLogged &&
                <table className="table-s">
                    <tr>
                        <th>ΑΜ</th>
                        <th>Όνομα</th>
                        <th>Επώνυμο</th>
                        <th>Βαθμός</th>
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

            <div className="teach-buttons">
                <a href="/student/forms/saved" className="save">Προσωρινή αποθήκευση</a>
                <a href="/student/forms/new-form" className="mult">Πολλαπλή Βαθμολόγηση</a>
            </div>


        </div>

    )

}


export default TeacherLessons1