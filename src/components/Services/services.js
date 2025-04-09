import React from 'react'
import './services.css'
import CustomIcon from '../../assets/ui-design.png'
import ServiceIcon from '../../assets/website-design.png'
import ResizeIcon from '../../assets/app-design.png'

const Services = () => {
  return (
    <section id="services">
        <h3 className="sectionTitle">Our Services</h3>
        <div className="servicesCards">
            <div className="serviceCard">
                <img src={CustomIcon} alt="Custom Watch Icon" className="serviceCardImg" />
                <div className="serviceCardText">
                    <h2>Custom Watch Building</h2>
                    <p>Transform your vision into reality with our custom watch building service. We'll help you design and create a unique timepiece that perfectly matches your style and preferences.</p>
                </div>
            </div>
            <div className="serviceCard">
                <img src={ServiceIcon} alt="Service Icon" className="serviceCardImg" />
                <div className="serviceCardText">
                    <h2>Watch Servicing & Repair</h2>
                    <p>Keep your timepiece running perfectly with our professional watch servicing and repair services. We handle everything from routine maintenance to complex repairs.</p>
                </div>
            </div>
            <div className="serviceCard">
                <img src={ResizeIcon} alt="Resize Icon" className="serviceCardImg" />
                <div className="serviceCardText">
                    <h2>Bracelet Resizing</h2>
                    <p>Ensure your watch fits perfectly with our professional bracelet resizing service. We'll adjust your watch band to provide the most comfortable fit.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services 