import React from "react";
import { Link } from "react-router-dom";
import Log from "../assets/logo.webp";
import AppS from "../assets/apple.jpg";
import GoogleP from "../assets/goggle.jpg";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img src={Log} alt="Dispatch logo" className="logo" />

          <div className="buttons">
            <a href="https://play.google.com/store" className="google-play">
              <img src={GoogleP} alt="Google Play" />
            </a>
            <a href="https://www.apple.com/app-store/" className="app-store">
              <img src={AppS} alt="App Store" />
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons">
            {/* Replace these placeholders with real links or remove target="_blank" if purely decorative */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="footer-links">
            <div className="section">
              <h3>Quick Links</h3>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/faq">FAQ</Link>
            </div>
            <div className="section">
              <h3>Legal</h3>
              <Link to="/terms">Terms</Link>
              <Link to="/privacy">Privacy</Link>
            </div>
            <div className="section">
              <h3>Support</h3>
              <Link to="/help">Help</Link>
              <Link to="/support">Support</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <hr />
        <p>© 2024 Dishpatch Africa. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;