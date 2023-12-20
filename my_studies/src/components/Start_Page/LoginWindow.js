import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginWindow.css";
import { FaUser, FaLock } from 'react-icons/fa';

const LoginWindow = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const navigate = useNavigate();

    const onButtonClick = () => {
        // You'll update this function later...
    }

        return (
            <div className={"mainContainer"}>
                <div className="inputContainer">
                    <div className="input-group">
                    <span className="icon">
                      <FaUser />
                    </span>
                        <input
                            value={email}
                            placeholder="Όνομα Χρήστη"
                            onChange={ev => setEmail(ev.target.value)}
                            className="inputBox"
                        />
                    </div>
                    <label className="errorLabel">{emailError}</label>
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
                <br />
                <div className={"container"}>
                    <button className="round-button">
                        <span className="lock-icon">&#128274;</span>
                    </button>
                    <input
                        className={"green-button"}
                        type="button"
                        onClick={onButtonClick}
                        value={"Σύνδεση"} />
                </div>
            </div>

        );

};

export default LoginWindow;