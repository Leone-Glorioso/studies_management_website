import React, {Component} from "react";
import './StudentDhlwseis2.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";

class StudentDhlwseis2 extends Component {

    render() {
        return (
            <div>
                <Sidebar/>

                <ul className="breadcrumb">
                    <li><a href="/student">Αρχική Φοιτητή</a></li>
                    <li><a href="/student/forms">Δηλώσεις</a></li>
                    <li>Νέα Δήλωση</li>
                </ul>

                <p className="text-d">Η δήλωσή σου υποβλήθηκε με επιτυχία!</p>

                <div className="buttons2-d">
                    <a href="#popup2" className="undo">Αναίρεση</a>
                    <a href="/student" className="home">Επιστροφή στην αρχική</a>
                    <a href="#" className="last-form">Επισκόπηση της δήλωσης</a>
                </div>

                <div className="message">
                    <div className="text2">Τι κάνω τώρα;</div>
                    <div className="text1">Μέχρι τη λήξη της προθεσμίας μπορείς να υποβάλεις όσες δηλώσεις θέλεις. Θα ληφθεί υπόψιν μόνο η τελευταία.
                    </div>
                </div>

                <div id="popup2" className="overlay">
                    <div className="popup">
                        <div className="content">
                            Σίγουρα θέλετε να αναιρέσετε την δήλωση;
                        </div>
                        <ul className="buttons1">
                            <li className="buttons-c1">
                                <a href="/student/form/new-form/done" className="cancel-p">Άκυρο</a>
                                <a href="/student/form/new-form" className="confirm">Αναίρεση</a>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>

        )
    }

}


export default StudentDhlwseis2