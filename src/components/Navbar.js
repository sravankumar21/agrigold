import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../styles/Navbar.css';
import ImageCarousel from './ImageCarousel';
import logo from '../images/logoagrigold.png'; // Import your logo image
import userIcon from '../images/user-icon.png'; // Import your user icon image

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [cartCount, setCartCount] = useState(0); // State to manage cart count
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

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
                  <a href="#">Drip Lanes</a>
                  <a href="#">Drip Irrigation</a>
                  <a href="#">Drip Tapes</a>
                  <a href="#">Drip Tubes</a>
                </div>
              )}
            </li>
            <li>
              <a href="#">Segments</a>
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
