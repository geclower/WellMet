import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav>
        <Link to="/" className='navLink'>Home</Link>
        <Link to="/departments" className='navLink'>Departments</Link>
        <Link to="/random" className='navLink'>Random</Link>
        <Link to="https://www.metmuseum.org/" className='navLink' target='blank' >Visit</Link>
        </nav>
  )
}

export default Menu