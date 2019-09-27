import React from 'react';
import '../style/footer.css';

const Footer = () => (
  <div className="footer-wrapper">
    <div className="footer-wrapper-about">
      <img
        alt="company logo"
        className="wrapper-about_logo-footer"
      />
      <div className="footer-wrapper-specification">
        <a className="wrapper-specification-text" href="/">Private Policy</a>
        <p className="wrapper-specification-text">|</p>
        <a className="wrapper-specification-text" href="/">Term of Use</a>
      </div>
    </div>
    <p className="footer-wrapper-text">
      © 2019, My Letter. All rights reserved.
    </p>
  </div>
);

export default Footer;
