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
    const [top_grades, setTopGrades] = useState([]);

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
                // const q = query(db_ref, where('teacher', '==', user.username), where('lesson', '==', lesson.num));
                const q = query(db_ref, where('lesson', '==', lesson.num));
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

    const onGoToEditSaved = (e,lesson) => {
        Auth.setLessonsEdit(lesson);
        Auth.setCurrent(lesson.grade_id);
        Auth.setFromSaved(true);
    }

    const onShowFinalized = (e, lesson) => {
        setTopGrades(lesson.grading.grades);
        // navigate('#popup-ef');
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
                <tr>
                    <td>101010</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td><a href={'#popup-ep'} className="button-show">Οριστικοποιημένη</a></td>
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
                            if (lesson.grading === undefined)
                                return (
                                    <tr>
                                        <td>{lesson.num}</td>
                                        <td>{lesson.name}</td>
                                        <td><a onClick={(e) => onGoToEdit(e, lesson)} href={'/teacher/lessons/new-grades'}
                                               className="button-n">Νέο Βαθμολόγιο</a></td>
                                    </tr>
                                )
                            else if (lesson.grading.state === 'temporary')
                                return (
                                    <tr>
                                        <td>{lesson.less.num}</td>
                                        <td>{lesson.less.name}</td>
                                        <td><a onClick={(e) => onGoToEditSaved(e, lesson)}
                                               href={'/teacher/lessons/edit-grades'} className="button-e">Επεξεργασία</a>
                                        </td>
                                    </tr>
                                )
                            else
                                return (
                                    <tr>
                                        <td>{lesson.less.num}</td>
                                        <td>{lesson.less.name}</td>
                                        <td><a className={'button-show'} href={'#popup-ep'}
                                               onClick={(e) => onShowFinalized(e, lesson)}>Οριστικοποιημένη</a></td>
                                    </tr>
                                )
                        }
                    )}
                </table>
            }

            {(!isLogged || user.type !== 'teacher') && <div id="popup-ep" className="overlay">
                <div className="popup-ep-s-less">
                    <div className="content">
                        Οι βαθμολογίες σας:
                        <table className="table-dhls">
                            <tr>
                                <th>Κωδικός Μαθητή</th>
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
                            <tr>
                                <td>111111</td>
                                <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                            </tr>
                        </table>
                    </div>
                    <ul className="button-ok-s-less">
                        <li className="buttons-c1">
                            <a href="/teacher/lessons" className="confirm">OK</a>
                        </li>
                    </ul>
                </div>
            </div>}

            {isLogged && user.type === 'teacher' && <div id="popup-ep" className="overlay">
                <div className="popup-ep-s-less">
                    <div className="content">
                        Οι βαθμολογίες σας:
                        <table className="table-dhls">
                            <tr>
                                <th>Κωδικός Μαθητή</th>
                                <th>Τίτλος Μαθήματος</th>
                            </tr>
                            {top_grades.map((gr) => {
                                return (
                                    <tr>
                                        <td>{gr.student}</td>
                                        <td>{gr.grade}</td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                    <ul className="button-ok-s-less">
                        <li className="buttons-c1">
                            <a href="/teacher/lessons" className="confirm">OK</a>
                        </li>
                    </ul>
                </div>
            </div>}


            <ul className="dropdowns">
                <li className="drop-buttons">
                    <details className="dropdown_t">
                        <summary role="button">
                            <div className="title0-t">Κατάσταση</div>
                            <a className="button_t">Όλα <i className="fa-solid fa-chevron-down"></i></a>
                        </summary>


                        <ul>
                            <li><a href="#">Όλα</a></li>
                            <li><a href="#">Υπό επεξεργασία</a></li>
                            <li><a href="#">Οριστικοποιημένα</a></li>
                            <li><a href="#">Προς δημιουργία</a></li>
                        </ul>
                    </details>

                    <details className="dropdown1_t">
                        <summary role="button">
                            <div className="title1-t">Ταξινόμηση κατά</div>
                            <a className="button1_t">Πιο πρόσφατα<i
                                className="fa-solid fa-chevron-down"></i></a>
                        </summary>
                        <ul>
                            <li><a href="#">Πιο πρόσφατα</a></li>
                            <li><a href="#">Λιγότερο πρόσφατα</a></li>
                        </ul>
                    </details>
                </li>
            </ul>


        </div>

    )

}


export default TeacherLessons