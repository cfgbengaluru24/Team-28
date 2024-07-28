import React, { useState } from 'react';
import './SearchPage.css';

function SearchPage() {
  const [filter, setFilter] = useState('name');
  const [query, setQuery] = useState('');
  const [patientDetails, setPatientDetails] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8100/api/doctor/findPatientBy${filter.charAt(0).toUpperCase() + filter.slice(1)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [filter]: query }),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setPatientDetails(data);
      setError(''); // Clear error
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="search-container">
      <h1 className="search-header">Search Page</h1>
      <div className="search-controls">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="govtId">Govt ID</option>
          <option value="name">Name</option>
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
      {error && <p className="error-message">{error}</p>}
      {patientDetails ? (
        <div className="patient-details">
          <h2>Patient Details</h2>
          <p><strong>Name:</strong> {patientDetails.name}</p>
          <p><strong>Date of Birth:</strong> {patientDetails.dob}</p>
          <p><strong>Gender:</strong> {patientDetails.gender}</p>
          <p><strong>Blood Group:</strong> {patientDetails.blood}</p>
          <p><strong>Location:</strong> {patientDetails.location}</p>
          <p><strong>Records:</strong> {patientDetails.Records}</p>
        </div>
      ) : (
        <p>No patient details found.</p>
      )}
    </div>
  );
}

export default SearchPage;
