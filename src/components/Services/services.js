import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section id="services">
      <h1 className="servicesTitle">Our Services</h1>
      <p className="servicesDesc">From custom watch building to professional servicing, we offer comprehensive solutions for all your watch needs.</p>
      <div className="servicesContainer">
        <div className="serviceCard">
          <h2 className="sectionTitle">Custom Watches</h2>
          <p className="sectionDesc">
            Transform your vision into reality with our custom watch building service. We'll help you design and create a unique timepiece that perfectly matches your style and preferences.
          </p>
        </div>
        <div className="serviceCard">
          <h2 className="sectionTitle">Service & Repair</h2>
          <p className="sectionDesc">
            Keep your timepiece running perfectly with our professional watch servicing and repair services. We handle everything from routine maintenance to complex repairs.
          </p>
        </div>
        <div className="serviceCard">
          <h2 className="sectionTitle">Bracelet Resizing</h2>
          <p className="sectionDesc">
            Ensure your watch fits perfectly with our professional bracelet resizing service. We'll adjust your watch band to provide the most comfortable fit.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services 