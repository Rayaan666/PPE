import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-editorial">
      <div className="container">
        
        <div className="footer-top">
          <div className="footer-col-left">
            <span className="footer-label">Ready for perfection?</span>
            <h2 className="footer-cta-text">Let's craft your <br/> <span className="subheading">legacy.</span></h2>
            <a href="#" onClick={(e) => e.preventDefault()} className="btn-editorial" style={{marginTop: '2rem'}}>
              Start the conversation
            </a>
          </div>
          
          <div className="footer-col-right">
            <div className="footer-nav-grid">
              <div className="footer-nav-col">
                <span className="footer-label">Menu</span>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>About Us</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>Services</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>Portfolio</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>Journal</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>Contact</a></li>
                </ul>
              </div>
              <div className="footer-nav-col">
                <span className="footer-label">Socials</span>
                <ul>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>Instagram</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>Pinterest</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>Facebook</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>LinkedIn</a></li>
                </ul>
              </div>
              <div className="footer-nav-col">
                <span className="footer-label">Contact</span>
                <address className="footer-address">
                  Plot 3, ME 40, Musaffah, Abu Dhabi
                </address>
                <a href="#" onClick={(e) => e.preventDefault()} className="footer-email">info@perfectpartyeventsae.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-logo-wrap">
          <img src="/logo.png" alt="Perfect Party Events Logo" className="footer-logo-img" />
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Perfect Party Events. All Rights Reserved.</p>
          <div className="legal">
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
