import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import ImageCarousel from './ImageCarousel';
import logo from '../images/logoagrigold.png';
import userIcon from '../images/user-icon.png';
import { jwtDecode } from 'jwt-decode'; // Correct import

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    
    if (authToken) {
      // Optionally, decode the token to check its validity (e.g., expiration date)
      try {
        const decoded = jwtDecode(authToken); // Decode the token (if you want to check expiration)
        const isTokenValid = decoded.exp > Date.now() / 1000; // Check if token is expired
        if (isTokenValid) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false); // Token is expired
        }
      } catch (error) {
        setIsLoggedIn(false); // If there's an error decoding, assume token is invalid
      }
    } else {
      setIsLoggedIn(false); // No token, user is not logged in
    }
  }, []);

  const handleDropdown = (menu) => {
    setDropdown(menu === dropdown ? null : menu);
  };

  const handleSignInClick = () => {
    // Navigate to login page if the user is not logged in
    if (!isLoggedIn) {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove the token from localStorage
    setIsLoggedIn(false); // Update state to reflect user is logged out
    navigate('/'); // Redirect to home page after logout
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
            {/* Single Button: If logged in, show Log Out, otherwise show Sign In */}
            <button className="sign-in-button" onClick={isLoggedIn ? handleLogout : handleSignInClick}>
              <img src={userIcon} alt="User Icon" className="user-icon" />
              <span>{isLoggedIn ? 'Log Out' : 'Sign In'}</span>
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
