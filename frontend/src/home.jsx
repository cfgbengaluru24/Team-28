// src/Home.jsx
import React from 'react';
import './home.css'; // Import the new CSS file
import logo from './images/logo.png'; // Import the image

const Home = () => {
    return (
        <div className="background">
            <div className="card">
                <img src={logo} alt="Logo" className="logo" /> {/* Place the image above the heading */}
                <h1>Rohini Oral Health Organisation</h1>
                <button className="login-button">Login as Admin</button>
                <button className="login-button">Login as Doctor</button>
            </div>
        </div>
    );
};

export default Home;
