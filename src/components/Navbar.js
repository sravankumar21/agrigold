import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ImageCarousel from './ImageCarousel';
import logo from '../images/logoagrigold.png';
import userIcon from '../images/user-icon.png';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdown = (menu) => {
    setDropdown(menu === dropdown ? null : menu);
  };

  const handleSignInClick = () => {
    console.log("Sign In button clicked");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <img src={logo} alt="Agrigold Logo" />
          </div>

          {/* Hamburger icon for mobile */}
          <div className="hamburger" onClick={toggleMobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => handleDropdown('intro')}
              onMouseLeave={() => setDropdown(null)}
            >
              <a href="#">Intro of Us</a>
              {dropdown === 'intro' && (
                <div className="dropdown-content">
                  <Link to="/about">About Us</Link>
                  <a href="#">Founder</a>
                  <a href="#">Our Journey</a>
                  <a href="#">Milestones</a>
                </div>
              )}
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => handleDropdown('products')}
              onMouseLeave={() => setDropdown(null)}
            >
              <a href="#">Products</a>
              {dropdown === 'products' && (
                <div className="dropdown-content">
                  <a href="#">Drip Irrigation</a>
                  <a href="#">Micro & Mini Sprinklers</a>
                  <a href="#">Sprinkler Irrigation</a>
                  <a href="#">Filters, Dosing Pump & Injectors</a>
                  <a href="#">PVC & HDPE Piping Systems</a>
                  <a href="#">Plumbing & Drainage Systems</a>
                  <a href="#">Plastic Sheets</a>
                  <a href="#">Planting Material</a>
                  <a href="#">Environment Controlled Agriculture</a>
                  <a href="#">Green Energy Products</a>
                  <a href="#">Turnkey Projects</a>
                </div>
              )}
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => handleDropdown('segments')}
              onMouseLeave={() => setDropdown(null)}
            >
              <a href="#">Segments</a>
              {dropdown === 'segments' && (
                <div className="dropdown-content">
                  <a href="#">Micro Irrigation</a>
                  <a href="#">Agri Inputs</a>
                  <a href="#">Building & Construction</a>
                  <a href="#">Infrastructure & Public Utilities</a>
                  <a href="#">Industrial</a>
                  <a href="#">End to End Solutions</a>
                </div>
              )}
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>

          <div className="user-cart">
            <button className="sign-in-button" onClick={handleSignInClick}>
              <img src={userIcon} alt="User Icon" className="user-icon" />
              <span>Sign In</span>
            </button>
            <button className="cart-button">
              <span className="cart-icon">🛒</span>
              <span className="cart-count">{cartCount}</span>
            </button>
          </div>
        </div>
      </nav>
      <ImageCarousel />
    </>
  );
};

export default Navbar;
