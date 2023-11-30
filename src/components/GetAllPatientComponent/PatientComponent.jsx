import React from 'react'

function PatientComponent({patient}) {
return (
        <div className="card">
          <div className="text-container">
            <h3>{patient.patientName}</h3>
            <p className="status">
              {patient.patientGender} ({patient.patientAge})
            </p>
            <p className="status">
              Patient ID : {patient.patientID}
            </p>
            <p className="title">Contact</p>
            <p className='author'>{patient.patientMobile}</p>
            <p className='email'>{patient.patientEmail}</p>
            <p className="availability">{patient.patientCity}</p>
          </div>
        </div>
      );
}

export default PatientComponent