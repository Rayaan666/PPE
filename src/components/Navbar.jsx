import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate menu open/close
  useEffect(() => {
    if (menuOpen) {
      gsap.to('.menu-overlay', { top: 0, duration: 0.8, ease: 'power4.inOut' });
      gsap.fromTo('.menu-link-item', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4, ease: 'power3.out' }
      );
      document.body.style.overflow = 'hidden';
    } else {
      gsap.to('.menu-overlay', { top: '-100vh', duration: 0.8, ease: 'power4.inOut', delay: 0.2 });
      gsap.to('.menu-link-item', { y: -50, opacity: 0, duration: 0.4, stagger: 0.05, ease: 'power3.in' });
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Journal', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className={`navbar-editorial ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link to="/" className="brand-logo" onClick={() => setMenuOpen(false)}>
            <img src="/logo.png" alt="Perfect Party Events" className="navbar-logo-img" />
          </Link>

          <button 
            className={`menu-trigger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="trigger-text">{menuOpen ? 'Close' : 'Menu'}</span>
            <div className="trigger-lines">
              <span className="line line-1"></span>
              <span className="line line-2"></span>
            </div>
          </button>
        </div>
      </header>

      <div className="menu-overlay">
        <div className="menu-container container">
          <div className="menu-layout">
            <div className="menu-left">
              <span className="menu-label">Navigation</span>
              <ul className="menu-links">
                {navLinks.map((link, index) => (
                  <li key={index} className="menu-link-item">
                    <Link to={link.path}>
                      <span className="link-number">0{index + 1}</span>
                      <span className="link-text">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="menu-right">
              <div className="menu-info-block menu-link-item">
                <span className="menu-label">Get in Touch</span>
                <a href="mailto:hello@perfectpartyevents.ae" className="menu-contact-link">hello@perfectpartyevents.ae</a>
                <a href="tel:+971501234567" className="menu-contact-link">+971 50 123 4567</a>
              </div>
              <div className="menu-info-block menu-link-item" style={{marginTop: '3rem'}}>
                <span className="menu-label">Socials</span>
                <div className="menu-socials">
                  <a href="#">Instagram</a>
                  <a href="#">Facebook</a>
                  <a href="#">Pinterest</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
