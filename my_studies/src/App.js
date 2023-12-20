import logo from './logo.svg';
import './App.css';
import LoginWindow from "./components/Start_Page/LoginWindow";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    return(
        <Router>
          <Routes>
              <Route path='/navbar' element={<Navbar/>} />
              <Route path='/' element={<Sidebar/>} />
              <Route path='/login' element={<LoginWindow/>}/>
          </Routes>
        </Router>
    );
}

export default App;
