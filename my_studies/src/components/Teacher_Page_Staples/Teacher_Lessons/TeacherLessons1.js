import React, {Component, useEffect, useState} from "react";
import './TeacherLessons1.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";
import {useAuth} from "../../Auth/AuthContext";
import {collection, getDocs, orderBy, query, where, doc, updateDoc, addDoc, setDoc} from "firebase/firestore";
import {db} from "../../config/firebase_config";
import {useNavigate} from "react-router-dom";

function TeacherLessons1() {

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
    // const [new_grades, setNewGrades] = useState([])

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
        if (e.target.files[0]) {
            fileReader.onload = function (event) {
                const text = event.target.result;
                csvFileToArray(text);
            };

            fileReader.readAsText(e.target.files[0]);
        }
    };

    const csvFileToArray = (string) => {
        const csvHeader = string.slice(0, string.indexOf("\n")-1).split(";");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\r\n");

        const array = csvRows.map((i) => {
            const values = i.split(";");
            const obj = csvHeader.reduce((object, header, index) => {
                object[header] = values[index];
                return object;
            }, {});
            return obj;
        });

        setArrayGrades(array);
        console.log(array);
    };

    // const handleOnChangeMultiple = (e) => {
    //     setFile(e.target.files[0]);
    //     e.preventDefault();
    //     let array = [];
    //
    //     if (e.target.files[0]) {
    //         console.log('entered');
    //         fileReader.onload = function (event) {
    //             const string = event.target.result;
    //             setArrayGrades(csvFileToArray(string));
    //         };
    //
    //         fileReader.readAsText(e.target.files[0]);
    //     }
    //
    //     console.log(array);
    //     let student_array = [];
    //     let new_grades = [];
    //     array.forEach((a)=> {
    //         student_array.push(a.username);
    //     })
    //     console.log(student_array);
    //     const grades = Auth.getLessonsEdit().grading.grades;
    //     for(const grade_loop of grades){
    //         if(!student_array.includes(grade_loop.student))
    //             new_grades.push(grade_loop);
    //     }
    //     for(const new_grade of array)
    //         new_grades.push({student: new_grade.username, grade: Number(new_grade.grade)});
    //     Auth.setNewGrading(new_grades);
    // };

    // const handleOnSubmit = (e) => {
    //
    //     async function saveTempGrades(){
    //         const doc_ref = doc(db, 'grading', Auth.getLessonsEdit().grade_id);
    //         // console.log(new_grades,grades);
    //         await updateDoc(doc_ref,{
    //             "grades": Auth.getNewGrading()
    //         });
    //         let set_grades = Auth.getLessonsEdit();
    //         set_grades.grading.grades = Auth.getNewGrading();
    //         Auth.setLessonsEdit(set_grades);
    //         // navigate(0);
    //     }
    //     if(isLogged && user.type === 'teacher')
    //         saveTempGrades();
    // };

    const handleOnSubmit = (e) => {

        async function saveTempGrades(){
            let student_array = [];
            let new_grades = [];
            arrayGrades.forEach((a)=> {
                student_array.push(a.username);
            })
            const grades = Auth.getLessonsEdit().grading.grades;
            for(const grade_loop of grades){
                if(!student_array.includes(grade_loop.student))
                    new_grades.push(grade_loop);
            }
            for(const new_grade of arrayGrades)
                new_grades.push({student: new_grade.username, grade: Number(new_grade.grade)});
            const doc_ref = doc(db, 'grading', Auth.getLessonsEdit().grade_id);
            await updateDoc(doc_ref,{
                grades: new_grades
            });
            let set_grades = Auth.getLessonsEdit();
            set_grades.grading.grades = new_grades;
            Auth.setLessonsEdit(set_grades);
            navigate(0);
        }
        if(isLogged && user.type === 'teacher')
            saveTempGrades();
    };

    useEffect(() => {
        async function fetchStudents()
        {
            Auth.setNewGrading([]);
            const list_of = []
            for(const grade of Auth.getLessonsEdit().grading.grades)
            {
                const db_ref = collection(db, 'user');
                const q = query(db_ref, where('username', '==', grade.student));
                const docs = await getDocs(q);
                docs.forEach((doc) => {
                    list_of.push({username: doc.data().username, name: doc.data().name, surname: doc.data().surname, grade: grade.grade})
                })
            }
            setStudents(list_of);

        }
        if(isLogged && Auth.getLessonsEdit() !== undefined)
            fetchStudents();
    }, []);

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
                grades: new_grades
            })
            let set_grades = Auth.getLessonsEdit();
            set_grades.grading.grades = new_grades;
            Auth.setLessonsEdit(set_grades);
            navigate(0);
        }
        if(isLogged && user.type === 'teacher')
            updateGrade();
    }

    const handleFinalizeGrading = (e) => {
        async function finalize(){
            let info = Auth.getLessonsEdit()
            const doc_ref = doc(db, 'grading', info.grade_id)
            await updateDoc(doc_ref, {
                state: 'final'
            })
            const db_ref = collection(db, 'grades')
            for(const inside_grade of info.grading.grades)
            {
                await addDoc(db_ref, {
                    grade: inside_grade.grade,
                    lesson_id: info.less.num,
                    period: 'Ιανουάριος 2023-24',
                    student_username: inside_grade.student,
                    teacher_username: user.username
                })
            }
            navigate("/teacher/lessons/fin-grades");
        }

        if(isLogged && user.type === 'teacher')
            finalize().then(()=>console.log('finished'));
    }

    return (
        <div>
            <Sidebar/>

            <ul className="breadcrumb">
                <li><a href="/teacher">Αρχική Καθηγητή</a></li>
                <li><a href="/teacher/lessons">Βαθμολόγια</a></li>
                <li>Επεξεργασία βαθμολογίου</li>
            </ul>

            {((!isLogged || user.type !== 'teacher')|| Auth.getLessonsEdit() === undefined) && <p className="les-title-b">Όνομα μαθήματος</p>}
            {isLogged && Auth.getLessonsEdit() !== undefined && <p className="les-title-b">{Auth.getLessonsEdit().less.name}</p>}


            {(!isLogged || user.type !== 'teacher') && <table className="table-s">
                <tr>
                    <th>ΑΜ</th>
                    <th>Όνομα</th>
                    <th>Επώνυμο</th>
                    <th>Βαθμός</th>
                </tr>
                <tr>
                    <td>000000</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td>000000</td>
                </tr>
                <tr>
                    <td>111111</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    <td>000000</td>
                </tr>

            </table>}

            {isLogged && user.type === 'teacher' &&
                <table className="table-s">
                    <tr>
                        <th>ΑΜ</th>
                        <th>Όνομα</th>
                        <th>Επώνυμο</th>
                        <th>Βαθμός</th>
                    </tr>
                    {students.map((student) => {
                            return (
                                <tr>
                                    <td>{student.username}</td>
                                    <td>{student.name}</td>
                                    <td>{student.surname}</td>
                                    <td>{student.grade}</td>
                                </tr>
                            )
                        }
                    )}
                </table>
            }

            <div className="teach-buttons">
                <a href="#popup-save" className="save-b">Προσωρινή αποθήκευση</a>
                <a href="#popup-mult" className="mult-b">Πολλαπλή Βαθμολόγηση</a>
                <a href="#popup-one" className="new-one"><i className="fa-solid fa-plus"></i> </a>
                <a href="#popup-sub" className="sub-b">Οριστική Υποβολή</a>
            </div>

            {(!isLogged || user.type !== 'teacher') && <div id="popup-sub" className="overlay">
                <div className="popup-s">
                    <div className="content">
                        <p>Σίγουρα θέλετε να υποβάλετε το βαθμολόγιο;</p><p>Οι οριστικές βαθμολογίες ΔΕΝ αλλάζουν!</p>
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/teacher/lessons/edit-grades"
                               className="cancel-g">Άκυρο</a>
                            <a href="/teacher/lessons/fin-grades"
                                className="confirm">Επιβεβαίωση</a>
                        </li>
                    </ul>
                </div>
            </div>}

            {isLogged && user.type === 'teacher' &&  <div id="popup-sub" className="overlay">
                <div className="popup-s">
                    <div className="content">
                        <p>Σίγουρα θέλετε να υποβάλετε το βαθμολόγιο;</p><p>Οι οριστικές βαθμολογίες ΔΕΝ αλλάζουν!</p>
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/teacher/lessons/edit-grades"
                               className="cancel-g">Άκυρο</a>
                            <a className="confirm"
                                onClick={(e)=> handleFinalizeGrading(e)}>Επιβεβαίωση</a>
                        </li>
                    </ul>
                </div>
            </div>}

            <div id="popup-save" className="overlay">
                <div className="popup-sv">
                    <div className="content">
                        Το Βαθμολόγιο Αποθηκεύτηκε
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/teacher/lessons"
                               className="confirm-saved">ΟΚ</a>
                        </li>
                    </ul>
                </div>
            </div>

            {(!isLogged || user.type !== 'teacher') && <div id="popup-mult" className="overlay">
                <div className="popup-m">
                    <div className="content">
                        <p>Επιλέξτε κάποιο από τα αρχεία σας</p>
                    </div>
                    <ul className="buttons1">
                        <li className="buttons-c1">
                            <a href="/teacher/lessons/edit-grades"
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
                            <a href="/teacher/lessons/edit-grades"
                               className="cancel-g">Άκυρο</a>
                            <a className="confirm"
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
                            <a href="/teacher/lessons/edit-grades"
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
                            <a href="/teacher/lessons/edit-grades"
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


export default TeacherLessons1