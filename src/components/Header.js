import React from 'react';
import '../style/header.css';

const Header = () => (
  <div className="header-wrapper">
    <a
      className="header-wrapper_Logo"
      href="/"
    >
      <img
        alt="company logo"
        className="header-logo"
      />
    </a>
    <div className="header-wrapper_text">
      Edit details in your cover letter
    </div>
  </div>
);

export default Header;
