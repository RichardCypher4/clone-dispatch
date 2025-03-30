import React from 'react';
import Footer from './footer';
import './help.scss';

const Help = () => {
  return (
    <div className="help-container">
      <h1>Help Center</h1>
      <p className="subtitle">Find answers to common questions</p>
      
      <div className="help-sections">
        <div className="help-card">
          <h2>Ordering Help</h2>
          <ul>
            <li>How to place an order</li>
            <li>Tracking your delivery</li>
            <li>Modifying/canceling orders</li>
            <li>Payment methods</li>
          </ul>
        </div>

        <div className="help-card">
          <h2>Account Help</h2>
          <ul>
            <li>Creating an account</li>
            <li>Resetting passwords</li>
            <li>Updating profile</li>
            <li>Referral program</li>
          </ul>
        </div>

        <div className="help-card">
          <h2>Delivery Help</h2>
          <ul>
            <li>Delivery times</li>
            <li>Contacting drivers</li>
            <li>Missing items</li>
            <li>Delivery fees</li>
          </ul>
        </div>
      </div>

      <div className="contact-prompt">
        <p>Still need help? <a href="/contact">Contact our support team</a></p>
      </div>

      <Footer />
    </div>
  );
};

export default Help;