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

                <table className="table-gr">
                    <tr>
                        <th>Κωδικός Μαθήματος</th>
                        <th>Τίτλος Μαθήματος</th>
                        <th>Βαθμός</th>
                    </tr>
                    <tr>
                        <td>000000</td>
                        <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                        <td>Χ</td>
                    </tr>
                    <tr>
                        <td>111111</td>
                        <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                        <td>Χ</td>
                    </tr>
                </table>

                <ul className="dropdowns">
                    <li className="drop-buttons">
                        <details className="dropdown">
                            <summary role="button">
                                <a className="button">Κατηγορίες</a>
                            </summary>

                            {/*<div className="check-buttons">
                        <label><input type="checkbox" name="check"/> Περασμένα</label>
                        <label><input type="checkbox" name="check"/> Κομμένα</label>
                        <label><input type="checkbox" name="check"/> Γενικής Παιδείας</label>
                        <label><input type="checkbox" name="check"/> Κατεύθυνσης Α</label>
                        <label><input type="checkbox" name="check"/> Κατεύθυνσης Β</label>
                        <label><input type="checkbox" name="check"/> Υποχρεωτικά</label>
                        <label><input type="checkbox" name="check"/> Προαιρετικά</label>
                        <label><input type="checkbox" name="check"/> Κατ' επιλογή υποχρεωτικά</label>
                    </div>*/}

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

                <a href="#popup-pr" className="print">Εκτύπωση</a>

                <div id="popup-pr" className="overlay">
                    <div className="popup">
                        <div className="content">
                            Οι βαθμολογίες σας αποθηκεύτηκαν με επιτυχία!
                        </div>
                        <ul className="buttons1">
                            <li className="buttons-c1">
                                <a href="/grades"
                                   className="confirm">OK</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        )
    }

}


export default StudentGrades