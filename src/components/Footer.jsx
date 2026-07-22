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
            <Link to="/contact" className="btn-editorial" style={{marginTop: '2rem'}}>
              Start the conversation
            </Link>
          </div>
          
          <div className="footer-col-right">
            <div className="footer-nav-grid">
              <div className="footer-nav-col">
                <span className="footer-label">Menu</span>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/gallery">Portfolio</Link></li>
                  <li><Link to="/blogs">Journal</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              <div className="footer-nav-col">
                <span className="footer-label">Socials</span>
                <ul>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Pinterest</a></li>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">LinkedIn</a></li>
                </ul>
              </div>
              <div className="footer-nav-col">
                <span className="footer-label">Contact</span>
                <address className="footer-address">
                  Dubai Design District<br/>
                  Building 7, Office 401<br/>
                  Dubai, UAE
                </address>
                <a href="mailto:hello@perfectpartyevents.ae" className="footer-email">hello@perfectpartyevents.ae</a>
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
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
