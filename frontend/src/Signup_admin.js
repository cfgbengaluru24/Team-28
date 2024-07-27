import React, { useState } from 'react';
import './Signup.css';
import logo from './images/logo.png'; // Ensure this path is correct

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    isVolunteer: false,
    email: '',
    contact: '',
    specialty: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
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
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input type="tel" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="specialty">Specialty:</label>
          <input type="text" id="specialty" name="specialty" value={formData.specialty} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="isVolunteer" checked={formData.isVolunteer} onChange={handleChange} />
            Are you a volunteer?
          </label>
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
