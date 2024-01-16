import React, {Component} from "react";
import './StudentLessons1.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {LessonInfo} from "./LessonItems";
import {profile} from "../Navbar_Sidebar/MenuItems";

class StudentLessons1 extends Component {

    render() {
        return (
            <div>
                <Sidebar/>

                <ul className="breadcrumb">
                    <li><a href="/student">Αρχική Μαθητή</a></li>
                    <li><a href="/student/lessons">Μαθήματα</a></li>
                    <li>Όνομα μαθήματος</li>
                </ul>

                <div className="Lessons-info">
                    <ul className="info">
                        {LessonInfo.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>


            </div>

        )
    }

}


export default StudentLessons1