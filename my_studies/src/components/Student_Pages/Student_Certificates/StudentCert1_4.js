import React, {Component, useEffect, useState} from "react";
import './StudentCert1_4.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";
import {collection, doc, Timestamp, setDoc,addDoc} from "firebase/firestore";
import {db} from "../../config/firebase_config";
import {useNavigate} from "react-router-dom";

function StudentCert1_4() {

    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const user = Auth.getUser();
    const navigate = useNavigate();
    const [cert, setCert] = useState('');
    let Prof2_logged = []

    useEffect(() => {
        switch (Auth.getType()){
            case 1:
                setCert("Φοιτητικής Ιδιότητας");
                break;
            case 2:
                setCert("Φορολογικής Χρήσης");
                break;
            case 3:
                setCert("Αναλυτικής βαθμολογίας με προβιβάσιμους");
                break;
            case 4:
                setCert("Στρατολογικής Χρήσης (Συνοπτικό)");
                break;
            case 5:
                setCert("Στρατολογικής Χρήσης (Αναλυτικό)");
                break;
            default:
                setCert("Αγνωστο");
                break;
        }
    }, []);

    const Prof2 = [
        {
            cName: "prof-info-certs3",
            title: "Όνομα"
        },
        {
            cName: "prof-info-certs3",
            title: "Επίθετο"
        },
        {
            cName: "prof-info-certs3",
            title: "Όνομα πατέρα"
        },
        {
            cName: "prof-info-certs3",
            title: "Όνομα μητέρας"
        },
        {
            cName: "prof-info-certs3",
            title: "Ημερομηνία γέννησης"
        },
    ]
    if(isLogged && user.type === 'student')
         Prof2_logged = [
            {
                cName: "prof-info-certs3",
                title: "Όνομα: ",
                text: user.name
            },
            {
                cName: "prof-info-certs3",
                title: "Επίθετο: ",
                text: user.surname
            },
            {
                cName: "prof-info-certs3",
                title: "Όνομα πατέρα: ",
                text: user.father
            },
            {
                cName: "prof-info-certs3",
                title: "Όνομα μητέρας: ",
                text: user.mother
            },
            {
                cName: "prof-info-certs3",
                title: "Ημερομηνία γέννησης: ",
                text: user.date_of_birth
            },
        ]

    const onNotLogged = () => {
        Auth.setWindow(true);
    }

    const submitCert = (e) => {
        async function submit_cert()
        {
            const doc_ref = await addDoc(collection(db, 'certificates'), {
                username: user.username,
                state: "on_hold",
                type: Auth.getType(),
                date: Timestamp.now()
            });
            Auth.setCurrent(doc_ref.id);
            navigate("/student/certificates/new-certificate/personal_info/confirmation/end/done");
        }
        if(isLogged && user.type === 'student' && Auth.getType() !== 0)
        {
            submit_cert();
            Auth.setType(0);
        }
    }

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/student">Αρχική Φοιτητή</a></li>
                <li><a href="/student/certificates">Πιστοποιητικά</a></li>
                <li>Νέο Πιστοποιητικό</li>
            </ul>

            <ul className="progress-bar-t4">
                <li className="table-header">
                    <div className="step1">Επιλογή Πιστοποιητικού</div>
                    <div className="step2">Έλεγχος Στοιχείων</div>
                    <div className="step3">Επιβεβαίωση Τελικής δήλωσης</div>
                    <div className="step4">Επιβεβαίωση ολοκλήρωσης</div>
                </li>
            </ul>

            <ul className="progress-bar4">
                <li className="table-header">
                    <div className="step1">1</div>
                    <div className="step2">2</div>
                    <div className="step3">3</div>
                    <div className="step4">4</div>
                </li>
            </ul>

            <p className="text-4">Τελική αίτηση:</p>

            {(!isLogged || user.type !== 'student') && <div className="pers-info-certs3">
                <ul className="info">
                    {Prof2.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    <li>
                        <a className={"prof-info-certs3"}>
                            Τύπος Πιστοποιητικού: {cert}
                        </a>
                    </li>
                </ul>
            </div>}
            {isLogged && user.type === 'student' && <div className="pers-info-logged-certs3">
                <ul className="info">
                    {Prof2_logged.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName}>
                                    {item.title + " " + item.text}
                                </a>
                            </li>
                        )
                    })}
                    <li>
                        <a className={"prof-info-certs3"}>
                            Τύπος Πιστοποιητικού: {cert}
                        </a>
                    </li>
                </ul>
            </div>}

            <ul className="buttons1_4">
                <li className="buttons-c">
                    <a href="/student/certificates/new-certificate/personal_info" className="prev">Προηγούμενο</a>
                    <a href="/student/certificates/" className="cancel">Άκυρο</a>
                    {!isLogged && <a onClick={onNotLogged} className="edit">Επιβεβαίωση</a>}
                    {isLogged && user.type === 'student' && <a href="#popup1" className="edit">Επιβεβαίωση</a>}
                    {isLogged && user.type !== 'student' && <button href="#popup1" className="edit-disabled" disabled={true}>Επιβεβαίωση</button>}
                </li>
            </ul>

            {(!isLogged || user.type !== 'student') && <div id="popup1" className="overlay">
                <div className="popup">
                    <div className="content">
                        Σίγουρα θέλετε να υποβάλετε την αίτηση;
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/student/certificates/new-certificate/personal_info/confirmation/end" className="cancel-p">Άκυρο</a>
                            <a href="/student/certificates/new-certificate/personal_info/confirmation/end/done" className="confirm">Επιβεβαίωση</a>
                        </li>
                    </ul>
                </div>
            </div>}

            {isLogged && user.type === 'student' &&  <div id="popup1" className="overlay">
                <div className="popup">
                    <div className="content">
                        Σίγουρα θέλετε να υποβάλετε την αίτηση;
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/student/certificates/new-certificate/personal_info/confirmation/end" className="cancel-p">Άκυρο</a>
                            <a onClick={(e)=> submitCert(e)} className="confirm">Επιβεβαίωση</a>
                        </li>
                    </ul>
                </div>
            </div>}

        </div>

    )

}


export default StudentCert1_4