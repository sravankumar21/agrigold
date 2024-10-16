import React, { useState } from 'react';
import '../styles/NavbarTwo.css'; // Updated CSS path for NavbarTwo
import logo from '../images/logoagrigold.png';
import userIcon from '../images/user-icon.png';

const NavbarTwo = () => {
  const [cartCount, setCartCount] = useState(0); // State to manage cart count

  const handleSignInClick = () => {
    console.log("Sign In button clicked");
  };

  return (
    <nav className="navbar-two">
      {/* Logo Button */}
      <button className="logo-button-two" onClick={() => window.location.href = '/'}>
        <img src={logo} alt="Agrigold Logo" />
      </button>

      {/* Search Bar */}
      <div className="search-bar-two">
        <input type="text" placeholder="Search for seeds..." />
        <button>Search</button>
      </div>

      {/* User Icon and Cart */}
      <div className="user-cart-two">
        <button className="sign-in-button-two" onClick={handleSignInClick}>
          <img src={userIcon} alt="User Icon" className="user-icon-two" />
          <span>Sign In</span>
        </button>
        <button className="cart-button-two">
          <span className="cart-icon-two">🛒</span>
          <span className="cart-count-two">{cartCount}</span>
        </button>
      </div>
    </nav>
  );
};

export default NavbarTwo;
