import React from 'react';
import ContactImage from '../assets/contact.306cf7bd.svg';
import Footer from '../components/footer';
import './contact.scss'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Left Section: Form */}
        <div className="contact-text">
          <h1>Get in touch with us</h1>
          <p>
            Do you need more information or have a complaint? Leave a message and we will get right back to you.
          </p>
          
          {/* Contact Form */}
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="John Doe" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="johndoe@example.com" />

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Type your message here"></textarea>

            <button type="submit">Send message</button>
          </form>
        </div>

        {/* Right Section: Image inside an orange box */}
        <div className="contact-image">
          <img src={ContactImage} alt="Contact Illustration" />
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Contact;