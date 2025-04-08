import React from 'react'
import './intro.css'
import bg from '../../assets/MozzeLogo.jpg'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Nick</span> Clark</span>
            <p className="introPara">I'm a member of the world champion hybrid formula <br /> student team based out of the Milwaukee <br /> School of Engineering</p>
        </div>
        <img src={bg} alt="Mozee Logo" className="bg" />
    </section>
  );
}

export default Intro