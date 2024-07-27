import React, { useState } from 'react';
import './UploadDetails.css';
import axios from 'axios';

const api = axios.create({withCredentials:true})

const PatientDetailsPage = () => {
  const [formData, setFormData] = useState({
    govtId: '',
    name: '',
    dob: '',
    contact: '', // Optional
    location: '',
    gender: '',
    bloodGroup: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!/^\d{12}$/.test(formData.govtId)) {
      newErrors.govtId = 'Govt ID must be a 12-digit numeric value.';
    }

    if (formData.contact && !/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = 'Contact must be a 10-digit numeric value.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {

      // const response = await fetch('http://localhost:8100/api/doctor/addPatient', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(formData)
      // });
      // console.log(formData)
      const response = await api.post('http://localhost:8100/api/doctor/addPatient',{
        formData
      })

      if (response.status !== 201) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setFormData({
        name: '',
        govtId: '',
        DoB: '',
        gender: '',
        blood_group: '',
        location: '',
        contact: ''
      });

      alert('Patient details submitted successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit patient details.');
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-header">Patient Details</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>Govt ID <span className="required">*</span>:</label>
        <input
          type="text"
          name="govtId"
          value={formData.govtId}
          onChange={handleChange}
          required
          pattern="\d{12}"
          title="Govt ID must be a 12-digit numeric value."
        />
        {errors.govtId && <p className="error">{errors.govtId}</p>}

        <label>Name <span className="required">*</span>:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Date of Birth <span className="required">*</span>:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label>Contact (Optional):</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          pattern="\d{10}"
          title="Contact must be a 10-digit numeric value."
        />
        {errors.contact && <p className="error">{errors.contact}</p>}

        <label>Location <span className="required">*</span>:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <label>Gender <span className="required">*</span>:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Blood Group <span className="required">*</span>:</label>
        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PatientDetailsPage;
