import React, { useState } from 'react';
import './UploadDetails.css';
import axios from 'axios';

const api = axios.create({withCredentials:true})

const HealthDetailsPage = () => {
  const [formData, setFormData] = useState({
    patientId: '',
    date: '',
    height: '',
    weight: '',
    haemoglobin: '',
    bp: '',
    symptoms: '',
    comments: '',
    medication: '',
    scan: null
  });

  const [errors, setErrors] = useState({});
  const [pic, setPic] = useState(false); // To handle loading state of image upload
  const [picLoading, setPicLoading] = useState(false); // To handle loading state of image upload


  const validateForm = () => {
    const newErrors = {};

    // if (!/^\d{12}$/.test(formData.govtId)) {
    //   newErrors.govtId = 'Govt ID must be a 12-digit numeric value.';
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      if (file && (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg')) {
        setPicLoading(true);

        // Upload image to Cloudinary
        try {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "chat-app");
          data.append("cloud_name", "dlkpgjqvq");

          const res = await fetch("https://api.cloudinary.com/v1_1/dlkpgjqvq/image/upload", {
            method: "post",
            body: data,
          });

          const result = await res.json();
          setPic(data.url.toString())
          setFormData({
            ...formData,
            [name]: result.url.toString() // Set the URL of the uploaded image
          });
          setPicLoading(false);
        } catch (err) {
          console.error('Error uploading image:', err);
          setPicLoading(false);
        }
      } else {
        alert('Please upload a valid image file (png, jpeg, jpg).');
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const dataToSend = new FormData();
    for (const key in formData) {
      dataToSend.append(key, formData[key]);
    }

    try {
      const response = await api.post('http://localhost:8100/api/doctor/patient/record/add',{
        formData
      });

      if (response.status !== 201) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setFormData({
        patientId: '',
        date: '',
        docId: '',
        height: '',
        weight: '',
        haemoglobin: '',
        bp: '',
        symptoms: '',
        comments: '',
        medications: '',
        scan: ''
      });

      alert('Health details submitted successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit health details.');
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-header">Health Details</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>Govt ID <span className="required">*</span>:</label>
        <input
          type="text"
          name="patientId"
          value={formData.patientId}
          onChange={handleChange}
          required
          //pattern="\d{12}"
          //title="Govt ID must be a 12-digit numeric value."
        />
        {errors.govtId && <p className="error">{errors.govtId}</p>}

        <label>Check-Up Date <span className="required">*</span>:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Height (cm) <span className="required">*</span>:</label>
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
          required
        />

        <label>Weight (kg) <span className="required">*</span>:</label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />

        <label>Haemoglobin Level <span className="required">*</span>:</label>
        <input
          type="text"
          name="haemoglobin"
          value={formData.haemoglobin}
          onChange={handleChange}
          required
        />

        <label>Blood Pressure <span className="required">*</span>:</label>
        <input
          type="text"
          name="bp"
          value={formData.bp}
          onChange={handleChange}
          required
        />

        <label>Symptoms <span className="required">*</span>:</label>
        <textarea
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          required
        ></textarea>

        <label>Doctor's Diagnosis <span className="required">*</span>:</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          required
        ></textarea>

        <label>Medicines Recommended <span className="required">*</span>:</label>
        <textarea
          name="medication"
          value={formData.medication}
          onChange={handleChange}
          required
        ></textarea>

        <label>Upload Scan Image:</label>
        <input
          type="file"
          name="scan"
          onChange={handleChange}
        />
        {picLoading && <p>Loading image...</p>} {/* Show loading text while uploading */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HealthDetailsPage;