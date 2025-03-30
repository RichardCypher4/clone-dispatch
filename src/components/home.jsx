import React from 'react';
import AppS from '../assets/apple.jpg';
import GoogleP from '../assets/goggle.jpg';
import Eating from "../assets/dishpatch-hero.webp"; 
import BlueSection from './bluesection';
import Joinus from './joinus';
import Question from './question';
import './home.scss'; 
import Footer from './footer';

const Home = () => {
  return (
    <div className="home-background">
      
      <div className="home-container">
        <div className="content">
          <h1>The Number #One Choice To Your Hunger Solution</h1>
          <p>The number one place to order food sharp sharp make you quench your hunger.</p>
          <div className="buttons">
            <a href="https://play.google.com/store" className="google-play"> 
              <img src={GoogleP} alt="Google Play" />
            </a>
            <a href="https://www.apple.com/app-store/" className="app-store"> 
              <img src={AppS} alt="App Store" />
            </a>
          </div>
        </div>

        <div className="image-container">
          <img src={Eating} alt="Eating pizza" />
        </div>
      </div>
      <BlueSection />
      <Joinus />
      <Question/>
      <Footer/>

    </div>
  );
};

export default Home;