import React, {Component, useEffect, useState} from "react";
import './StudentDhlwseis1.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import Dropdown from "../Dropdowns/Dropdown";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../config/firebase_config";

function StudentDhlwseis1() {
    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const user = Auth.getUser();
    const [lessons_in, setLessonsIn] = useState([]);
    const [lessons_out, setLessonsOut] = useState([]);
    const [limit, setLimit] = useState(0);
    const [checked, setChecked] = useState(0);
    const [firstTime, setFirstTime] = useState(true)

    useEffect( () => {
        async function fetchLessons()
        {
            const db_ref = collection(db, 'dhloseis');
            const q = query(db_ref, where('student_username', '==', user.username), where('isCurrent', '==', true));
            const docs = await getDocs(q);
            const data = [];
            docs.forEach((doc)=> {
                data.push(doc.data().lessons);
            })
            const in_dhloseis = data[0];
            const db_ref_alt = collection(db, 'lessons');
            const q_alt = query(db_ref_alt);
            const docs_alt = await getDocs(q_alt);
            const less_in = [];
            const less_out = [];
            docs_alt.forEach((doc)=> {
                if(doc.data().num in in_dhloseis)
                    less_in.push({id: doc.id, ...doc.data()});
                else
                    less_out.push({id: doc.id, ...doc.data()});
            })
            setLessonsIn(less_in);
            setLessonsOut(less_out);
        }
        if(isLogged)
            fetchLessons();
    }, []);

    const onClickCheckBox = (e) => {
        console.log("Entered" + firstTime);
        if(firstTime)
        {
            switch (user.year)
            {
                case 1:
                    setLimit(3);
                    break;
                case 2:
                    setLimit(4);
                    break;
                case 3:
                    setLimit(5);
                    break;
                default:
                    setLimit(10);
                    break;
            }
            setChecked(lessons_in.length);
            console.log(limit, checked, lessons_in.length, lessons_in, user.year);
            setFirstTime(false);
        }
        if(e.target.checked)
            setChecked(checked+1);
        else
            setChecked(checked-1);
        console.log(checked);
    }

    const onNotLogged = () => {
        Auth.setWindow(true);
    }

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/student">Αρχική Φοιτητή</a></li>
                <li><a href="/student/forms">Δηλώσεις</a></li>
                <li>Νέα Δήλωση</li>
            </ul>

            {checked > limit && <div className="warning">Μπορείς να δηλώσεις μέχρι {limit} μαθήματα!</div>}

            {!isLogged &&
                <table className="table-dhl">
                    <tr>
                        <th>Κωδικός Μαθήματος</th>
                        <th>Τίτλος Μαθήματος</th>
                        <th>Δήλωση</th>
                    </tr>
                    <tr>
                        <td>000000</td>
                        <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                        <td className="checkboxes"><input type="checkbox"/></td>
                    </tr>
                    <tr>
                        <td>111111</td>
                        <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                        <td className="checkboxes"><input type="checkbox"/></td>
                    </tr>
                </table>
            }

            {
                <table className="table-dhl">
                    <tr>
                        <th>Κωδικός Μαθήματος</th>
                        <th>Τίτλος Μαθήματος</th>
                        <th>Δήλωση</th>
                    </tr>
                    {lessons_in.map((item) => {
                        return (
                            <tr>
                                <td>{item.num}</td>
                                <td>{item.name}</td>
                                <td className="checkboxes"><input type="checkbox" defaultChecked={true} onClick={onClickCheckBox.bind(this)}/></td>
                            </tr>
                        )
                    })}

                    {lessons_out.map((item) => {
                        return (
                            <tr>
                                <td>{item.num}</td>
                                <td>{item.name}</td>
                                <td className="checkboxes"><input type="checkbox" defaultChecked={false} onClick={onClickCheckBox.bind(this)}/></td>
                            </tr>
                        )
                    })}
                </table>
            }

            <Dropdown/>

            <div className="buttons-c">
                <a href="/student/forms" className="cancel"> Άκυρο</a>
                <a href="/student/forms/saved" className="temp">Προσωρινή αποθήκευση</a>
                {!isLogged && <a onClick={onNotLogged} className="submit">Οριστική υποβολή</a>}
                {isLogged && <a href="/student/forms/new-form/done" className="submit">Οριστική υποβολή</a>}
            </div>


        </div>

    )

}


export default StudentDhlwseis1