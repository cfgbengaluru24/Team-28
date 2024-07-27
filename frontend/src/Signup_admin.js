import React, { useState } from 'react';
import './Signup.css';
import logo from './images/logo.png'; // Ensure this path is correct
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to the backend
      const response = await axios.post('http://localhost:8100/api/admin/register', formData);
      alert(response.data.message); // Alert on successful registration
      // Optionally redirect or reset form
      setFormData({
        name: '',
        email: '',
        password: '',
    
      });
    } catch (error) {
      alert('Signup failed: ' + error.response?.data?.error || error.message); // Alert on failure
    }
  };

  return (
    <div className="signup-container">
      <img src={logo} alt="Logo" className="signup-logo" />
      <h1>Signup</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        
       
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
