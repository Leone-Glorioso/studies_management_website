import React, { useState } from "react";
import "./StartInfo.css";
import {FaUser, FaLock, FaUnlock} from 'react-icons/fa';
import { Button } from 'primereact/button';
import {getFirestore, collection, query, where, getDocs} from "firebase/firestore";
import {useAuth} from "../Auth/AuthContext";
import {db} from "../config/firebase_config";
import {useNavigate} from "react-router-dom";
const StartInfo = (props) => {

    return (
        <div className={"bgContainer"}>
            <ul className="students">
                <p className="head">Είσαι φοιτητής;</p>
                <p>Δες πληροφορίες σχετικά με:</p>
                <li>Μαθήματά</li>
                <li>Δηλώσεις</li>
                <li>Βαθμολογίες</li>
                <li>Πιστοποιητικά</li>
            </ul>

            <ul className="teachers">
                <p className="head">Είσαι καθηγητής;</p>
                <p>Δες πληροφορίες σχετικά με:</p>
                <li>Μαθήματά</li>
                <li>Βαθμολογίες</li>
            </ul>

            <ul className="grammateia">
                <p className="head">Είσαι μέλος γραμματείας;</p>
                <p>Δες πληροφορίες σχετικά με:</p>
                <li>Φοιτητές</li>
                <li>Εκπαιδευτές</li>
                <li>Μαθήματα</li>
                <li>Δηλώσεις</li>
                <li>Αιτήσεις</li>
            </ul>


        </div>
    );

};

export default StartInfo;