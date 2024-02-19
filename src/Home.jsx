import React from 'react'
import Menu from './Menu.jsx'
import Departments from './Departments.jsx';
import Gallery from './Gallery.jsx';
import { Routes, Route } from 'react-router-dom';
import "./Home.css"


function Home() {
  return (
    <div className='Home'>
        <h1>Well Met!</h1>
      <Menu className="Menu"/>
    </div>
  )
}

export default Home