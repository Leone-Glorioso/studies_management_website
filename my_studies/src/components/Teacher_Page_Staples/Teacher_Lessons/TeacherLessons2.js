import React, {Component, useEffect, useState} from "react";
import './TeacherLessons2.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";
import {useNavigate} from "react-router-dom";
import {collection, getDocs, query, where, doc, getDoc, deleteDoc, updateDoc} from "firebase/firestore";
import {db} from "../../config/firebase_config";

function TeacherLessons2() {
    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const user = Auth.getUser();
    const navigate = useNavigate();

    const onNulifyBathmologio = (e) => {
        async function nulify(){
            const doc_ref = doc(db, 'grading', Auth.getCurrent())
            await getDoc(doc_ref);
            const db_ref = collection(db, 'grades')
            const q = query(db_ref, where('lesson_id', '==', Auth.getLessonsEdit().grading.lesson));
            const docs = await getDocs(q);
            const data = []
            docs.forEach( (doc)=> {
                data.push(doc.id);
            })
            console.log(data, Auth.getLessonsEdit().grading.lesson)
            for(const d of data){
                const d_ref = doc(db, 'grades', d);
                await deleteDoc(d_ref);
            }
            if(Auth.getFromSaved()){
                await updateDoc(doc_ref, {
                    state: 'temporary'
                });
            }
            else {
                await deleteDoc(doc_ref);
            }

            navigate("/teacher/lessons");
        }
        if(isLogged && user.type === 'teacher')
            nulify();
    }

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/teacher">Αρχική Καθηγητή</a></li>
                <li><a href="/teacher/lessons">Βαθμολόγια</a></li>
                <li>Οριστικοποίηση βαθμολογίου</li>
            </ul>

            <p className="les-title-b1">Όνομα μαθήματος</p>
            <p className="text-b1">Το βαθμολόγιο του μαθήματός σας υποβλήθηκε με επιτυχία!</p>

            <div className="final-buttons">
                <a href="#popup-cancel" className="canc">Αναίρεση</a>
                <a href="/teacher" className="ret">Επιστροφή στην αρχική</a>
                <a href="/teacher/lessons" className="new-g">Βαθμολόγια</a>
            </div>

            {(!isLogged || user.type !== 'teacher') && <div id="popup-cancel" className="overlay">
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
            </div>}

            {isLogged && user.type === 'teacher' && <div id="popup-cancel" className="overlay">
                <div className="popup-c">
                    <div className="content">
                        <p>Σίγουρα θέλετε να αναιρέσετε το βαθμολόγιο;</p>
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/teacher/lessons/edit-grades"
                               className="cancel-g">Άκυρο</a>
                            <a onClick={(e)=>onNulifyBathmologio(e)}
                                className="confirm">Αναίρεση</a>
                        </li>
                    </ul>
                </div>
            </div>}

        </div>

    )

}


export default TeacherLessons2