import React, { useState } from 'react';
import axios from 'axios';
import '../AddNewPatientComponent/AddNewPatientComponent.css'
const AddNewPatientsComponent = () => {
  const [patientData, setPatientData] = useState({
    patientName: '',
    patientID: '',
    patientAge: '',
    patientGender: '',
    patientCity: '',
    patientMobile: '',
    patientEmail: '',
  });

  const {
    patientName,
    patientID,
    patientAge,
    patientGender,
    patientCity,
    patientMobile,
    patientEmail,
  } = patientData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPatientData({
      ...patientData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3500/api/v1/patients', patientData);
      if (response.data.message) {
        alert(response.data.message);
      } else {
        alert(`Data of ${response.data.patientName} is added successfully`);
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Error adding patient data:', error);
    }
  };

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <h2>Adding a new patient data</h2>

      <div className='form-group'>
        <label>Patient Name</label>
        <input
          type='text'
          placeholder='Enter the patient name'
          name='patientName'
          value={patientName}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label>Patient ID</label>
        <input
          type='text'
          placeholder='Enter the patient ID'
          name='patientID'
          value={patientID}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label>Patient Age</label>
        <input
          type='text'
          pattern='[0-9]{2}'
          placeholder='Enter the patient age'
          name='patientAge'
          value={patientAge}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label>Patient Gender</label>
        <select name='patientGender' value={patientGender} onChange={handleChange} required>
          <option value="">-- Please select --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className='form-group'>
        <label>Patient City</label>
        <input
          type='text'
          placeholder='Enter the patient city'
          name='patientCity'
          value={patientCity}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label>Patient Mobile </label>
        <input
          type='text'
          placeholder='Enter the patient mobile'
          pattern='[789][0-9]{9}'
          name='patientMobile'
          value={patientMobile}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label>Patient Email</label>
        <input
          type='text'
          placeholder='Enter the patient Email'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
          name='patientEmail'
          value={patientEmail}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default AddNewPatientsComponent;
