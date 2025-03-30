import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AppS from "../assets/apple.jpg";
import GoogleP from "../assets/goggle.jpg";
import Eating from "../assets/dishpatch-hero.webp";
import BlueSection from "./bluesection";
import Joinus from "./joinus";
import Question from "./question";
import Footer from "./footer";
import AnimatedText from './animatedtext'
import "./home.scss";

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="home-background">
      <div className="home-container">
        <div className="content">
          <AnimatedText
            text="The Number #One Choice To Your Hunger Solution"
            className="animated-heading"
          />
          <AnimatedText
            text="The number one place to order food sharp sharp make you quench your hunger."
            className="animated-paragraph"
          />
          <div className="buttons">
            <a href="https://play.google.com/store" className="google-play">
              <img src={GoogleP} alt="Google Play" />
            </a>
            <a href="https://www.apple.com/app-store/" className="app-store">
              <img src={AppS} alt="App Store" />
            </a>
          </div>
        </div>

        <motion.div
          className="image-container"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={Eating} alt="Eating pizza" />
        </motion.div>
      </div>
      <BlueSection />
      <Joinus />
      <Question />
      <Footer />
    </div>
  );
};

export default Home;