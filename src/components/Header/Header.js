// header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="top-bar">
        <div className="social-icons">
          <a href="https://facebook.com" aria-label="Facebook" className="icon"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" aria-label="Twitter" className="icon"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com" aria-label="Instagram" className="icon"><i className="fab fa-instagram"></i></a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="icon"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <div className="contact-email">
          <i className="fas fa-envelope"></i>
          <span>info@finlabsindia.com</span>
        </div>
      </div>
      <div className="main-header">
        <div className="logo">
          <img src="/images/logo.png" alt="FinLabs India Logo" />
          {/* <span>finlabs</span> */}
        </div>
        <nav className="nav-links">
          <div className="dropdown">Products &#9662;</div>
          <div className="dropdown">Solutions</div>
          <div className="dropdown">Services &#9662;</div>
          <div className="dropdown">Careers</div>
          <div className="dropdown">Knowledge Centre &#9662;</div>
        </nav>
        <div className="header-actions">
          <i className="fas fa-search search"></i>
          <button className="talk-btn">Talk to us</button>
        </div>
      </div>
    </div>
  );
};

export default Header;