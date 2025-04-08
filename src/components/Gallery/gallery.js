import React from 'react'
import './gallery.css'
import BeholdWidget from '@behold/react'

const Gallery = () => {
  return (
    <section id="gallery">
      <h2 className="galleryTitle">Gallery</h2>
      <span className="galleryDesc">Check out our latest achievements and behind-the-scenes moments</span>
      <BeholdWidget feedId="UaeJTMCGan7Zdp7sQULr"/>
    </section>
  )
}

export default Gallery 