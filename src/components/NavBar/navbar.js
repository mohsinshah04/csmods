import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/MozzeLogo.jpg';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  const handleContactClick = () => {
    setActiveSection('contact');
    document.getElementById('contact').scrollIntoView({behavior: 'smooth', block: 'end'});
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />
      <div className="desktopMenu">
        <Link 
          activeClass='active' 
          to='intro' 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className={`desktopMenuListItem ${activeSection === 'intro' ? 'active' : ''}`}
          onClick={() => handleSectionClick('intro')}
        >
          Home
        </Link>
        <Link 
          activeClass='active' 
          to='about' 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className={`desktopMenuListItem ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => handleSectionClick('about')}
        >
          About
        </Link>
        <Link 
          activeClass='active' 
          to='services' 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className={`desktopMenuListItem ${activeSection === 'services' ? 'active' : ''}`}
          onClick={() => handleSectionClick('services')}
        >
          Services
        </Link>
        <Link 
          activeClass='active' 
          to='gallery' 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className={`desktopMenuListItem ${activeSection === 'gallery' ? 'active' : ''}`}
          onClick={() => handleSectionClick('gallery')}
        >
          Gallery
        </Link>
        <Link 
          activeClass='active' 
          to='reviews' 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className={`desktopMenuListItem ${activeSection === 'reviews' ? 'active' : ''}`}
          onClick={() => handleSectionClick('reviews')}
        >
          Reviews
        </Link>
      </div>
      <button 
        className={`desktopMenuBtn ${activeSection === 'contact' ? 'active' : ''}`}
        onClick={handleContactClick}
      >
        <img src={contactImg} alt="Contact" className="desktopMenuImg" />Contact Me
      </button>

      <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
        <Link 
          activeClass='active' 
          to='intro' 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className={`listItem ${activeSection === 'intro' ? 'active' : ''}`}
          onClick={() => handleSectionClick('intro')}
        >
          Home
        </Link>
        <Link 
          activeClass='active' 
          to='about' 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className={`listItem ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => handleSectionClick('about')}
        >
          About
        </Link>
        <Link 
          activeClass='active' 
          to='services' 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className={`listItem ${activeSection === 'services' ? 'active' : ''}`}
          onClick={() => handleSectionClick('services')}
        >
          Services
        </Link>
        <Link 
          activeClass='active' 
          to='gallery' 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className={`listItem ${activeSection === 'gallery' ? 'active' : ''}`}
          onClick={() => handleSectionClick('gallery')}
        >
          Gallery
        </Link>
        <Link 
          activeClass='active' 
          to='reviews' 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className={`listItem ${activeSection === 'reviews' ? 'active' : ''}`}
          onClick={() => handleSectionClick('reviews')}
        >
          Reviews
        </Link>
        <Link 
          activeClass='active' 
          to='contact' 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className={`listItem ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={() => handleSectionClick('contact')}
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar