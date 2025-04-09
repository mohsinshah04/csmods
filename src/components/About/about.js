import React from 'react'
import './about.css'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <section id="about">
        <h1 className="aboutTitle">About CSMods</h1>
        <p className="aboutDesc">
            Welcome to CSMods, where we transform Seiko watches into unique timepieces that reflect your personal style.
        </p>
        
        <div className="aboutSections">
            <div className="aboutSection">
                <h2 className="sectionTitle">What is a Seiko Mod?</h2>
                <p className="sectionDesc">
                    A Seiko mod is a customized version of a Seiko watch, where we replace or enhance various components 
                    to create a unique timepiece. From dials and hands to bezels and crystals, we can transform your 
                    watch into something truly special.
                </p>
            </div>

            <div className="aboutSection">
                <h2 className="sectionTitle">Why Choose a Seiko Mod?</h2>
                <p className="sectionDesc">
                    Seiko mods offer the perfect blend of quality and customization. You get the reliability of a Seiko 
                    movement with the personal touch of custom components. Whether you want a unique color scheme, 
                    improved functionality, or a completely new look, a Seiko mod lets you create a watch that's 
                    uniquely yours.
                </p>
            </div>

            <div className="aboutSection">
                <h2 className="sectionTitle">How to Get Your Custom Seiko Mod</h2>
                <p className="sectionDesc">
                    Ready to create your dream watch? It's simple! Just reach out to us through the contact form below, 
                    and we'll work with you to design the perfect Seiko mod. Whether you have a specific vision in mind 
                    or need guidance, we're here to help bring your watch dreams to life.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About 