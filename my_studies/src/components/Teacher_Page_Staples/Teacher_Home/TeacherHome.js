import React, {Component, useEffect, useState} from "react";
import './TeacherHome.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../config/firebase_config";

function TeacherHome()  {

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

    return (
        <div>
            <Sidebar/>
            <div className="title">Τα μαθηματά μου</div>
            <p className="desc">Παρακάτω βλέπετε τα μαθήματα που έχετε αναλάβει το τρέχον εξάμηνο:</p>

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
                    {lessons.map( (lesson) => {
                            return(
                                <tr>
                                    <td>{lesson.code}</td>
                                    <td>{lesson.name}</td>
                                </tr>
                            )
                        }
                    )}
                </table>
            }

        </div>

    )

}

export default TeacherHome