// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../styles/Navbar.css';
import ImageCarousel from './ImageCarousel';
import logo from '../images/logoagrigold.png'; // Import your logo image
import userIcon from '../images/user-icon.png'; // Import your user icon image

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [cartCount, setCartCount] = useState(0); // State to manage cart count

  const handleDropdown = (menu) => {
    setDropdown(menu === dropdown ? null : menu);
  };

  const handleSignInClick = () => {
    // Logic to open sign-in form goes here
    console.log("Sign In button clicked");
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Agrigold Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link> {/* Changed to Link */}
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => handleDropdown('intro')}
            onMouseLeave={() => setDropdown(null)}
          >
            <a href="#">Intro of Us</a>
            {dropdown === 'intro' && (
              <div className="dropdown-content">
                <Link to="/about">About Us</Link> {/* Changed to Link */}
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

        {/* User Icon and Cart Section */}
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
      </nav>
      <ImageCarousel />
    </>
  );
};

export default Navbar;
