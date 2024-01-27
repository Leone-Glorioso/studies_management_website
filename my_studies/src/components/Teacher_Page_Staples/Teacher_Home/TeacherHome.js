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
            const docs = await getDocs(collection(db, 'lessons'));
            const data = [];
            docs.forEach((doc)=> {
                data.push({id: doc.id, ...doc.data()});
            })
            const less = []
            data.forEach((lesson) => {
                // console.log(user.username in lesson.teachers, lesson, lesson.teachers, user.username);
                if(lesson.teachers.indexOf(user.username) > -1){
                    less.push(lesson);
                    console.log("ENTER");
                }

            })
            console.log(less);
            setLessons(less);
        }
        if(isLogged)
            fetchLessons();
    }, []);

    return (
        <div>
            <Sidebar/>
            <div className="title">Τα μαθηματά μου</div>
            <p className="desc">Παρακάτω βλέπετε τα μαθήματα που έχετε αναλάβει το τρέχον εξάμηνο:</p>

            {(!isLogged || user.type !== 'teacher') && <table>
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

            {isLogged && user.type === 'teacher' &&
                <table>
                    <tr>
                        <th>Κωδικός Μαθήματος</th>
                        <th>Τίτλος Μαθήματος</th>
                    </tr>
                    {lessons.map( (lesson) => {
                            return(
                                <tr>
                                    <td>{lesson.num}</td>
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