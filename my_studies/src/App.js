import './App.css';
import LoginWindow from "./components/Start_Page/LoginWindow";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from "react";
import StudentCert from "./components/Student_Pages/Student_Certificates/StudentCert";
import StudentCert1 from "./components/Student_Pages/Student_Certificates/StudentCert1";
import StartPage from "./components/Start_Page/StartPage";
import Teacher_Sidebar from "./components/Teacher_Page_Staples/Teacher_Sidebar";
import HelpHome from "./components/Help_Page/HelpHome";
import HelpStudents from "./components/Help_Page/HelpStudents";
import StudentHome from "./components/Student_Pages/Student_Home/StudentHome";
import HelpTeachers from "./components/Help_Page/HelpTeachers";
import HelpAdministration from "./components/Help_Page/HelpAdministration";

function App() {
    return(
        <Router>
          <Routes>
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
    );
}

export default App;
