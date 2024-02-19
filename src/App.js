import './App.css';
import React from 'react'
import Home from './Home.jsx';
import Menu from './Menu.jsx'
import Departments from './Departments.jsx';
import Gallery from './Gallery.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/departments" element={<Departments/>}/>
        <Route path="/gallery-walk" element={<Gallery/>}/>
      </Routes>
    </div>
  );
}

export default App;
