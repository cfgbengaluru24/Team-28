// src/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import logo from './images/logo.png';

const Home = () => {
    const navigate = useNavigate();

    const handleLoginClick = (path) => {
        navigate(path);
    };

    return (
        <div className="background">
            <div className="card">
                <img src={logo} alt="Logo" className="logo" />
                <h1>Rohini Oral Health Organisation</h1>
                <button className="login-button" onClick={() => handleLoginClick('/login_admin')}>Login as Admin</button>
                <button className="login-button" onClick={() => handleLoginClick('/login_doc')}>Login as Doctor</button>
            </div>
        </div>
    );
};

export default Home;
