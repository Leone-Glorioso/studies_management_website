import React, {Component, useEffect, useState} from "react";
import './StudentCert1_5.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    orderBy,
    query,
    Timestamp,
    updateDoc,
    where
} from "firebase/firestore";
import {db} from "../../config/firebase_config";
import {useAuth} from "../../Auth/AuthContext";
import {useNavigate} from "react-router-dom";

function StudentCert1_5() {

    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const user = Auth.getUser();
    // const [created_id, setCreatedId] = useState('');
    const navigate = useNavigate();


    // useEffect(() => {
    //     async function submit_cert()
    //     {
    //         const doc_ref = await addDoc(collection(db, 'certificates'), {
    //             username: user.username,
    //             state: "on_hold",
    //             type: Auth.getType(),
    //             date: Timestamp.now()
    //         });
    //         setCreatedId(doc_ref.id);
    //     }
    //     if(isLogged && user.type === 'student' && Auth.getType() != 0)
    //     {
    //         submit_cert();
    //         Auth.setType(0);
    //     }
    // }, []);

    const nulifyCert = (e) => {

        async function deleteCert(){
            const doc_ref = doc(db, 'certificates', Auth.getCurrent());
            await deleteDoc(doc_ref);
            navigate("/student/certificates");
        }
        if(isLogged && user.type === 'student')
            deleteCert();
    }

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/student">Αρχική Φοιτητή</a></li>
                <li><a href="/student/certificates">Πιστοποιητικά</a></li>
                <li>Νέο Πιστοποιητικό</li>
            </ul>

            <ul className="progress-bar-t5">
                <li className="table-header">
                    <div className="step1">Επιλογή Πιστοποιητικού</div>
                    <div className="step2">Έλεγχος Στοιχείων</div>
                    <div className="step3">Επιβεβαίωση Τελικής δήλωσης</div>
                    <div className="step4">Επιβεβαίωση ολοκλήρωσης</div>
                </li>
            </ul>

            <ul className="progress-bar5">
                <li className="table-header">
                    <div className="step1">1</div>
                    <div className="step2">2</div>
                    <div className="step3">3</div>
                    <div className="step4">4</div>
                </li>
            </ul>

            <p className="text-5">Η αίτησή σου υποβλήθηκε με επιτυχία!</p>

            <ul className="buttons2">
                <li className="buttons-c">
                    <a href="#popup2" className="undo">Αναίρεση</a>
                    <a href="/student" className="home">Επιστροφή στην αρχική</a>
                </li>
            </ul>

            <div className="message">
                <div className="text2">Τι κάνω τώρα;</div>
                <div className="text1"><p>Μόλις η αίτησή σου εγκριθεί θα λάβεις ειδοποιητικό μήνυμα.</p><p>Θα μπορείς να δεις
                    την αίτησή σου μέσα από το προφίλ σου.</p>
                </div>
            </div>

            {(!isLogged || user.type !== 'student') && <div id="popup2" className="overlay">
                <div className="popup">
                    <div className="content">
                        Σίγουρα θέλετε να αναιρέσετε την αίτηση;
                    </div>
                    <ul className="buttons1_5">
                        <li className="buttons-c1">
                            <a href="/student/certificates/new-certificate/personal_info/confirmation/end/done"
                               className="cancel-p">Άκυρο</a>
                            <a href="/student/certificates" className="confirm">Αναίρεση</a>
                        </li>
                    </ul>
                </div>
            </div>}

            {isLogged && user.type === 'student' && <div id="popup2" className="overlay">
                <div className="popup">
                    <div className="content">
                        Σίγουρα θέλετε να αναιρέσετε την αίτηση;
                    </div>
                    <ul className="buttons1_5">
                        <li className="buttons-c1">
                            <a href="/student/certificates/new-certificate/personal_info/confirmation/end/done"
                               className="cancel-p">Άκυρο</a>
                            <a onClick={(e)=>nulifyCert(e)} className="confirm">Αναίρεση</a>
                        </li>
                    </ul>
                </div>
            </div>}

        </div>

    )

}


export default StudentCert1_5