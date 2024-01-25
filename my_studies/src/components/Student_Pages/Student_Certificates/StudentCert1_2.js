import React, {Component} from "react";
import './StudentCert1_2.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {Prof2} from "../Student_Profile/ProfItems";
import {useAuth} from "../../Auth/AuthContext";

function StudentCert1_2() {

    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const user = Auth.getUser();
    let Prof2_logged = []

    const Prof2 = [
        {
            cName: "prof-info-certs",
            title: "Όνομα"
        },
        {
            cName: "prof-info-certs",
            title: "Επίθετο"
        },
        {
            cName: "prof-info-certs",
            title: "Όνομα πατέρα"
        },
        {
            cName: "prof-info-certs",
            title: "Όνομα μητέρας"
        },
        {
            cName: "prof-info-certs",
            title: "Ημερομηνία γέννησης"
        },
    ]
    if(isLogged)
        Prof2_logged = [
            {
                cName: "prof-info-certs",
                title: "Όνομα: ",
                text: user.name
            },
            {
                cName: "prof-info-certs",
                title: "Επίθετο: ",
                text: user.surname
            },
            {
                cName: "prof-info-certs",
                title: "Όνομα πατέρα: ",
                text: user.father
            },
            {
                cName: "prof-info-certs",
                title: "Όνομα μητέρας: ",
                text: user.mother
            },
            {
                cName: "prof-info-certs",
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

            <ul className="progress-bar2">
                <li className="table-header">
                    <div className="step1">1</div>
                    <div className="step2">2</div>
                    <div className="step3">3</div>
                    <div className="step4">4</div>
                </li>
            </ul>

            <p className="text">Επιβεβαιωσε τα προσωπικά σου στοιχεία:</p>

            {!isLogged && <div className="pers-info-certs">
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
                </ul>
            </div>}
            {isLogged && <div className="pers-info-logged-certs">
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
                </ul>
            </div>}

            <ul className="buttons1_2">
                <li className="buttons-c">
                    <a href="/student/certificates/new-certificate" className="prev">Προηγούμενο</a>
                    <a href="/student/certificates/" className="cancel-p">Άκυρο</a>
                    <a href="/student/certificates/new-certificate/personal_info/confirmation" className="edit">Επεξεργασία</a>
                    <a href="/student/certificates/new-certificate/personal_info/confirmation/end" className="next">Επόμενο</a>
                </li>
            </ul>

        </div>

    )

}


export default StudentCert1_2