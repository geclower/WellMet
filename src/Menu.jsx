import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/departments">Departments</Link>
        <Link to="/gallery-walk">Random</Link>
        <Link to="https://www.metmuseum.org/">Visit</Link>
        </nav>
  )
}

export default Menu