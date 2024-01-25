import React, {Component} from "react";
import './StudentLessons1.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {LessonInfo} from "./LessonItems";
import {profile} from "../Navbar_Sidebar/MenuItems";
import {useAuth} from "../../Auth/AuthContext";

function StudentLessons1() {

    const Auth = useAuth();
    const lesson = Auth.getLesson();

    const LessonInfo = [
        {
            cName: "lesson-info",
            title: "Εξάμηνο",
            text: lesson.semester,
        },
        {
            cName: "lesson-info",
            title: "Τύπος",
            text: lesson.type,
        },
        {
            cName: "lesson-info",
            title: "ECTS",
            text: lesson.ects,
        },
        {
            cName: "lesson-info",
            title: "Γνωστικό αντικείμενο",
            text: "-",
        },
        {
            cName: "lesson-info",
            title: "Καθηγητές",
            text: lesson.teachers.toString(),
        },
        {
            cName: "lesson-info",
            title: "Συγγράματα",
            text: "-",
        },
    ]

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/student">Αρχική Φοιτητή</a></li>
                <li><a href="/student/lessons">Μαθήματα</a></li>
                <li>Όνομα μαθήματος</li>
            </ul>

            <div className="Lessons-info">
                <ul className="info">
                    {LessonInfo.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName}>
                                    {item.title + " " + item.text}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>


        </div>

    )

}


export default StudentLessons1