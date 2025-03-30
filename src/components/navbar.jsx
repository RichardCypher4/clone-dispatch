import React, { useState } from "react";
import { Link } from "react-router-dom";
import Log from "../assets/logo.webp";
import "./navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={Log} alt="Dishpatch Logo" />
        </Link>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
        </div>

      
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
          <li>
            <Link to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;