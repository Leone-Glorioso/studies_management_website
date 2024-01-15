import React, { useState } from "react";
import "./LoginWindow.css";
import {FaUser, FaLock, FaUnlockAlt, FaUnlock} from 'react-icons/fa';
import { Button } from 'primereact/button';
import { collection, query, where, getDocs , and} from "firebase/firestore";
import {db} from "../../config/firebase_config";

async function getUserLogin({username, password})
{
    const db_ref = collection(db, 'user');
    const q = query(db_ref,
        and(
            where('username', '==', username),
            where('password', '==', password)
        ));
    const docs = await getDocs(q);
    const data = [];
    docs.forEach((doc)=> {
        data.push({id: doc.id, ...doc.data()});
    })
    return data;
}

const LoginWindow = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [usernameError, setUsernameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [user, setUser] = useState({})

    const onButtonClick = () => {
        async function fetchUser()
        {
            const temp = await getUserLogin({email: username, password});
            setUser(temp[0]);
        }
        fetchUser();
        console.log(user);
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
                        <label className="errorLabel">{usernameError}</label>
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
                        <label className="errorLabel">{passwordError}</label>
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