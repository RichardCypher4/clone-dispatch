import React from "react";
import { motion } from "framer-motion";
import App from "../assets/AppPreview.webp";
import GoogleP from "../assets/goggle.jpg";
import AppS from "../assets/apple.jpg";
import "./bluesection.scss";

const BlueSection = () => {
  return (
    <motion.div
      className="blue-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Phone Image */}
      <motion.div
        className="phone-images"
        initial={{ opacity: 0, scale: 0.8, rotate: -10, x: -50 }}
        animate={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.img
          src={App}
          alt="Phone Preview"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Text Content */}
      <motion.div className="text-content">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Try the App
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Get meals fast! Browse African and continental restaurants on our app.
          Order and have food delivered in minutes.
        </motion.p>

        {/* Download Buttons */}
        <motion.div
          className="buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          <a href="https://play.google.com/store">
            <motion.img
              src={GoogleP}
              alt="Google Play"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
          </a>
          <a href="https://www.apple.com/app-store/">
            <motion.img
              src={AppS}
              alt="App Store"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BlueSection;