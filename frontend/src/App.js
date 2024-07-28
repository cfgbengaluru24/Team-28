// src/App.js
import React from 'react';

//import './Signup.css';
//import Signup from './Signup_admin';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import SearchPage from './SearchPage';
import PatientDetails from './PatientDetails';
import HealthDetails from './HealthDetails';
import Home from './home.jsx';
import LoginAdmin from './login_admin.jsx';
import LoginDoc from './login_doc.jsx';
import SignupDoc from './Signup_doc';
import SignupAdmin from './Signup_admin';
import Navbar from './NavBar';
import DoctorProfile from './DoctorProfile.js';
import AdminProfile from './AdminProfile.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login_admin" element={<LoginAdmin />} />
          <Route path="/login_doc" element={<LoginDoc />} />
          <Route path="/Signup_doc" element={<SignupDoc />} />
          <Route path="/Signup_admin" element={<SignupAdmin />} />
          <Route path="/SearchPage" element={<><Navbar /><SearchPage /></>} />
          <Route path="/PatientDetails" element={<><Navbar /><PatientDetails /></>} />
          <Route path="/healthDetails" element={<><Navbar /><HealthDetails /></>} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route isDoctor={true} path="/myprofile" element={<><Navbar /><DoctorProfile/></>}/>
          <Route isAdmin={true} path="/myprofile" element={<><Navbar /><AdminProfile/></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
