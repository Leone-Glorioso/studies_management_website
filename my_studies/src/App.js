import './App.css';
import LoginWindow from "./components/Start_Page/LoginWindow";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from "react";
import StudentCert from "./components/Student_Pages/Student_Certificates/StudentCert";
import StudentCert1 from "./components/Student_Pages/Student_Certificates/StudentCert1";
import StudentCert1_2 from "./components/Student_Pages/Student_Certificates/StudentCert1_2";
import StudentCert1_3 from "./components/Student_Pages/Student_Certificates/StudentCert1_3";
import StudentCert1_4 from "./components/Student_Pages/Student_Certificates/StudentCert1_4";
import StudentCert1_5 from "./components/Student_Pages/Student_Certificates/StudentCert1_5";
import StudentGrades from "./components/Student_Pages/Student_Grades/StudentGrades";
import StartPage from "./components/Start_Page/StartPage";
import Teacher_Sidebar from "./components/Teacher_Page_Staples/Teacher_Sidebar";
import HelpHome from "./components/Help_Page/HelpHome";
import HelpStudents from "./components/Help_Page/HelpStudents";
import StudentHome from "./components/Student_Pages/Student_Home/StudentHome";
import HelpTeachers from "./components/Help_Page/HelpTeachers";
import HelpAdministration from "./components/Help_Page/HelpAdministration";
import StudentDhlwseis from "./components/Student_Pages/Student_Dhlwseis/StudentDhlwseis";
import StudentDhlwseis1 from "./components/Student_Pages/Student_Dhlwseis/StudentDhlwseis1";
import StudentDhlwseis2 from "./components/Student_Pages/Student_Dhlwseis/StudentDhlwseis2";
import StudentDhlwseis3 from "./components/Student_Pages/Student_Dhlwseis/StudentDhlwseis3";
import StudentLessons from "./components/Student_Pages/Student_Lessons/StudentLessons";
import StudentLessons1 from "./components/Student_Pages/Student_Lessons/StudentLessons1";
import StudentProf from "./components/Student_Pages/Student_Profile/StudentProf";
import {AuthProvider} from "./components/Auth/AuthContext";

function App() {
    return(
        <AuthProvider>
            <Router>
              <Routes>
                  <Route path='/profile' element={<StudentProf/>} />
                  <Route path='/lessons/lesson' element={<StudentLessons1/>} />
                  <Route path='/lessons' element={<StudentLessons/>} />
                  <Route path='/forms/saved' element={<StudentDhlwseis3/>} />
                  <Route path='/forms/new-form/done' element={<StudentDhlwseis2/>} />
                  <Route path='/forms/new-form' element={<StudentDhlwseis1/>} />
                  <Route path='/forms' element={<StudentDhlwseis/>} />
                  <Route path='/grades' element={<StudentGrades/>} />
                  <Route path='/certificates/new-certificate/personal_info/confirmation/end/done' element={<StudentCert1_5/>} />
                  <Route path='/certificates/new-certificate/personal_info/confirmation/end' element={<StudentCert1_4/>} />
                  <Route path='/certificates/new-certificate/personal_info/confirmation' element={<StudentCert1_3/>} />
                  <Route path='/certificates/new-certificate/personal_info' element={<StudentCert1_2/>} />
                  <Route path='/certificates/new-certificate' element={<StudentCert1/>} />
                  <Route path='/certificates' element={<StudentCert/>} />
                  <Route path='/' element={<StudentHome/>} />
                  <Route path='/login' element={<LoginWindow/>}/>
                  <Route path='/start' element={<StartPage/>}/>
                  <Route path='/ts' element={<Teacher_Sidebar/>}/>
                  <Route path='/help' element={<HelpHome/>}/>
                  <Route path='/help/student' element={<HelpStudents/>}/>
                  <Route path='/help/teacher' element={<HelpTeachers/>}/>
                  <Route path='/help/admin' element={<HelpAdministration/>}/>
              </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
