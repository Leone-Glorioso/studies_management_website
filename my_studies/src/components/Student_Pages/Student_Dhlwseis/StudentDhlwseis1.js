import React, {Component} from "react";
import './StudentDhlwseis1.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";

class StudentDhlwseis1 extends Component {

    render() {
        return (
            <div>
                <Sidebar/>

                <ul className="breadcrumb">
                    <li><a href="/student">Αρχική Μαθητή</a></li>
                    <li><a href="/student/forms">Δηλώσεις</a></li>
                    <li>Νέα Δήλωση</li>
                </ul>

                <div className="warning">Μπορείς να δηλώσεις μέχρι Χ μαθήματα!</div>

                <table className="table-dhl">
                    <tr>
                        <th>Κωδικός Μαθήματος</th>
                        <th>Τίτλος Μαθήματος</th>
                        <th>Δήλωση</th>
                    </tr>
                    <tr>
                        <td>000000</td>
                        <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                        <td className="checkboxes"><input type="checkbox"/></td>
                    </tr>
                    <tr>
                        <td>111111</td>
                        <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                        <td className="checkboxes"><input type="checkbox"/></td>
                    </tr>
                </table>

                <ul className="dropdowns-d">
                    <li className="drop-buttons">
                        <details className="dropdown">
                            <summary role="button">
                                <a className="button">Κατηγορίες</a>
                            </summary>

                            <ul>
                                <li><a href="#">Όλα</a></li>
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
                                <a className="button1">Ακαδημαϊκή Περίοδος</a>
                            </summary>
                            <ul>
                                <li><a href="#">2022-2023</a></li>
                                <li><a href="#">2023-2024</a></li>
                            </ul>
                        </details>

                        <details className="dropdown2">
                            <summary role="button">
                                <a className="button2">Εξάμηνο</a>
                            </summary>
                            <ul>
                                <li><a href="#">1ο</a></li>
                                <li><a href="#">2ο</a></li>
                                <li><a href="#">3ο</a></li>
                                <li><a href="#">4ο</a></li>
                                <li><a href="#">5ο</a></li>
                                <li><a href="#">6ο</a></li>
                                <li><a href="#">7ο</a></li>
                                <li><a href="#">8ο</a></li>
                            </ul>
                        </details>

                        <details className="dropdown3">
                            <summary role="button">
                                <a className="button3">Ταξινόμηση κατά</a>
                            </summary>
                            <ul>
                                <li><a href="#">Πιο Πρόσφατα</a></li>
                                <li><a href="#">Λιγότερο πρόσφατα</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>


                <div className="buttons-c">
                    <a href="#" className="cancel"> Άκυρο</a>
                    <a href="#" className="temp">Προσωρινή αποθήκευση</a>
                    <a href="/student/forms/new-form/done" className="submit">Οριστική υποβολή</a>
                </div>


            </div>

        )
    }

}


export default StudentDhlwseis1