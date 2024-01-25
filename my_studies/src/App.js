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
import StudentDhlwseis4 from "./components/Student_Pages/Student_Dhlwseis/StudentDhlwseis4";
import StudentLessons from "./components/Student_Pages/Student_Lessons/StudentLessons";
import StudentLessons1 from "./components/Student_Pages/Student_Lessons/StudentLessons1";
import StudentProf from "./components/Student_Pages/Student_Profile/StudentProf";
import TeacherHome from "./components/Teacher_Page_Staples/Teacher_Home/TeacherHome";
import TeacherLessons from "./components/Teacher_Page_Staples/Teacher_Lessons/TeacherLessons";
import TeacherLessons1 from "./components/Teacher_Page_Staples/Teacher_Lessons/TeacherLessons1";
import TeacherLessons2 from "./components/Teacher_Page_Staples/Teacher_Lessons/TeacherLessons2";
import TeacherLessons3 from "./components/Teacher_Page_Staples/Teacher_Lessons/TeacherLessons3";
import TeacherLessons4 from "./components/Teacher_Page_Staples/Teacher_Lessons/TeacherLessons4";
import TeacherProf from "./components/Teacher_Page_Staples/Teacher_Profile/TeacherProf";
import {AuthProvider} from "./components/Auth/AuthContext";

function App() {
    return(
        <AuthProvider>
            <Router>
              <Routes>
                  <Route path='/teacher/profile' element={<TeacherProf/>} />
                  <Route path='/teacher/lessons/saved-grades' element={<TeacherLessons4/>} />
                  <Route path='/teacher/lessons/new-grades' element={<TeacherLessons3/>} />
                  <Route path='/teacher/lessons/fin-grades' element={<TeacherLessons2/>} />
                  <Route path='/teacher/lessons/edit-grades' element={<TeacherLessons1/>} />
                  <Route path='/teacher/lessons' element={<TeacherLessons/>} />
                  <Route path='/teacher' element={<TeacherHome/>} />
                  <Route path='/student/profile' element={<StudentProf/>} />
                  <Route path='/student/lessons/lesson' element={<StudentLessons1/>} />
                  <Route path='/student/lessons' element={<StudentLessons/>} />
                  <Route path='/student/forms/final' element={<StudentDhlwseis4/>} />
                  <Route path='/student/forms/saved' element={<StudentDhlwseis3/>} />
                  <Route path='/student/forms/new-form/done' element={<StudentDhlwseis2/>} />
                  <Route path='/student/forms/new-form' element={<StudentDhlwseis1/>} />
                  <Route path='/student/forms' element={<StudentDhlwseis/>} />
                  <Route path='/student/grades' element={<StudentGrades/>} />
                  <Route path='/student/certificates/new-certificate/personal_info/confirmation/end/done' element={<StudentCert1_5/>} />
                  <Route path='/student/certificates/new-certificate/personal_info/confirmation/end' element={<StudentCert1_4/>} />
                  <Route path='/student/certificates/new-certificate/personal_info/confirmation' element={<StudentCert1_3/>} />
                  <Route path='/student/certificates/new-certificate/personal_info' element={<StudentCert1_2/>} />
                  <Route path='/student/certificates/new-certificate' element={<StudentCert1/>} />
                  <Route path='/student/certificates' element={<StudentCert/>} />
                  <Route path='/student' element={<StudentHome/>} />
                  <Route path='/login' element={<LoginWindow/>}/>
                  <Route path='/' element={<StartPage/>}/>
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
