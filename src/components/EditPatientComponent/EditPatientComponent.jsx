import React, { useState } from 'react';
import axios from 'axios';
// import './EditPatientsComponent.css';

const EditPatientsComponent = () => {
  const [patientData, setPatientData] = useState({
    patientName: '',
    patientID: '',
    patientAge: '',
    patientGender: '',
    patientCity: '',
    patientMobile: '',
    patientEmail: '',
  });

  const { patientName, patientID, patientAge, patientGender, patientCity, patientMobile, patientEmail } = patientData;

  const patientIDHandler = (event) => {
    setPatientData({
      ...patientData,
      patientID: event.target.value,
    });
  };

  const patientIDValidator = async () => {
    if (patientID.length !== 0) {
      try {
        const response = await axios.post('http://localhost:3500/api/v1/patients/validate', {
          patientID: patientID,
        });
        const data = response.data;
        setPatientData({
          patientName: data.patientName,
          patientAge: data.patientAge,
          patientGender: data.patientGender,
          patientCity: data.patientCity,
          patientMobile: data.patientMobile,
          patientEmail: data.patientEmail,
        });
      } catch (error) {
        console.error('Error validating patient ID:', error);
      }
    }
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch('http://localhost:3500/api/v1/patients', patientData);
      const data = response.data;
      if (data.message) {
        alert(data.message);
      } else {
        alert(`Data of ${patientName} is updated successfully`);
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Error updating patient data:', error);
    }
  };

  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
      <h2>Updating patient data</h2>

      <div className='form-group'>
        <label>Patient ID</label>
        <input
          type='text'
          placeholder='Enter the patient ID'
          value={patientID}
          onChange={patientIDHandler}
          required
        />
      </div>
      <div>
        <button type='button' onClick={patientIDValidator}>
          Check
        </button>
      </div>

      <div className='form-group'>
        <label>Patient Name</label>
        <input
          type='text'
          placeholder='Enter the patient name'
          value={patientName}
          onChange={(e) => setPatientData({ ...patientData, patientName: e.target.value })}
          required
        />
      </div>

      <div className='form-group'>
        <label>Patient Age</label>
        <input
          type='text'
          pattern='[0-9]{2}'
          placeholder='Enter the patient age'
          value={patientAge}
          onChange={(e) => setPatientData({ ...patientData, patientAge: e.target.value })}
          required
        />
      </div>

      <div className='form-group'>
        <label>Patient Gender</label>
        <select value={patientGender} onChange={(e) => setPatientData({ ...patientData, patientGender: e.target.value })} required>
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
          value={patientCity}
          onChange={(e) => setPatientData({ ...patientData, patientCity: e.target.value })}
          required
        />
      </div>

      <div className='form-group'>
        <label>Patient Mobile</label>
        <input
          type='text'
          placeholder='Enter the patient mobile'
          pattern='[789][0-9]{9}'
          value={patientMobile}
          onChange={(e) => setPatientData({ ...patientData, patientMobile: e.target.value })}
          required
        />
      </div>

      <div className='form-group'>
        <label>Patient Email</label>
        <input
          type='text'
          placeholder='Enter the patient Email'
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          value={patientEmail}
          onChange={(e) => setPatientData({ ...patientData, patientEmail: e.target.value })}
          required
        />
      </div>

      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default EditPatientsComponent;
