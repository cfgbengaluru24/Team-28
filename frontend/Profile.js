// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './profilestyles.css';

// const Profile = () => {
//   const [doctor, setDoctor] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchDoctor = async () => {
//       try {
//         const response = await axios.get('/api/doctor/me');
//         setDoctor(response.data);
//       } catch (err) {
//         setError('Error fetching doctor data');
//       }
//     };

//     fetchDoctor();
//   }, []);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!doctor) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="profile">
//       <h1>Doctor Profile</h1>
//       <img src="path/to/doctor/image" alt="Doctor" className="profile-image" />
//       <div className="profile-details">
//         <p><strong>Name:</strong> {doctor.name}</p>
//         <p><strong>Email:</strong> {doctor.email}</p>
//         <p><strong>Contact:</strong> {doctor.contact}</p>
//         <p><strong>Speciality:</strong> {doctor.speciality}</p>
//         <p><strong>Volunteer:</strong> {doctor.isVolunteer ? 'Yes' : 'No'}</p>
//       </div>
//     </div>
//   );
// };

// export default Profile;
// src/DoctorProfile.js
import React from 'react';

const doctorData = {
    name: "Dr. Jane Smith",
    email: "jane.smith@example.com",
    isVolunteer: false,
    patients: [], // Assume there are no patients for simplicity
    contact: "+1234567890",
    speciality: "Cardiology"
};

const DoctorProfile = () => {
    // Inline styles
    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        margin: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: '#f9f9f9'
    };

    const cardStyle = {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    };

    const headingStyle = {
        marginTop: '0',
        color: '#333'
    };

    const paragraphStyle = {
        fontSize: '16px',
        margin: '8px 0'
    };

    const strongStyle = {
        color: '#555'
    };

    return (
        <div style={containerStyle}>
            <h1>Doctor Profile</h1>
            <div style={cardStyle}>
                <h2 style={headingStyle}>{doctorData.name}</h2>
                <p style={paragraphStyle}><strong style={strongStyle}>Email:</strong> {doctorData.email}</p>
                <p style={paragraphStyle}><strong style={strongStyle}>Contact:</strong> {doctorData.contact}</p>
                <p style={paragraphStyle}><strong style={strongStyle}>Speciality:</strong> {doctorData.speciality}</p>
                <p style={paragraphStyle}><strong style={strongStyle}>Volunteer:</strong> {doctorData.isVolunteer ? 'Yes' : 'No'}</p>
            </div>
        </div>
    );
};

export default DoctorProfile;