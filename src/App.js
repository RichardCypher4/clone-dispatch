import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import FAQ from "./components/faq";
import Terms from './components/terms'
import Privacy from './components/privacy'
import Help from './components/help'
import Support from './components/support'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
       <Route path="/privacy" element={<Privacy />} /> 
       <Route path="/help" element={<Help />} /> 
       <Route path="/support" element={<Support />} /> 
      </Routes>
    </Router>
  );
}

export default App;