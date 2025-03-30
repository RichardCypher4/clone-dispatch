import React from 'react';
import Footer from '../components/footer';
import Rider from '../assets/rider.webp';
import Activities from '../components/activities';
import Offer from '../components/offer';
import './about.scss';

const About = () => {
  return (
    
    <div className="about-container">
    
      <h1>About us</h1>
      <p>
        We started this company in 2023 with the goal of making food delivery
        effortless, affordable, and accessible.
      </p>

     <div className='section'>
      <div className="image-section">
        <img src={Rider} alt="Delivery Rider" className="rider-image" />
        <h2 className="image-text">We are coming to you</h2>
      </div>
      </div>
      <Activities/>
      <Offer/>
      <Footer/>
    </div>
     
  );
};

export default About;