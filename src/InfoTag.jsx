import React from 'react'
import "./InfoTag.css"
import { Link } from "react-router-dom";

function InfoTag({art}) {
  return (
    <div className='artInfo'>
      <div className='limit' >
        <h3>{art.title}</h3>
        <p>Artist: {art.artistDisplayName}</p>
        <p>Date: {art.objectDate}</p>
        <p>Culture: {art.culture}</p>
        <p>Medium: {art.medium}</p>
        </div>
        <Link to={art.objectURL} target='blank'>Learn More</Link>
    </div>
  )
}

export default InfoTag