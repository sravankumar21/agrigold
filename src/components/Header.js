import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="left-content">
          <p className="welcome-text">Welcome to Agrigold Pvt Ltd.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
        <div className="contact-info">
          <FaEnvelope /> customercare@agrigold.com <FaPhone /> 1800 123 5000
        </div>
      </div>
    </div>
  );
};

export default Header;
