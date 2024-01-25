import React, {Component, useEffect, useState} from "react";
import './StudentCert.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, query, where, orderBy} from "firebase/firestore";
import {db} from "../../config/firebase_config";
import Pdf from '../../../files/certificate.pdf';
import print from "print-js";

function StudentCert() {

    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const user = Auth.getUser();
    const [cert, setCerts] = useState([]);

    useEffect(() => {
        async function fetchCerts()
        {
            const db_ref = collection(db, 'certificates');
            const q = query(db_ref, where('username', '==', user.username), orderBy("date", "desc"));
            const docs = await getDocs(q);
            const data = [];
            docs.forEach((doc)=> {
                let temp = "";
                switch (doc.data().type) {
                    case 1:
                        temp = "Φοιτητικής Ιδιότητας"
                        break;
                    case 2:
                        temp = "Φορολογικής Χρήσης"
                        break;
                    case 3:
                        temp = "Αναλυτικής βαθμολογίας με προβιβάσιμους"
                        break;
                    case 4:
                        temp = "Στρατολογικής Χρήσης (Συνοπτικό)"
                        break;
                    case 5:
                        temp = "Στρατολογικής Χρήσης (Αναλυτικό)"
                        break;
                    default:
                        temp = "Άγνωστο"
                        break;
                }
                data.push({date: doc.data().date.toDate().toDateString(), type: temp, state: doc.data().state});
                setCerts(data);
            })
        }
        if(isLogged)
            fetchCerts();
    }, []);

    const handlePrint = (e) => {
        e.preventDefault();
        print(Pdf);
    }

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/student">Αρχική Φοιτητή</a></li>
                <li>Πιστοποιητικά</li>
            </ul>

            <a href="/student/certificates/new-certificate" className="new-button">Νεό Πιστοποιητικό</a>

            {!isLogged && <div className="container">
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
                        <a href="#popup-pr" className="col col-5">Εκτύπωση</a>
                    </li>
                    <li className="table-row">
                        <div className="col col-1" data-label="date">00-00-0000</div>
                        <div className="col col-2" data-label="type">ΧΧΧΧΧΧΧΧ</div>
                        <div className="col col-3" data-label="state">ΚΚΚΚΚΚΚΚ</div>
                        <a href="#" className="col col-4">Προβολή</a>
                        <a href="#popup-pr" className="col col-5">Εκτύπωση</a>
                    </li>
                </ul>
            </div>}

            {isLogged && <div className="container">
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">Ημερομηνία</div>
                        <div className="col col-2">Τύπος Αίτησης</div>
                        <div className="col col-3">Κατάσταση</div>
                        <div className="col col-4"></div>
                        <div className="col col-5"></div>
                    </li>
                    {cert.map((c) => {
                        return (
                            <li className="table-row">
                                <div className="col col-1" data-label="date">{c.date}</div>
                                <div className="col col-2" data-label="type">{c.type}</div>
                                {c.state === "on_hold" && <div className="col col-3" data-label="state">Αναμονή</div>}
                                {c.state === "rejected" && <div className="col col-3" data-label="state">Απόρριψη</div>}
                                {c.state === "accepted" && <div className="col col-3" data-label="state">Αποδοχή</div>}
                                {c.state !== "accepted" && <div className="col col-4-alt"></div>}
                                {c.state === "accepted" && <a href={Pdf} target={"_blank"} className="col col-4">Προβολή</a>}
                                {c.state === "accepted" && <a href="#popup-pr" className="col col-5" onClick={handlePrint}>Εκτύπωση</a>}
                            </li>
                        )
                    })}
                </ul>
            </div>}

            <details className="dropdown-c">
                <summary role="button">
                    <a className="button-c">Κατάσταση Αίτησης</a>
                </summary>
                <ul>
                    <li><a href="#">Εγκεκριμένη</a></li>
                    <li><a href="#">Σε Εκκρεμότητα</a></li>
                    <li><a href="#">Απορριφθείσα</a></li>
                    <li><a href="#">Ακυρωμένη</a></li>
                </ul>
            </details>

            <details className="dropdown1-c">
                <summary role="button">
                    <a className="button1-c">Ταξινόμηση κατά</a>
                </summary>
                <ul>
                    <li><a href="#">Πιο Πρόσφατα</a></li>
                    <li><a href="#">Λιγότερο πρόσφατα</a></li>
                </ul>
            </details>

            <div id="popup-pr" className="overlay">
                <div className="popup">
                    <div className="content">
                        Το πιστοποιητικό σας αποθηκεύτηκε με επιτυχία!
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/student/certificates"
                               className="confirm">OK</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )

}


export default StudentCert