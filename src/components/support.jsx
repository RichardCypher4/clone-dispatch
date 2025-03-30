import React from 'react';
import Footer from './footer';
import './support.scss';

const Support = () => {
  return (
    <div className="support-container">
      <h1>Contact Support</h1>
      <p className="subtitle">We're here to help you 24/7</p>
      
      <div className="support-options">
        <div className="support-card">
          <h2>Live Chat</h2>
          <p>Instant help from our support team</p>
          <button className="support-button">Start Chat</button>
        </div>

        <div className="support-card">
          <h2>Email Us</h2>
          <p>Response within 24 hours</p>
          <button className="support-button">support@dishpatch.ng</button>
        </div>

        <div className="support-card">
          <h2>Call Us</h2>
          <p>Available 8am-8pm daily</p>
          <button className="support-button">+234 800 123 4567</button>
        </div>
      </div>

      <div className="faq-prompt">
        <p>Check our <a href="/help">Help Center</a> for quick answers</p>
      </div>

      <Footer />
    </div>
  );
};

export default Support;