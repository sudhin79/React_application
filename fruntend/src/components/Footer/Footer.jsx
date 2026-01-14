import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="app-footer" id='boca'>
      <div className="footer-content">
        
        {/* Logo & Description */}
        <div className="footer-section footer-left">
          <img src={assets.logo} alt="Foodie Logo" className="footer-logo" />
          <p>At Foodie, we deliver more than just meals — we bring fresh flavors, quick service, and delightful experiences straight to your doorstep. Because great food deserves great delivery.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#food-display">Menu</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><img src={assets.facebook_icon} alt="Facebook" /></a>
            <a href="#"><img src={assets.linkedin_icon} alt="Instagram" /></a>
            <a href="#"><img src={assets.twitter_icon} alt="Twitter" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} <strong>Foodie</strong>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
