import React, { useState } from "react";
import "./LoginWindow.css";
import {FaUser, FaLock, FaUnlock} from 'react-icons/fa';
import { Button } from 'primereact/button';
import {getFirestore, collection, query, where, getDocs} from "firebase/firestore";
import {useAuth} from "../Auth/AuthContext";
import {db} from "../config/firebase_config";
import {useNavigate} from "react-router-dom";
const LoginWindow = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false);
    const Auth = useAuth()
    const navigate = useNavigate();

    const onButtonClick = async () => {
        async function fetchUser()
        {
            const db_ref = collection(db, 'user');
            const q = query(db_ref, where('username', '==', username), where('password', '==', password));
            const docs = await getDocs(q);
            const data = [];
            docs.forEach((doc)=> {
                data.push({id: doc.id, ...doc.data()});
            })
            if(data.length === 0)
            {
                return;
            }
            Auth.userLogin(data[0]);
            navigate('/student');
        }
        await fetchUser();
    }

        return (
            <div className={"bgContainer"}>
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
            </div>
        );

};

export default LoginWindow;