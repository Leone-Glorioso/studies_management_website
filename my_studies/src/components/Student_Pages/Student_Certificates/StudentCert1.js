import React, {Component, useState} from "react";
import './StudentCert1.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";

function StudentCert1() {

    const Auth = useAuth();
    const [type, SetType] = useState(0);

    const handleRadioButton = (num) => {
        SetType(num);
    }

    const onContinue = (num) => {
        Auth.setType(num);
    }

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

            <ul className="progress-bar1">
                <li className="table-header">
                    <div className="step1">1</div>
                    <div className="step2">2</div>
                    <div className="step3">3</div>
                    <div className="step4">4</div>
                </li>
            </ul>

            <p className="text">Επέλεξε τον τύπο του πιστοποιητικού που θέλεις να εκδόσεις:</p>

            <div className="radio-buttons">
                <label><input type="radio" name="e" onChange={() => handleRadioButton(1)}/> Φοιτητικής Ιδιότητας</label>
                <label><input type="radio" name="e" onChange={() => handleRadioButton(2)}/> Φορολογικής Χρήσης</label>
                <label><input type="radio" name="e" onChange={() => handleRadioButton(3)}/> Αναλυτικής βαθμολογίας με προβιβάσιμους</label>
                <label><input type="radio" name="e" onChange={() => handleRadioButton(4)}/> Στρατολογικής Χρήσης (Συνοπτικό)</label>
                <label><input type="radio" name="e" onChange={() => handleRadioButton(5)}/> Στρατολογικής Χρήσης (Αναλυτικό)</label>
            </div>

            <ul className="buttons1_1">
                <li className="buttons-c">
                    <a href="/student/certificates/" className="prev">Προηγούμενο</a>
                    <a href="/student/certificates/" className="cancel">Άκυρο</a>
                    <a href="/student/certificates/new-certificate/personal_info" className="next" onClick={onContinue(type)}>Επόμενο</a>
                </li>
            </ul>

        </div>

    )

}


export default StudentCert1