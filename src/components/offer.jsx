import React from 'react';
import Emoji from '../assets/emoji.svg';
import Truck from '../assets/truck.svg';
import Food from '../assets/Food.svg';
import './offer.scss';

const Offer = () => {
  return (
    <div className="offer-container">
      <h1>What we offer</h1>
      <div className="cards">
        <div className="card">
          <img src={Food} alt="Food icon" />
          <h2>Restaurants</h2>
          <p>
            We partner with restaurants to make their incredible food available to more customers. 
            We provide tools and insights to help them boost orders and growth.
          </p>
        </div>
        <div className="card">
          <img src={Truck} alt="Truck icon" />
          <h2>Riders &amp; 3PLs</h2>
          <p>
            For delivery riders, we offer stability, respect, and above-average earnings.
          </p>
        </div>
        <div className="card">
          <img src={Emoji} alt="Customer icon" />
          <h2>Customers</h2>
          <p>
            For our valued customers, we promise fast, accurate orders and exceptional care.
          </p>
        </div>
      </div>
      <button className="offer-button">Get started now</button>
    </div>
  );
};

export default Offer;