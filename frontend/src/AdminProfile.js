import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({withCredentials:true})

const AdminProfile = () => {

    const [admin, setAdmin] = useState(null);
    const [error, setError] = useState('');
 
    useEffect(() => {
      const fetchAdmin = async () => {
       try {
          const response = await api.get("http://localhost:8100/api/admin/me");
          console.log(response.data);
          setAdmin(response.data);
        } catch (err) {
            console.log("error");
          setError('Error fetching admin data');
        }
      };
 
      fetchAdmin();
    }, []);

    if (!admin) {
        return <div>Loading...</div>;
    }
    // Inline styles
    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        margin: '60px auto', // Center horizontally
        padding: '40px',
        border: '1px solid #ddd',
        borderRadius: '20px',
        maxWidth: '800px',
        backgroundColor: '#fefefe',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
        textAlign: 'center', // Center content
        background: 'linear-gradient(to right, #e0f7fa, #eaf2f8)',
    };

    const cardStyle = {
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        margin: '30px 0',
        transition: 'transform 0.3s', // Smooth hover effect
    };

    const headingStyle = {
        marginTop: '0',
        color: '#2c3e50',
        fontSize: '36px',
        fontWeight: 'bold',
    };

    const paragraphStyle = {
        fontSize: '20px',
        margin: '15px 0',
        color: '#34495e',
        lineHeight: '1.8',
    };

    const strongStyle = {
        color: '#2980b9',
        fontWeight: 'bold',
    };

    const titleStyle = {
        fontSize: '48px',
        color: '#2c3e50',
        marginBottom: '40px',
        fontWeight: 'bold',
    };

    // Adding hover effect for the card
    const handleMouseOver = (e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
    };

    const handleMouseOut = (e) => {
        e.currentTarget.style.transform = 'scale(1)';
    };

    return (
     
          <div style={containerStyle}>
            <h1 style={titleStyle}>Admin Profile</h1>
            <div
                style={cardStyle}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <h2 style={headingStyle}>{admin.name}</h2>
                <p style={paragraphStyle}><strong style={strongStyle}>Email:</strong> {admin.email}</p>
                <p style={paragraphStyle}><strong style={strongStyle}>Contact:</strong> {admin.contact}</p>
            </div>
        </div>
    );
};

export default AdminProfile;
