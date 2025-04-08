import React from 'react'
import './about.css'
import TeamIcon from '../../assets/ui-design.png'
import ProjectsIcon from '../../assets/website-design.png'
import CarsIcon from '../../assets/app-design.png'

const About = () => {
  return (
    <section id="about">
        <h2 className="aboutTitle">About Us</h2>
        <p className="aboutDesc">
            Dedicated to pushing the boundaries of hybrid racing technology and engineering excellence
        </p>
        <div className="aboutCards">
            <div className="aboutCard">
                <img src={TeamIcon} alt="Team Icon" className="aboutCardImg" />
                <div className="aboutCardText">
                    <h2>Meet The Team</h2>
                    <p>A diverse group of passionate engineering students working together to innovate in motorsports</p>
                </div>
            </div>
            <div className="aboutCard">
                <img src={ProjectsIcon} alt="Projects Icon" className="aboutCardImg" />
                <div className="aboutCardText">
                    <h2>Our Projects</h2>
                    <p>From concept to competition, we design and build cutting-edge hybrid race cars</p>
                </div>
            </div>
            <div className="aboutCard">
                <img src={CarsIcon} alt="Cars Icon" className="aboutCardImg" />
                <div className="aboutCardText">
                    <h2>Our Legacy</h2>
                    <p>A proud history of innovation and achievement in Formula SAE competitions</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About 