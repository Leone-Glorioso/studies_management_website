import React, {Component, useEffect, useState} from "react";
import './StudentProf.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {Prof1, Prof2, Prof3} from "./ProfItems";
import {useAuth} from "../../Auth/AuthContext";

function StudentProf() {

    const Auth = useAuth();
    const user = Auth.getUser();
    const isLogged = Auth.userIsAuthenticated();
    const [Prof1_logged, setProf1_Logged] = useState([]);
    const [Prof2_logged, setProf2_Logged] = useState([]);
    const [Prof3_logged, setProf3_Logged] = useState([]);

    // const Prof1_logged = [
    //     {
    //         cName: "prof-info",
    //         title: "Ημερομηνία πρώτης εγγραφής: ",
    //         text: user.first_sign_in
    //     },
    //     {
    //         cName: "prof-info",
    //         title: "Εξάμηνο φοίτησης: ",
    //         text: user.semester + "ο"
    //     },
    //     {
    //         cName: "prof-info",
    //         title: "Εξάμηνο πρώτης εγγραφής: ",
    //         text: user.semester_first_signup
    //     },
    //     {
    //         cName: "prof-info",
    //         title: "Ακαδημαϊκό έτος: ",
    //         text: user.year + "ο"
    //     },
    // ]
    //
    // const Prof2_logged = [
    //     {
    //         cName: "prof-info",
    //         title: "Όνομα πατέρα: ",
    //         text: user.father
    //     },
    //     {
    //         cName: "prof-info",
    //         title: "Όνομα μητέρας: ",
    //         text: user.mother
    //     },
    //     {
    //         cName: "prof-info",
    //         title: "Ημερομηνία γέννησης: ",
    //         text: user.date_of_birth
    //     },
    //     {
    //         cName: "prof-info",
    //         title: "Οικογενειακή κατάσταση: ",
    //         text: "Άγαμος"
    //     },
    // ]
    //
    // const Prof3_logged = [
    //     {
    //         cName: "prof-info",
    //         title: "Μόνιμη διεύθυνση κατοικίας: ",
    //         text: user.address
    //     },
    //     {
    //         cName: "prof-info",
    //         title: "Μόνιμη πόλη κατοικίας: ",
    //         text: "Αθήνα"
    //     },
    //     {
    //         cName: "prof-info",
    //         title: "ΤΚ μόνιμης κατοικίας: ",
    //         text: user.tk
    //     },
    //     {
    //         cName: "prof-info",
    //         title: "Τηλέφωνο μόνιμης κατοικίας: ",
    //         text: user.phone
    //     },
    //     {
    //         cName: "prof-info",
    //         title: "Προσωρινή διεύθυνση κατοικίας: ",
    //         text: "-"
    //     },
    //     {
    //         cName: "prof-info",
    //         title: "Προσωρινή πόλη κατοικίας: ",
    //         text: "-"
    //     },
    //     {
    //         cName: "prof-info",
    //         title: "ΤΚ προσωρινής κατοικίας: ",
    //         text: "-"
    //     },
    //     {
    //         cName: "prof-info",
    //         title: "Τηλέφωνο προσωρινής κατοικίας: ",
    //         text: "-"
    //     },
    //     {
    //         cName: "prof-info",
    //         title: "Διεύθυνση ηλεκτρονικού ταχυδρομείου: ",
    //         text: user.email
    //     },
    // ]

    useEffect(() => {
        if(isLogged){
            setProf1_Logged([
                {
                    cName: "prof-info",
                    title: "Ημερομηνία πρώτης εγγραφής: ",
                    text: user.first_sign_in
                },
                {
                    cName: "prof-info",
                    title: "Εξάμηνο φοίτησης: ",
                    text: user.semester + "ο"
                },
                {
                    cName: "prof-info",
                    title: "Εξάμηνο πρώτης εγγραφής: ",
                    text: user.semester_first_signup
                },
                {
                    cName: "prof-info",
                    title: "Ακαδημαϊκό έτος: ",
                    text: user.year + "ο"
                },
            ])

            setProf2_Logged([
                {
                    cName: "prof-info",
                    title: "Όνομα: ",
                    text: user.name
                },
                {
                    cName: "prof-info",
                    title: "Επίθετο: ",
                    text: user.surname
                },
                {
                    cName: "prof-info",
                    title: "Όνομα πατέρα: ",
                    text: user.father
                },
                {
                    cName: "prof-info",
                    title: "Όνομα μητέρας: ",
                    text: user.mother
                },
                {
                    cName: "prof-info",
                    title: "Ημερομηνία γέννησης: ",
                    text: user.date_of_birth
                },
                {
                    cName: "prof-info",
                    title: "Οικογενειακή κατάσταση: ",
                    text: "Άγαμος"
                },
            ])

            setProf3_Logged([
                {
                    cName: "prof-info",
                    title: "Μόνιμη διεύθυνση κατοικίας: ",
                    text: user.address
                },
                {
                    cName: "prof-info",
                    title: "Μόνιμη πόλη κατοικίας: ",
                    text: "Αθήνα"
                },
                {
                    cName: "prof-info",
                    title: "ΤΚ μόνιμης κατοικίας: ",
                    text: user.tk
                },
                {
                    cName: "prof-info",
                    title: "Τηλέφωνο μόνιμης κατοικίας: ",
                    text: user.phone
                },
                {
                    cName: "prof-info",
                    title: "Προσωρινή διεύθυνση κατοικίας: ",
                    text: "-"
                },
                {
                    cName: "prof-info",
                    title: "Προσωρινή πόλη κατοικίας: ",
                    text: "-"
                },
                {
                    cName: "prof-info",
                    title: "ΤΚ προσωρινής κατοικίας: ",
                    text: "-"
                },
                {
                    cName: "prof-info",
                    title: "Τηλέφωνο προσωρινής κατοικίας: ",
                    text: "-"
                },
                {
                    cName: "prof-info",
                    title: "Διεύθυνση ηλεκτρονικού ταχυδρομείου: ",
                    text: user.email
                },
            ])
        }
    }, []);

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/student">Αρχική Φοιτητή</a></li>
                <li>Προφίλ μαθητή</li>
            </ul>

            <a href="#" className="cert-button">Πιστοποιητικά</a>
            <p className="title1">Σχετικά με της σπουδές μου:</p>
            {!isLogged && <div className="Study-info">
                <ul className="info">
                    {Prof1.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>}
            {isLogged && <div className="Study-info-logged">
                <ul className="info">
                {Prof1_logged.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName}>
                                {item.title + " " + item.text}
                            </a>
                        </li>
                    )
                })}
                </ul>
            </div>}

            <p className="title2">Προσωπικά στοιχεία:</p>
            {!isLogged && <div className="pers-info">
                <ul className="info">
                    {Prof2.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>}
            {isLogged && <div className="pers-info-logged">
                <ul className="info">
                {Prof2_logged.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName}>
                                {item.title + " " + item.text}
                            </a>
                        </li>
                    )
                })}
                </ul>
            </div>}

            <p className="title3">Στοιχεία επικοινωνίας:</p>
            {!isLogged && <div className="com-info">
                <ul className="info">
                    {Prof3.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>}
            {isLogged && <div className="com-info-logged">
                <ul className="info">
                {Prof3_logged.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName}>
                                {item.title + " " + item.text}
                            </a>
                        </li>
                    )
                })}
                </ul>
            </div>}

        </div>

    )

}


export default StudentProf