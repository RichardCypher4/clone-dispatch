import React from 'react';
import App from '../assets/AppPreview.webp'
import GoogleP from '../assets/goggle.jpg'
import AppS from '../assets/apple.jpg';
import './bluesection.scss';

const BlueSection = () => {
  return (
    <div className="blue-section">
 
      <div className="phone-images">
       
        <img src={App} alt="Phone Two" />
      </div>

      <div className="text-content">
        <h1>Try the App</h1>
        <p>
          Get meals fast! Browse African and continental restaurants on our app.
          Order and have food delivered in minutes.
        </p>
        <div className="buttons">
          <a href="https://play.google.com/store" className="google-play"> 
            <img src={GoogleP} alt="Google Play" />
          </a>
          <a href="https://www.apple.com/app-store/" className="app-store"> 
            <img src={AppS} alt="App Store" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlueSection;