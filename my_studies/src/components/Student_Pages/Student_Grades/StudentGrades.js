import React, {Component} from "react";
import './StudentGrades.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";

class StudentGrades extends Component {

    render() {
        return (
            <div>
                <Sidebar/>

                <ul className="breadcrumb">
                    <li><a href="/#">Αρχική Μαθητή</a></li>
                    <li>Βαθμολογίες</li>
                </ul>

                <details className="dropdown">
                    <summary role="button">
                        <a className="button">Κατηγορίες</a>
                    </summary>
                    <ul>
                        <li><a href="#">Περασμένα</a></li>
                        <li><a href="#">Κομμένα</a></li>
                        <li><a href="#">Γενικής Παιδείας</a></li>
                        <li><a href="#">Κατεύθυνσης Α</a></li>
                        <li><a href="#">Κατεύθυνσης Β</a></li>
                        <li><a href="#">Υποχρεωτικά</a></li>
                        <li><a href="#">Προαιρετικά</a></li>
                        <li><a href="#">Κατ' επιλογή υποχρεωτικά</a></li>
                    </ul>
                </details>

                <details className="dropdown1">
                    <summary role="button">
                        <a className="button1">Ταξινόμηση κατά</a>
                    </summary>
                    <ul>
                        <li><a href="#">Πιο Πρόσφατα</a></li>
                        <li><a href="#">Λιγότερο πρόσφατα</a></li>
                    </ul>
                </details>

            </div>

        )
    }

}


export default StudentGrades