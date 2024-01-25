import React, {useState} from 'react';
import './UniversalNavbar.css';
import {useAuth} from "../Auth/AuthContext";
import {
    FaChalkboardTeacher,
    FaGraduationCap,
    FaHome,
    FaLock, FaUnlock,
    FaUser,
    FaUserCircle,
    FaUserGraduate
} from "react-icons/fa";
import {BiHelpCircle} from "react-icons/bi";
import {IoClose, IoHelp, IoHelpCircle, IoHelpCircleOutline} from "react-icons/io5";
import {TbLogin, TbLogout} from "react-icons/tb";
import {Tooltip} from "primereact/tooltip";
import LoginWindow from "../Start_Page/LoginWindow";
import {useNavigate} from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../config/firebase_config";
import {Button} from "primereact/button";

function UniversalNavbar() {

    const Auth = useAuth()
    const isLogged = Auth.userIsAuthenticated()
    let activeLogin = Auth.getWindow()
    const setActiveLogin = Auth.setWindow
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [occ, SetOcc] = useState("");
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
                setActiveLogin(false);
                navigate(0);
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
                setActiveLogin(false);
                navigate(0);
            }

        }
        await fetchUser();
    }

    const onLoginClick = () => {
        setActiveLogin(true);
    }

    const onCloseClick = () => {
        setActiveLogin(false);
    }

    return (
        <div>

            <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"/>

                <nav className="menu">
                    <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
                    <label className="menu-open-button" htmlFor="menu-open">
                        <span className="hamburger hamburger-1"></span>
                        <span className="hamburger hamburger-2"></span>
                        <span className="hamburger hamburger-3"></span>
                    </label>

                    <Tooltip target={".menu-item"} className={'toolTipUniv'} position={"bottom"} mouseTrack/>

                    <a href="/" className="menu-item" id={'start'} data-pr-tooltip="Αρχική"> <i><FaHome/></i> </a>
                    {isLogged && <a href="/student/profile" className="menu-item" id={'profile'} data-pr-tooltip="Προφίλ"> <i><FaUserCircle/></i> </a>}
                    {!isLogged && <a className="menu-item" id={'profile'} data-pr-tooltip="Είσοδος" onClick={onLoginClick}> <i><TbLogin/></i> </a>}
                    <a href="/help" className="menu-item" id={'help'} data-pr-tooltip="Βοήθεια"> <i><IoHelpCircleOutline/></i> </a>
                    <a href="/student" className="menu-item" id={'students'} data-pr-tooltip="Φοιτητές"> <i><FaUserGraduate/></i> </a>
                    <a href="/teacher" className="menu-item" id={'teachers'} data-pr-tooltip="Εκπαιδευτικοί"> <i><FaChalkboardTeacher/></i> </a>
                    {isLogged && <a href={"javascript:window.location.href=window.location.href"} className="menu-item" id={'logout'} onClick={()=>{Auth.userLogout()}} data-pr-tooltip="Αποσύνδεση"> <i><TbLogout/></i> </a>}


                </nav>

            {/*{!activeLogin && <div className={"overlay-login"}>*/}
            {/*    /!*<br/>*!/*/}
            {/*    <div className={"mainContainer"}>*/}
            {/*        <Button className={'red-button-round'} >*/}
            {/*            <IoClose/>*/}
            {/*        </Button>*/}
            {/*        <br/>*/}
            {/*        <div className="inputContainer">*/}
            {/*            <div className="input-group">*/}
            {/*                <span className="icon">*/}
            {/*                  <FaUser />*/}
            {/*                </span>*/}
            {/*                <input*/}
            {/*                    value={username}*/}
            {/*                    placeholder="Όνομα Χρήστη"*/}
            {/*                    onChange={ev => setUsername(ev.target.value)}*/}
            {/*                    className="inputBox"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <br />*/}
            {/*        <div className="inputContainer">*/}
            {/*            <div className="input-group">*/}
            {/*                    <span className="icon">*/}
            {/*                      <FaLock />*/}
            {/*                    </span>*/}
            {/*                <input*/}
            {/*                    value={password}*/}
            {/*                    placeholder="Κωδικός"*/}
            {/*                    type="password" // Ensure the input type is set to "password" for password fields*/}
            {/*                    onChange={ev => setPassword(ev.target.value)}*/}
            {/*                    className="inputBox"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <br/>*/}
            {/*        <a href="https://account.di.uoa.gr/" target="_blank">Ξέχασες τον κωδικό σου;</a>*/}
            {/*        <br/>*/}
            {/*        <div className={"container_special"}>*/}
            {/*            <Button className="green-button-round" tooltip="Ασφαλής Σύνδεση: Χρησιμοποιείται εάν βρίσκεστε σε δημόσιο δίκτυο" tooltipOptions={{ position: 'bottom' , className: 'tooltipContainer', fontSize: '2rem', cursor: 'pointer'}} onClick={onButtonClick}>*/}
            {/*                <FaUnlock id={"icon1"}/>*/}
            {/*                <FaLock id={"icon2"}/>*/}
            {/*            </Button>*/}
            {/*            <input*/}
            {/*                className={"green-button"}*/}
            {/*                type="button"*/}
            {/*                onClick={onButtonClick}*/}
            {/*                value={"Σύνδεση"} />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>}*/}

            {activeLogin && <div className={"overlay-login-checked"}>
                <div className={"mainContainer"}>
                    <Button className={'red-button-round'} onClick={onCloseClick}>
                        <IoClose/>
                    </Button>
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
}

export default UniversalNavbar;