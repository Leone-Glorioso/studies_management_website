import React, {Component, useEffect, useState} from "react";
import './TeacherLessons.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, orderBy, query, where} from "firebase/firestore";
import {db} from "../../config/firebase_config";

function TeacherLessons() {
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
                <li>Βαθμολόγια</li>
            </ul>

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

            {!isLogged && <table className="table-l">
                <tr>
                    <th>Κωδικός Μαθήματος</th>
                    <th>Τίτλος Μαθήματος</th>
                    <th>Κατάσταση</th>
                    <th></th>
                </tr>
                <tr>
                    <td>000000</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td><a href="/teacher/lessons/edit-grades" className="button-e">Επεξεργασία</a></td>
                </tr>
                <tr>
                    <td>111111</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td><a href="/teacher/lessons/new-grades" className="button-n">Νέο Βαθμολόγιο</a></td>
                </tr>

            </table>}

            {isLogged &&
                <table className="table-l">
                    <tr>
                        <th>Κωδικός Μαθήματος</th>
                        <th>Τίτλος Μαθήματος</th>
                        <th>Τίτλος Μαθήματος</th>
                        <th>Κατάσταση</th>
                        <th></th>
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

            <ul className="dropdowns">
                <li className="drop-buttons">


                    <details className="dropdown1-t">
                        <summary role="button">
                            <a className="button1-t">Ακαδημαϊκή Περίοδος</a>
                        </summary>
                        <ul>
                            <li><a href="#">2022-2023</a></li>
                            <li><a href="#">2023-2024</a></li>
                        </ul>
                    </details>

                    <details className="dropdown2-t">
                        <summary role="button">
                            <a className="button2-t">Εξάμηνο</a>
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

                </li>
            </ul>


        </div>

    )

}


export default TeacherLessons