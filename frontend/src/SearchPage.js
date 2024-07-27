import React, { useState } from 'react';
import './SearchPage.css';

function SearchPage() {
  const [filter, setFilter] = useState('name');
  const [query, setQuery] = useState('');
  const [patientDetails, setPatientDetails] = useState(null);

  const handleSearch = async () => {
    const response = await fetch(`https://localhost:8100/api/doctor/findPatientBy${filter}=${query}`);
    const data = await response.json();
    setPatientDetails(data);
  };

  return (
    <div className="search-container">
      <h1 className="search-header">Search Page</h1>
      <div className="search-controls">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="name">Name</option>
          <option value="id">ID</option>
          <option value="location">Location</option>
        </select>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search query..."
        />
        <button onClick={handleSearch}>
          Search
        </button>
      </div>
      {patientDetails ? (
        <div className="patient-details">
          <h2>Patient Details</h2>
          <p><strong>ID:</strong> {patientDetails.id}</p>
          <p><strong>Name:</strong> {patientDetails.name}</p>
          <p><strong>Date of Birth:</strong> {patientDetails.dob}</p>
          <p><strong>Locatiion:</strong> {patientDetails.location}</p>
          <p><strong>Gender:</strong> {patientDetails.gender}</p>
          <p><strong>Blood Group:</strong> {patientDetails.bloodGroup}</p>
          <p><strong>Last Check-Up Date:</strong> {patientDetails.date}</p>
          <p><strong>Height:</strong> {patientDetails.height}</p>
          <p><strong>Weight:</strong> {patientDetails.weight}</p>
          <p><strong>Haemoglobin Level:</strong> {patientDetails.haemoglobin}</p>
          <p><strong>Symptoms:</strong> {patientDetails.symptoms}</p>
          <p><strong>Doctor Diagnosis:</strong> {patientDetails.comments}</p>
          <p><strong>Medicines Recommended:</strong> {patientDetails.medicines}</p>
        </div>
      ) : (
        <p>No patient details found.</p>
      )}
    </div>
  );
}

export default SearchPage;
