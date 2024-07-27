// src/NavBar.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any necessary cleanup
    // localStorage.removeItem('userToken');

    // Redirect to home page after logout
    navigate('/home');
  };

  return (
    <nav className="nav-bar">
      <ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/uploadDetails">Upload Details</Link></li>
        <li><Link to="/healthDetails">Health Details</Link></li>
        <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
      </ul>
    </nav>
  );
};

export default NavBar;
