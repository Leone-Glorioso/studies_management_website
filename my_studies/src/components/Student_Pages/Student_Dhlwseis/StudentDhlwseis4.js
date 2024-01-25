import React, {Component} from "react";
import './StudentDhlwseis4.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";

class StudentDhlwseis4 extends Component {

    render() {
        return (
            <div>
                <Sidebar/>

                <ul className="breadcrumb">
                    <li><a href="/student">Αρχική Φοιτητή</a></li>
                    <li><a href="/student/forms">Δηλώσεις</a></li>
                    <li>Οριστικοποιημένες</li>
                </ul>

                <div className="container">
                    <ul className="responsive-table-df">
                        <li className="table-header">
                            <div className="col col-1">Ημερομηνία</div>
                            <div className="col col-2">Ώρα</div>
                            <div className="col col-3"></div>
                        </li>
                        <li className="table-row">
                            <div className="col col-1" data-label="date">00-00-0000</div>
                            <div className="col col-2" data-label="type">ΧΧΧΧΧΧΧΧ</div>
                            <a href="#popup-ep" className="col col-3">Προβολή</a>
                        </li>
                        <li className="table-row">
                            <div className="col col-1" data-label="date">00-00-0000</div>
                            <div className="col col-2" data-label="type">ΧΧΧΧΧΧΧΧ</div>
                            <a href="#popup-ep" className="col col-3">Προβολή</a>
                        </li>
                    </ul>
                </div>

                <div id="popup-ep" className="overlay">
                    <div className="popup-ep-fs">
                        <div className="content">
                            Η δήλωσή σας:
                            <table className="table-dhlfs">
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
                                <tr>
                                    <td>111111</td>
                                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                                    <td className="checkboxes"><input type="checkbox"/></td>
                                </tr>
                                <tr>
                                    <td>111111</td>
                                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                                    <td className="checkboxes"><input type="checkbox"/></td>
                                </tr>
                                <tr>
                                    <td>111111</td>
                                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                                    <td className="checkboxes"><input type="checkbox"/></td>
                                </tr>
                            </table>
                        </div>
                        <ul className="button-ok-fs">
                            <li className="buttons-c1">
                                <a href="/student/forms/final" className="confirm">OK</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        )
    }

}


export default StudentDhlwseis4