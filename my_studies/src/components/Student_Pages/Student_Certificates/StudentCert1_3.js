import React, {Component, useEffect, useState} from "react";
import './StudentCert1_3.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";

function StudentCert1_3() {

    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const user = Auth.getUser();
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
            cName: "prof-info-certs2",
            title: "Όνομα"
        },
        {
            cName: "prof-info-certs2",
            title: "Επίθετο"
        },
        {
            cName: "prof-info-certs2",
            title: "Όνομα πατέρα"
        },
        {
            cName: "prof-info-certs2",
            title: "Όνομα μητέρας"
        },
        {
            cName: "prof-info-certs2",
            title: "Ημερομηνία γέννησης"
        },
    ]

    if(isLogged)
         Prof2_logged = [
            {
                cName: "prof-info-certs2",
                title: "Όνομα: ",
                text: user.name
            },
            {
                cName: "prof-info-certs2",
                title: "Επίθετο: ",
                text: user.surname
            },
            {
                cName: "prof-info-certs2",
                title: "Όνομα πατέρα: ",
                text: user.father
            },
            {
                cName: "prof-info-certs2",
                title: "Όνομα μητέρας: ",
                text: user.mother
            },
            {
                cName: "prof-info-certs2",
                title: "Ημερομηνία γέννησης: ",
                text: user.date_of_birth
            },
        ]

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/student">Αρχική Φοιτητή</a></li>
                <li><a href="/student/certificates">Πιστοποιητικά</a></li>
                <li>Νέο Πιστοποιητικό</li>
            </ul>

            <ul className="progress-bar">
                <li className="table-header">
                    <div className="step1">Επιλογή Πιστοποιητικού</div>
                    <div className="step2">Έλεγχος Στοιχείων</div>
                    <div className="step3">Επιβεβαίωση Τελικής δήλωσης</div>
                    <div className="step4">Επιβεβαίωση ολοκλήρωσης</div>
                </li>
            </ul>

            <ul className="progress-bar3">
                <li className="table-header">
                    <div className="step1">1</div>
                    <div className="step2">2</div>
                    <div className="step3">3</div>
                    <div className="step4">4</div>
                </li>
            </ul>

            <p className="text">Επιβεβαιωσε τα προσωπικά σου στοιχεία:</p>

            {!isLogged && <div className="pers-info-certs2">
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
                        <a className={"prof-info-certs2"}>
                            "Τύπος Πιστοποιητικού": {cert}
                        </a>
                    </li>
                </ul>
            </div>}
            {isLogged && <div className="pers-info-logged-certs2">
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
                        <a className={"prof-info-certs2"}>
                            "Τύπος Πιστοποιητικού": {cert}
                        </a>
                    </li>
                </ul>
            </div>}

            <ul className="buttons1_3">
                <li className="buttons-c">
                    <a href="/student/certificates/new-certificate/personal_info" className="cancel">Άκυρο</a>
                    <a href="/student/certificates/new-certificate/personal_info" className="edit">Αποθήκευση</a>
                </li>
            </ul>

        </div>

    )

}


export default StudentCert1_3