import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCeuRp94SvKugi1Sw_cr0EB51TH8CtFtcQ",
    authDomain: "mystudies-212fe.firebaseapp.com",
    projectId: "mystudies-212fe",
    storageBucket: "mystudies-212fe.appspot.com",
    messagingSenderId: "565208881144",
    appId: "1:565208881144:web:2548dcafa6a0e46d69a80d",
    measurementId: "G-P9G2CZPJVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};