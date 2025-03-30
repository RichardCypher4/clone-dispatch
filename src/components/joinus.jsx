import React from 'react';
import './joinus.scss';
import Food from '../assets/Food.svg';
import Truck from '../assets/truck.svg';

const JoinUs = () => {
  return (
    <div className="join-us">
      <h1>Join us today</h1>
      <div className="cards">
        <div className="card">
          <img src={Food} alt="Food icon" />
          <h2>Start selling</h2>
          <p>
            Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.
          </p>
          <button className="btn">Learn more</button>
        </div>
        <div className="card">
          <img src={Truck} alt="Truck icon" />
          <h2>Deliver happiness</h2>
          <p>
            Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.
          </p>
          <button className="btn">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;