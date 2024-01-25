import React, { useState } from "react";
import "./LoginWindow.css";
import {FaUser, FaLock, FaUnlock} from 'react-icons/fa';
import { Button } from 'primereact/button';
import {getFirestore, collection, query, where, getDocs} from "firebase/firestore";
import {useAuth} from "../Auth/AuthContext";
import {db} from "../config/firebase_config";
import {useNavigate} from "react-router-dom";
const LoginWindow = ({active}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [logState, setLogState] = useState(active);
    const [occ, SetOcc] = useState("");
    const Auth = useAuth()
    const navigate = useNavigate();

    const onButtonClick = async () => {
        async function fetchUser()
        {
            const db_ref = collection(db, 'user');
            const q = query(db_ref, where('username', '==', username), where('password', '==', password));
            const docs = await getDocs(q);
            const data = [];
            docs.forEach((doc) => {
                SetOcc(doc.data().type.toString());
            })
            if(docs.size === 0)
            {
                navigate('#popup-er');
                return;
            }
            if(occ === "student")
            {
                console.log("Entered student");
                docs.forEach((doc)=> {
                    data.push({id: doc.id, tk: doc.data().TK, address: doc.data().address, date_of_birth: doc.data().date_of_birth.toDate().toDateString(), email: doc.data().email,
                        father: doc.data().father, first_sign_in: doc.data().first_sign_in.toDate().toDateString(), mother: doc.data().mother, name: doc.data().name,
                        phone: doc.data().phone, semester: doc.data().semester, semester_first_signup: doc.data().semester_first_signup, surname: doc.data().surname,
                        type: doc.data().type, username: doc.data().username, year: doc.data().year});
                })
                Auth.userLogin(data[0]);
                setLogState(false);
                navigate(".");
            }
            else
            {
                console.log("Entered teacher");
                docs.forEach((doc)=> {
                    data.push({id: doc.id, tk: doc.data().TK, address: doc.data().address, date_of_birth: doc.data().date_of_birth.toDate().toDateString(), email: doc.data().email,
                        father: doc.data().father, first_sign_in: doc.data().first_sign_in.toDate().toDateString(), mother: doc.data().mother, name: doc.data().name,
                        phone: doc.data().phone, surname: doc.data().surname, type: doc.data().type, username: doc.data().username});
                })
                Auth.userLogin(data[0]);
                setLogState(false);
                navigate(".");
            }

        }
        await fetchUser();
    }

        return (
            <div>
                {!logState && <div className={"overlay-login"}>
                    <br/>
                    <div className={"mainContainer"}>
                        <div className="inputContainer">
                            <div className="input-group">
                            <span className="icon">
                              <FaUser />
                            </span>
                                <input
                                    value={username}
                                    placeholder="Όνομα Χρήστη"
                                    onChange={ev => setUsername(ev.target.value)}
                                    className="inputBox"
                                />
                            </div>
                        </div>
                        <br />
                        <div className="inputContainer">
                            <div className="input-group">
                                <span className="icon">
                                  <FaLock />
                                </span>
                                <input
                                    value={password}
                                    placeholder="Κωδικός"
                                    type="password" // Ensure the input type is set to "password" for password fields
                                    onChange={ev => setPassword(ev.target.value)}
                                    className="inputBox"
                                />
                            </div>
                        </div>
                        <br/>
                        <a href="https://account.di.uoa.gr/" target="_blank">Ξέχασες τον κωδικό σου;</a>
                        <br/>
                        <div className={"container_special"}>
                            <Button className="green-button-round" tooltip="Ασφαλής Σύνδεση: Χρησιμοποιείται εάν βρίσκεστε σε δημόσιο δίκτυο" tooltipOptions={{ position: 'bottom' , className: 'tooltipContainer', fontSize: '2rem', cursor: 'pointer'}} onClick={onButtonClick}>
                                <FaUnlock id={"icon1"}/>
                                <FaLock id={"icon2"}/>
                            </Button>
                            <input
                                className={"green-button"}
                                type="button"
                                onClick={onButtonClick}
                                value={"Σύνδεση"} />
                        </div>
                    </div>
                </div>}

                {logState && <div className={"overlay-login-checked"}>
                    <br/>
                    <div className={"mainContainer"}>
                        <div className="inputContainer">
                            <div className="input-group">
                            <span className="icon">
                              <FaUser />
                            </span>
                                <input
                                    value={username}
                                    placeholder="Όνομα Χρήστη"
                                    onChange={ev => setUsername(ev.target.value)}
                                    className="inputBox"
                                />
                            </div>
                        </div>
                        <br />
                        <div className="inputContainer">
                            <div className="input-group">
                                <span className="icon">
                                  <FaLock />
                                </span>
                                <input
                                    value={password}
                                    placeholder="Κωδικός"
                                    type="password" // Ensure the input type is set to "password" for password fields
                                    onChange={ev => setPassword(ev.target.value)}
                                    className="inputBox"
                                />
                            </div>
                        </div>
                        <br/>
                        <a href="https://account.di.uoa.gr/" target="_blank">Ξέχασες τον κωδικό σου;</a>
                        <br/>
                        <div className={"container_special"}>
                            <Button className="green-button-round" tooltip="Ασφαλής Σύνδεση: Χρησιμοποιείται εάν βρίσκεστε σε δημόσιο δίκτυο" tooltipOptions={{ position: 'bottom' , className: 'tooltipContainer', fontSize: '2rem', cursor: 'pointer'}} onClick={onButtonClick}>
                                <FaUnlock id={"icon1"}/>
                                <FaLock id={"icon2"}/>
                            </Button>
                            <input
                                className={"green-button"}
                                type="button"
                                onClick={onButtonClick}
                                value={"Σύνδεση"} />
                        </div>
                    </div>
                </div>}

                <div id="popup-er" className="overlay">
                    <div className="popup">
                        <div className="content">
                            Κάποιο από τα στοιχεία σας ήταν λανθασμένο, παρακαλώ ξαναπροσπαθήστε.
                        </div>
                        <ul className="buttons1">
                            <li className="buttons-c1">
                                <a href="/"
                                   className="confirm">OK</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );

};

export default LoginWindow;