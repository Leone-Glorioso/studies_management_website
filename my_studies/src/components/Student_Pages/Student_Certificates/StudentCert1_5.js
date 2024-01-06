import React, {Component} from "react";
import './StudentCert1_5.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";

class StudentCert1_5 extends Component {

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

                <ul className="progress-bar5">
                    <li className="table-header">
                        <div className="step1">1</div>
                        <div className="step2">2</div>
                        <div className="step3">3</div>
                        <div className="step4">4</div>
                    </li>
                </ul>

                <p className="text">Η αίτησή σου υποβλήθηκε με επιτυχία!</p>

                <ul className="buttons2">
                    <li className="buttons-c">
                        <a href="#popup2" className="undo">Αναίρεση</a>
                        <a href="/" className="home">Επιστροφή στην αρχική</a>
                    </li>
                </ul>

                <div className="message">
                    <div className="text2">Τι κάνω τώρα;</div>
                    <div className="text1">Μόλις η αίτησή σου εγκριθεί θα λάβεις ειδοποιητικό μήνυμα. Θα μπορείς να δεις
                        την αίτησή σου μέσα από το προφίλ σου.
                    </div>
                </div>

                <div id="popup2" className="overlay">
                    <div className="popup">
                        <div className="content">
                            Σίγουρα θέλετε να αναιρέσετε την αίτηση;
                        </div>
                        <ul className="buttons1_5">
                            <li className="buttons-c1">
                                <a href="/certificates/new-certificate/personal_info/confirmation/end/done"
                                   className="cancel-p">Άκυρο</a>
                                <a href="/certificates/new-certificate/" className="confirm">Αναίρεση</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        )
    }

}


export default StudentCert1_5