import React, {Component} from "react";
import './StudentCert.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";

class StudentCert extends Component {

    render() {
        return (
            <div>
                <Sidebar/>

                <ul className="breadcrumb">
                    <li><a href="/#">Αρχική Μαθητή</a></li>
                    <li>Πιστοποιητικά</li>
                </ul>

                <a href="/certificates/new-certificate" className="new-button">Νεό Πιστοποιητικό</a>

                <div className="container">
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-1">Ημερομηνία</div>
                            <div className="col col-2">Τύπος Αίτησης</div>
                            <div className="col col-3">Κατάσταση</div>
                            <div className="col col-4"></div>
                            <div className="col col-5"></div>
                        </li>
                        <li className="table-row">
                            <div className="col col-1" data-label="date">00-00-0000</div>
                            <div className="col col-2" data-label="type">ΧΧΧΧΧΧΧΧ</div>
                            <div className="col col-3" data-label="state">ΚΚΚΚΚΚΚΚ</div>
                            <a href="#" className="col col-4">Προβολή</a>
                            <a href="#" className="col col-5">Εκτύπωση</a>
                        </li>
                        <li className="table-row">
                            <div className="col col-1" data-label="date">00-00-0000</div>
                            <div className="col col-2" data-label="type">ΧΧΧΧΧΧΧΧ</div>
                            <div className="col col-3" data-label="state">ΚΚΚΚΚΚΚΚ</div>
                            <a href="#" className="col col-4">Προβολή</a>
                            <a href="#" className="col col-5">Εκτύπωση</a>
                        </li>
                    </ul>
                </div>

                <details className="dropdown">
                    <summary role="button">
                        <a className="button">Κατάσταση Αίτησης</a>
                    </summary>
                    <ul>
                        <li><a href="#">Εγκεκριμένη</a></li>
                        <li><a href="#">Σε Εκκρεμότητα</a></li>
                        <li><a href="#">Απορριφθείσα</a></li>
                        <li><a href="#">Ακυρωμένη</a></li>
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


export default StudentCert