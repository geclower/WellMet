import './App.css';
import React from 'react'
import Home from './Home.jsx';
import Random from './Random.jsx'
import Departments from './Departments.jsx';
import Gallery from './Gallery.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/departments" element={<Departments/>}/>
        <Route path="/gallery-walk/:department_id" element={<Gallery departmentID=""/>}/>
        <Route path="/random" element={<Random/>}/>
      </Routes>
    </div>
  );
}

export default App;
