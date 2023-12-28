import logo from './logo.svg';
import './App.css';
import LoginWindow from "./components/Start_Page/LoginWindow";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import StartPage from "./components/Start_Page/StartPage";
import Teacher_Sidebar from "./components/Teacher_Page_Staples/Teacher_Sidebar";
import HelpHome from "./components/Help_Page/help-home";
import HelpNavbar from "./components/Help_Page/HelpNavbar";

function App() {
    return(
        <Router>
          <Routes>
              <Route path='/navbar' element={<Navbar/>} />
              <Route path='/' element={<Sidebar/>} />
              <Route path='/login' element={<LoginWindow/>}/>
              <Route path='/start' element={<StartPage/>}/>
              <Route path='/ts' element={<Teacher_Sidebar/>}/>
              <Route path='/help' element={<HelpHome/>}/>
              <Route path='/help2' element={<HelpNavbar/>}/>
          </Routes>
        </Router>
    );
}

export default App;
