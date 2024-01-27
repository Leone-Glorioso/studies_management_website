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
            const docs = await getDocs(collection(db, 'lessons'));
            const data = [];
            docs.forEach((doc)=> {
                data.push({id: doc.id, ...doc.data()});
            })
            const less = [];
            data.forEach((lesson) => {
                // console.log(user.username in lesson.teachers, lesson, lesson.teachers, user.username);
                if(lesson.teachers.indexOf(user.username) > -1){
                    less.push(lesson);
                }

            })
            console.log(less);
            const less_with_details = [];
            for (const lesson of less){
                const db_ref = collection(db, 'grading');
                console.log(lesson.num)
                const q = query(db_ref, where('teacher', '==', user.username), where('lesson', '==', lesson.num));
                const docs_alt = await getDocs(q);
                const data_alt = [];
                docs_alt.forEach((doc)=> {
                    data_alt.push({id:doc.id, ...doc.data()});
                })
                if(data_alt.length === 1)
                    less_with_details.push({less: lesson, grading: data_alt[0], grade_id: data_alt[0].id});
                else
                    less_with_details.push(lesson);
            }
            console.log(less_with_details);
            setLessons(less_with_details);
        }
        if(isLogged)
            fetchLessons();
    }, []);

    const onNotLogged = () => {
        Auth.setWindow(true);
    }

    const onGoToEdit = (e,lesson) => {
        Auth.setLessonsEdit(lesson);
    }

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/teacher">Αρχική Καθηγητή</a></li>
                <li>Βαθμολόγια</li>
            </ul>


            {(!isLogged || user.type !== 'teacher') && <table className="table-l">
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
                    <td><a onClick={onNotLogged} className="button-e">Επεξεργασία</a></td>
                </tr>
                <tr>
                    <td>111111</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td><a onClick={onNotLogged} className="button-n">Νέο Βαθμολόγιο</a></td>
                </tr>

            </table>}

            {/*<td><a href="/teacher/lessons/edit-grades" className="button-e">Επεξεργασία</a></td>*/}

            {isLogged && user.type === 'teacher' &&
                <table className="table-l">
                    <tr>
                        <th>Κωδικός Μαθήματος</th>
                        <th>Τίτλος Μαθήματος</th>
                        <th>Κατάσταση</th>
                        <th></th>
                    </tr>
                    {lessons.map((lesson) => {
                        if(lesson.grading === undefined)
                            return (
                                <tr>
                                    <td>{lesson.num}</td>
                                    <td>{lesson.name}</td>
                                    <td><a  onClick={(e) => onGoToEdit(e, lesson)} href={'/teacher/lessons/new-grades'} className="button-n">Νέο Βαθμολόγιο</a></td>
                                </tr>
                            )
                        else if(lesson.grading.state === 'temporary')
                            return (
                                <tr>
                                    <td>{lesson.less.num}</td>
                                    <td>{lesson.less.name}</td>
                                    <td><a onClick={(e) => onGoToEdit(e, lesson)} href={'/teacher/lessons/edit-grades'} className="button-e">Επεξεργασία</a></td>
                                </tr>
                                )
                        else
                            return (
                                <tr>
                                    <td>{lesson.less.num}</td>
                                    <td>{lesson.less.name}</td>
                                    <td> Οριστικοποιημένο </td>
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