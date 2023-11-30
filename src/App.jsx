import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import GetAllPatientComponent from './components/GetAllPatientComponent/GetAllPatientComponent';
import AddNewPatientComponent from './components/AddNewPatientComponent/AddNewPatientComponent';
import EditPatientComponent from './components/EditPatientComponent/EditPatientComponent';

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1>Hospital App</h1>

        <nav className="nav-menu">
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin/add">Add Patients</Link></li>
          <li><Link to="/admin/edit">Edit Patients</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<GetAllPatientComponent />} />
          <Route path="/admin/add" element={<AddNewPatientComponent />} />
          <Route path="/admin/edit" element={<EditPatientComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
