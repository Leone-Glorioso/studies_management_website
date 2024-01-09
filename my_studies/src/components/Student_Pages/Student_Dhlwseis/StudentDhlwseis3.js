import React, {Component} from "react";
import './StudentDhlwseis3.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";

class StudentDhlwseis3 extends Component {

    render() {
        return (
            <div>
                <Sidebar/>

                <ul className="breadcrumb">
                    <li><a href="/#">Αρχική Μαθητή</a></li>
                    <li><a href="/forms">Δηλώσεις</a></li>
                    <li>Προσωρινά αποθηκευμένες</li>
                </ul>

                <div className="container">
                    <ul className="responsive-table-d">
                        <li className="table-header">
                            <div className="col col-1">Ημερομηνία</div>
                            <div className="col col-2">Ώρα</div>
                            <div className="col col-3"></div>
                            <div className="col col-4"></div>
                            <div className="col col-5"></div>
                        </li>
                        <li className="table-row">
                            <div className="col col-1" data-label="date">00-00-0000</div>
                            <div className="col col-2" data-label="type">ΧΧΧΧΧΧΧΧ</div>
                            <a href="#popup-d" className="col col-3">Διαγραφή</a>
                            <a href="#" className="col col-4">Προβολή</a>
                            <a href="#popup-pr-d" className="col col-5">Εκτύπωση</a>
                        </li>
                        <li className="table-row">
                            <div className="col col-1" data-label="date">00-00-0000</div>
                            <div className="col col-2" data-label="type">ΧΧΧΧΧΧΧΧ</div>
                            <a href="#popup-d" className="col col-3">Διαγραφή</a>
                            <a href="#" className="col col-4">Προβολή</a>
                            <a href="#popup-pr-d" className="col col-5">Εκτύπωση</a>
                        </li>
                    </ul>
                </div>

                <div id="popup-pr-d" className="overlay">
                    <div className="popup">
                        <div className="content">
                            Η δήλωσή σας αποθηκεύτηκε με επιτυχία!
                        </div>
                        <ul className="buttons1">
                            <li className="buttons-c1">
                                <a href="/forms/saved"
                                   className="confirm">OK</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="popup-d" className="overlay">
                    <div className="popup">
                        <div className="content">
                            Σίγουρα θέλετε να διαγράψετε τη δήλωση;
                        </div>
                        <ul className="buttons1">
                            <li className="buttons-c1">
                                <a href="/forms/saved" className="cancel-p">Άκυρο</a>
                                <a href="/forms/saved" className="delete">Διαγραφή</a>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>

        )
    }

}


export default StudentDhlwseis3