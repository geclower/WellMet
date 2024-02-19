import React from 'react'
import "./Gallery.css"
import Picture from './Picture'
import InfoTag from './InfoTag'
import Menu from './Menu'

function Gallery() {
  return (
    <div>
        <Picture/>
        <InfoTag/>
        <Menu/>
    </div>
  )
}

export default Gallery