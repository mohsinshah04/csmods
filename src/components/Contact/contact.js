import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_s6qzuij', 
            'template_0rr7ksp', 
            form.current, 
            { publicKey: '1sbX5g73u7qNp0Eae' }
        ).then(
            () => {
                form.current.reset();
                alert('Email Sent');
            },
            (error) => {
                console.error('Failed to send email:', error.text);
            }
        );
    };

    const renderStars = () => (
        <div className="stars">
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className="starIcon" />
            ))}
        </div>
    );

    return (
        <section id="contactPage">
            <section id="reviews">
                <h1 className="contactPageTitle">What People Say About Us</h1>
                <div className="reviewsContainer">
                    <div className="reviewCard">
                        {renderStars()}
                        <p className="reviewText">
                            "The team's dedication to innovation and sustainability is truly impressive. 
                            Their hybrid formula car showcases cutting-edge technology while maintaining 
                            exceptional performance standards."
                        </p>
                        <div className="reviewer">
                            <h3>John Smith</h3>
                            <p>Industry Expert</p>
                        </div>
                    </div>

                    <div className="reviewCard">
                        {renderStars()}
                        <p className="reviewText">
                            "As a sponsor, we've been amazed by the professionalism and technical expertise 
                            of the MSOE team. Their achievements in competitions prove their excellence 
                            in engineering and teamwork."
                        </p>
                        <div className="reviewer">
                            <h3>Sarah Johnson</h3>
                            <p>Corporate Sponsor</p>
                        </div>
                    </div>

                    <div className="reviewCard">
                        {renderStars()}
                        <p className="reviewText">
                            "The team's commitment to excellence and their innovative approach to 
                            hybrid technology sets them apart. They're not just building cars, 
                            they're shaping the future of motorsports."
                        </p>
                        <div className="reviewer">
                            <h3>Michael Chen</h3>
                            <p>Racing Professional</p>
                        </div>
                    </div>
                </div>
            </section>

            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to contact me with any questions.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input 
                        type="text" 
                        className="name" 
                        placeholder="Your Name" 
                        name="from_name" 
                        required 
                    />
                    <input 
                        type="email" 
                        className="email" 
                        placeholder="Your Email" 
                        name="from_email" 
                        required 
                    />
                    <textarea 
                        className="msg" 
                        name="message" 
                        rows="5" 
                        placeholder="Your Message" 
                        required 
                    />
                    <button type="submit" className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/mozee-motorsports/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="link"/>
                        </a>
                        <a href="https://www.tiktok.com/@mozee.motorsports" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTiktok} className="link"/>
                        </a>
                        <a href="https://www.instagram.com/mozeemotorsports/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="link"/>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact