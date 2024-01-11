import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginWindow.css";
import {FaUser, FaLock, FaUnlockAlt, FaUnlock} from 'react-icons/fa';
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';
import ImageCarousel from "./ImageCarousel";
// import Tooltip, { tooltipClasses, TooltipProps} from "@mui/material/Tooltip";
// import {styled, Typography} from "@mui/material";
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const LoginWindow = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    // const handleMouseEnter = () => {
    //     setTooltipVisible(true);
    // };
    //
    // const handleMouseLeave = () => {
    //     setTooltipVisible(false);
    // };
    //
    // const navigate = useNavigate();

    const onButtonClick = () => {
        // You'll update this function later...
    }

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // };

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
                    {/*<br />*/}
                    <a href="https://account.di.uoa.gr/" target="_blank">Ξέχασες τον κωδικό σου;</a>
                    <br/>
                    <div className={"container_special"}>
                        <Button className="green-button-round" tooltip="Ασφαλής Σύνδεση: Χρησιμοποιείται εάν βρίσκεστε σε δημόσιο δίκτυο" tooltipOptions={{ position: 'bottom' , className: 'tooltipContainer', fontSize: '2rem', cursor: 'pointer'}}>
                            <FaUnlock id={"icon1"}/>
                            <FaLock id={"icon2"}/>
                        </Button>
                        {isTooltipVisible && <div className="tooltip"><p>This is pop-up text</p></div>}
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