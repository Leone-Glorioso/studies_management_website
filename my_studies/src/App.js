import logo from './logo.svg';
import './App.css';
import LoginWindow from "./components/Start_Page/LoginWindow";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from "react";

function App() {
    <Router>
      <Routes>
        <Route path='/' element={<LoginWindow />} />
      </Routes>
    </Router>
}

export default App;
