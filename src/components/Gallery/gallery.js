import React, { useEffect } from 'react'
import './gallery.css'
import BeholdWidget from '@behold/react'

const Gallery = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://w.behold.so/widget.js'
    document.head.appendChild(script)
  }, [])

  return (
    <section id="gallery">
      <h2 className="galleryTitle">Gallery</h2>
      <span className="galleryDesc">Check out our latest achievements and behind-the-scenes moments</span>
      <behold-widget feed-id="d72aoxip6EPdSjADx3ft" layout="grid" columns="3" spacing="1"></behold-widget>
    </section>
  )
}

export default Gallery 