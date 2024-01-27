import React, {Component, useEffect, useState} from "react";
import './TeacherLessons3.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";
import {collection, doc, getDocs, orderBy, query, updateDoc, where, addDoc} from "firebase/firestore";
import {db} from "../../config/firebase_config";
import {useNavigate} from "react-router-dom";

function TeacherLessons3() {

    const Auth = useAuth();
    const isLogged = Auth.userIsAuthenticated();
    const user = Auth.getUser();
    const [students, setStudents] = useState([]);
    const [username, setUsername] = useState('');
    const [grade, setGrade] = useState(0);
    const [isUsername, setIsUsername] = useState(false);
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [arrayGrades, setArrayGrades] = useState([]);
    const fileReader = new FileReader();

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
    };

    const csvFileToArray = string => {
        const csvHeader = string.slice(0, string.indexOf("\n")-1).split(";");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\r\n");

        const array = csvRows.map(i => {
            const values = i.split(";");
            const obj = csvHeader.reduce((object, header, index) => {
                object[header] = values[index];
                return object;
            }, {});
            return obj;
        });
        array.pop();

        setArrayGrades(array);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (file) {
            fileReader.onload = function (event) {
                const text = event.target.result;
                csvFileToArray(text);
            };

            fileReader.readAsText(file);
        }

        console.log(arrayGrades);
        const student_array = [];
        arrayGrades.forEach((a)=> {
            student_array.push(a.username);
        })
        console.log(student_array);

        async function saveTempGrades(){
            const stud_array = [];
            for(const st of students)
                stud_array.push({student: st.username, grade: 5})
            const insert_data = {
                'lesson': Auth.getLessonsEdit().num,
                'state': 'temporary',
                'teacher': user.username,
                'grades': stud_array
            };

            const docRef = await addDoc(collection(db, 'grading'),insert_data)

            //-------------------------------------------------

            const lesson = Auth.getLessonsEdit()
            Auth.setLessonsEdit({less: lesson, grading: insert_data, grade_id: docRef.id})


            //-------------------------------------------------
            const grades = Auth.getLessonsEdit().grading.grades;
            const new_grades = []
            for(const grade_loop of grades){
                if(!student_array.includes(grade_loop.student))
                    new_grades.push(grade_loop);
            }
            for(const new_grade of arrayGrades)
                new_grades.push({student: new_grade.username, grade: Number(new_grade.grade)});
            const doc_ref = doc(db, 'grading', Auth.getLessonsEdit().grade_id);
            console.log(new_grades,grades);
            await updateDoc(doc_ref,{
                "grades": new_grades
            })
            let set_grades = Auth.getLessonsEdit();
            set_grades.grading.grades = new_grades;
            Auth.setLessonsEdit(set_grades);
            // navigate(0);
        }
        if(isLogged && user.type === 'teacher')
            saveTempGrades();
    };

    useEffect(() => {
        async function fetchStudents()
        {
            const db_ref = collection(db, 'user');
            const q = query(db_ref, where('type', '==', 'student'));
            const docs = await getDocs(q);
            const data = []
            docs.forEach((doc)=> {
                data.push({username: doc.data().username, name: doc.data().name, surname: doc.data().surname});
            })
            setStudents(data);

        }
        if(isLogged)
            fetchStudents();
    }, []);

    // Function to toggle between hiding and showing the dropdown content
    const myFunction = () => {
        const dropdown = document.getElementById("myDropdown");
        dropdown.classList.toggle("show");
    };

    // Function to filter dropdown content based on user input
    const filterFunction = () => {
        const input = document.getElementById("myInput");
        const filter = input.value.toUpperCase();
        const dropdown = document.getElementById("myDropdown");
        const anchors = dropdown.getElementsByTagName("a");

        for (let i = 0; i < anchors.length; i++) {
            const txtValue = anchors[i].textContent || anchors[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                anchors[i].style.display = "";
            } else {
                anchors[i].style.display = "none";
            }
        }
    };

    const onClickToSet = (e, name) => {
        setUsername(name);
        setIsUsername(true);
        const dropdown = document.getElementById("myDropdown");
        dropdown.classList.toggle("show");
    }

    const onSetGrade = (e,grade_in) => {
        setGrade(Number(grade_in));
    }

    const submitNewGrade = (e, student, grade_in) => {
        async function updateGrade() {
            const stud_array = [];
            for(const st of students)
                stud_array.push({student: st.username, grade: 5})
            const insert_data = {
                'lesson': Auth.getLessonsEdit().num,
                'state': 'temporary',
                'teacher': user.username,
                'grades': stud_array
            };

            const docRef = await addDoc(collection(db, 'grading'),insert_data)

            //-------------------------------------------------

            const lesson = Auth.getLessonsEdit()
            Auth.setLessonsEdit({less: lesson, grading: insert_data, grade_id: docRef.id})


            //-------------------------------------------------
            const grades = Auth.getLessonsEdit().grading.grades;
            const new_grades = []
            for(const grade_loop of grades){
                if(grade_loop.student !== student)
                    new_grades.push(grade_loop);
            }
            new_grades.push({grade: grade_in, student: student });
            const doc_ref = doc(db, 'grading', Auth.getLessonsEdit().grade_id);
            console.log(new_grades,grades);
            await updateDoc(doc_ref,{
                "grades": new_grades
            })
            let set_grades = Auth.getLessonsEdit();
            set_grades.grading.grades = new_grades;
            Auth.setLessonsEdit(set_grades);
            navigate("/teacher/lessons/edit-grades");
        }
        if(isLogged && user.type === 'teacher')
            updateGrade();
    }

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/teacher">Αρχική Καθηγητή</a></li>
                <li><a href="/teacher/lessons">Βαθμολόγια</a></li>
                <li>Νέο βαθμολόγιο</li>
            </ul>

            <p className="les-title">{Auth.getLessonsEdit().name}</p>
            <p className="text">Μπορείτε να δημιουργήσετε το βαθμολόγιο:</p>
            <p className="text1">- είτε ανεβάζοντας κάποιο αρχείο "Πολλαπλή Βαθμολόγηση"</p>
            <p className="text2">- είτε περνώντας κάθε βαθμολογία ξεχωριστά "+"</p>

            <div className="teach-buttons">
                <a href="#popup-mult" className="mult">Πολλαπλή Βαθμολόγηση</a>
                <a href="#popup-one" className="new"><i className="fa-solid fa-plus"></i> </a>
            </div>

            {(!isLogged || user.type !== 'teacher') && <div id="popup-mult" className="overlay">
                <div className="popup-m">
                    <div className="content">
                        <p>Επιλέξτε κάποιο από τα αρχεία σας</p>
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/teacher/lessons/new-grades"
                               className="cancel-g">Άκυρο</a>
                            <a href="/teacher/lessons/edit-grades"
                               className="confirm">OK</a>
                        </li>
                    </ul>
                </div>
            </div>}

            {isLogged && user.type === 'teacher' && <div id="popup-mult" className="overlay">
                <div className="popup-m">
                    <div className="content">
                        <p>Επιλέξτε κάποιο από τα αρχεία σας</p>
                    </div>
                    <br/>
                    <input
                        type={"file"}
                        id={"csvFileInput"}
                        accept={".csv"}
                        onChange={handleOnChange}
                    />
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/teacher/lessons/new-grades"
                               className="cancel-g">Άκυρο</a>
                            <a href="/teacher/lessons/edit-grades"
                               className="confirm"
                               onClick={handleOnSubmit}>OK</a>
                        </li>
                    </ul>
                </div>
            </div>}

            {(!isLogged || user.type !== 'teacher') && <div id="popup-one" className="overlay">
                <div className="popup-o">
                    <div className="content">
                        <p>Εισάγετε τελικό βαθμό:</p>
                        <div className="dropdown-st">
                            <button onClick={myFunction} className="dropbtn">
                                Επιλογή φοιτητή
                            </button>
                            <div id="myDropdown" className="dropdown-content">
                                <input
                                    type="text"
                                    placeholder="Αναζήση AM.."
                                    id="myInput"
                                    onKeyUp={filterFunction}
                                />
                                <a>sdi2100127</a>
                                <a>sdi2100129</a>
                                <a>sdi2100074</a>
                            </div>
                        </div>
                        <p></p>
                        <label htmlFor="grade">Βαθμός:</label><input type="number" fname="grade" min={'1'} max={'10'} step={'0.1'}></input>
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/teacher/lessons/new-grades"
                               className="cancel-g">Άκυρο</a>
                            <a href="/teacher/lessons/edit-grades"
                               className="confirm">ΟΚ</a>
                        </li>
                    </ul>
                </div>
            </div>}

            {isLogged && user.type === 'teacher' && <div id="popup-one" className="overlay">
                <div className="popup-o">
                    <div className="content">
                        <p>Εισάγετε τελικό βαθμό:</p>
                        <div className="dropdown-st">
                            <button onClick={myFunction} className="dropbtn">
                                Επιλογή φοιτητή
                            </button>
                            <div id="myDropdown" className="dropdown-content">
                                <input
                                    type="text"
                                    placeholder="Αναζήση AM.."
                                    id="myInput"
                                    onKeyUp={filterFunction}
                                />
                                {students.map((student) => {
                                    return (
                                        <a onClick={(e)=> onClickToSet(e, student.username)}>{student.username}</a>
                                    )
                                })}
                            </div>
                        </div>
                        {!isUsername && <p></p>}
                        {isUsername && <p>{username}</p>}
                        <label htmlFor="grade">Βαθμός:</label><input type="number" fname="grade" min={'1'} max={'10'} step={'0.1'} onChange={(e)=> onSetGrade(e, e.target.value)}></input>
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/teacher/lessons/new-grades"
                               className="cancel-g">Άκυρο</a>
                            <a className="confirm"
                               onClick={(e) => submitNewGrade(e, username, grade)}>ΟΚ</a>
                        </li>
                    </ul>
                </div>
            </div>}

        </div>

    )

}


export default TeacherLessons3