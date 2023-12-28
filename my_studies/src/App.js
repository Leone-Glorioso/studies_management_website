import logo from './logo.svg';
import './App.css';
import LoginWindow from "./components/Start_Page/LoginWindow";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from "react";
import Sidebar from "./components/Student_Home/Sidebar";
import StudentCert from "./components/Student_Certificates/StudentCert";
import StartPage from "./components/Start_Page/StartPage";
import Teacher_Sidebar from "./components/Teacher_Page_Staples/Teacher_Sidebar";
import HelpHome2 from "./components/FileGraveyard/help-home2";
import HelpHome from "./components/Help_Page/HelpHome";

function App() {
    return(
        <Router>
          <Routes>
              <Route path='/certificates' element={<StudentCert/>} />
              <Route path='/' element={<Sidebar/>} />
              <Route path='/login' element={<LoginWindow/>}/>
              <Route path='/start' element={<StartPage/>}/>
              <Route path='/ts' element={<Teacher_Sidebar/>}/>
              <Route path='/help' element={<HelpHome2/>}/>
              <Route path='/help2' element={<HelpHome/>}/>
          </Routes>
        </Router>
    );
}

export default App;
