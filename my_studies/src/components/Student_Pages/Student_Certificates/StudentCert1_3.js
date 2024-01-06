import React, {Component} from "react";
import './StudentCert1_3.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";

class StudentCert1_3 extends Component {

    render() {
        return (
            <div>
                <Sidebar/>

                <ul className="breadcrumb">
                    <li><a href="/#">Αρχική Μαθητή</a></li>
                    <li><a href="/certificates">Πιστοποιητικά</a></li>
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



                <ul className="buttons1_3">
                    <li className="buttons-c">
                        <a href="/certificates/new-certificate/personal_info" className="cancel">Άκυρο</a>
                        <a href="/certificates/new-certificate/personal_info" className="edit">Αποθήκευση</a>
                    </li>
                </ul>

            </div>

        )
    }

}


export default StudentCert1_3