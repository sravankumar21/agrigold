// src/components/NavbarTwo.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavbarTwo.css';
import logo from '../images/logoagrigold.png';
import userIcon from '../images/user-icon.png';

const NavbarTwo = ({ cartCount }) => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    console.log("Sign In button clicked");
  };

  return (
    <nav className="navbar-two">
      <button className="logo-button-two" onClick={() => navigate('/')}>
        <img src={logo} alt="Agrigold Logo" />
      </button>

      <div className="search-bar-two">
        <input type="text" placeholder="Search for seeds..." />
        <button>Search</button>
      </div>

      <div className="user-cart-two">
        <button className="sign-in-button-two" onClick={handleSignInClick}>
          <img src={userIcon} alt="User Icon" className="user-icon-two" />
          <span>Sign In</span>
        </button>
        <button className="cart-button-two" onClick={() => navigate('/cart')}>
          <span className="cart-icon-two">🛒</span>
          <span className="cart-count-two">{cartCount}</span>
        </button>
      </div>
    </nav>
  );
};

export default NavbarTwo;
