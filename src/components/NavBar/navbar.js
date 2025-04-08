import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/MozzeLogo.jpg';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png'
import { Link } from 'react-scroll';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='gallery' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Gallery</Link>
        <Link activeClass='active' to='reviews' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Reviews</Link>
      </div>
      <button className="desktopMenuBtn" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
        <img src={contactImg} alt="Contact" className="desktopMenuImg" />Contact Me</button>

      <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='gallery' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Gallery</Link>
        <Link activeClass='active' to='reviews' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Reviews</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>

    </nav>
  )
}

export default Navbar