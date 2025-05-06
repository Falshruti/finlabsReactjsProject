import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      {/* Main footer content */}
      {/* Logo Section */}
        <div className="footer-logo-section">
          <img src="./images/Finlabs-logo.webp" alt="Finlabs Logo" />
        </div>
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Navigation Columns */}
            <div className="footer-nav-columns">
              {/* Left Column */}
              <div className="footer-nav-column">
                <ul className="footer-nav">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about-us">About Us</a></li>
                  <li><a href="/career">Career</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/contact-us">Contact Us</a></li>
                  <li><a href="/download-brochure">Download Brochure</a></li>
                </ul>
              </div>

              {/* Middle Column */}
              <div className="footer-nav-column">
                <ul className="footer-nav">
                  <li><a href="/products">Products</a></li>
                  <li><a href="/solutions">Solutions</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/knowledge-centre">Knowledge centre</a></li>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                  <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                </ul>
              </div>

              {/* Find Us Column */}
              <div className="footer-contact-column">
                <h3 className="contact-title">Find us</h3>
                <div className="contact-info">
                  <a href="mailto:info@finlabsindia.com" className="contact-link">info@finlabsindia.com</a>
                  <a href="tel:+919372956429" className="contact-link">+91 9372956429</a>
                  
                  {/* Social Media Icons */}
                  <div className="social-icons">
                    <a href="#" className="social-icon linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="social-icon instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-icon facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Subscribe Column */}
              <div className="footer-subscribe-column">
                <p className="subscribe-text">Subscribe to receive updates from us. You can unsubscribe any time.</p>
                <div className="subscribe-form">
                  <input type="text" placeholder="Name" className="form-input" />
                  <input type="email" placeholder="Email" className="form-input" />
                  <button className="subscribe-button">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom / Copyright */}
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <p>© copyright 2017-2024 Finlabs India Pvt. Ltd. | All Rights Reserved</p>
          </div>
          <div className="back-to-top">
            <a href="#top">
              <i className="fas fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
