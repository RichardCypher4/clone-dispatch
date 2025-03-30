import React from 'react';
import './activities.scss';
import Chicken from '../assets/girl.ab897697.svg';

const Activities = () => {
  return (
    <div className="activities-container">
      <div className="text-content">
        <h1>What we do</h1>
        <p>
          Our team has decades of combined experience in the food and logistics industries. 
          This expertise allows us to create technology and systems to connect customers, 
          restaurants, and riders in a seamless delivery ecosystem.
        </p>
        <p>
          At the core, we are a people-centric company. We care deeply about the communities 
          we serve. We want to empower local businesses to thrive, provide income opportunities 
          on flexible schedules, and bring joy by satisfying food cravings quickly.
        </p>
        <button>Get started</button>
      </div>

      <div className="image-content">
        <img src={Chicken} alt="chicken pizza" />
      </div>
    </div>
  );
};

export default Activities;