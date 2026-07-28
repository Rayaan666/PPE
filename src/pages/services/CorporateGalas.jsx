import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CorporateGalas.css';

gsap.registerPlugin(ScrollTrigger);

const CorporateGalas = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero Parallax
      gsap.to('.gala-hero-img', {
        y: '20%', ease: 'none', scrollTrigger: {
          trigger: '.gala-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Hero Elements Reveal
      gsap.from('.gala-hero-title', {
        x: -50, opacity: 0, duration: 1.5, ease: 'power3.out', delay: 0.2
      });
      gsap.from('.gala-hero-desc', {
        x: -50, opacity: 0, duration: 1.5, ease: 'power3.out', delay: 0.4
      });
      gsap.from('.gala-btn', {
        y: 20, opacity: 0, duration: 1.5, ease: 'power3.out', delay: 0.6
      });

      // Intro Fade
      gsap.from('.gala-intro-content', {
        y: 100, opacity: 0, duration: 1.5,
        scrollTrigger: {
          trigger: '.gala-intro',
          start: 'top 80%',
        }
      });

      // Capabilities Cards Staggered Parallax
      gsap.utils.toArray('.gala-cap-card').forEach((card) => {
        gsap.from(card.querySelector('.gala-cap-card-img'), {
          scale: 1.1, opacity: 0, duration: 1.5,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          }
        });
        gsap.from(card.querySelector('.gala-cap-card-text'), {
          x: -50, opacity: 0, duration: 1.5,
          scrollTrigger: {
            trigger: card,
            start: 'top 70%',
          }
        });
      });

      // Process Reveal
      gsap.from('.gala-process-item', {
        y: 50, opacity: 0, duration: 1, stagger: 0.2,
        scrollTrigger: {
          trigger: '.gala-process-grid',
          start: 'top 80%',
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Corporate Gala Event Management Abu Dhabi",
        "provider": { "@type": "EventVenue", "name": "Perfect Party Events" },
        "description": "Premium corporate gala and awards event management in Abu Dhabi, including staging, AV production, VIP hospitality, and full coordination.",
        "areaServed": "Abu Dhabi"
      }
    ]
  };

  return (
    <div className="gala-page" ref={containerRef}>
      <Helmet>
        <title>Corporate Gala Events Abu Dhabi | Perfect Party Events</title>
        <meta name="description" content="Premium corporate gala and awards event management in Abu Dhabi, including staging, AV production, VIP hospitality, and full coordination." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Ambient Darkness */}
      <div className="gala-ambient"></div>

      {/* 1. Hero */}
      <section className="gala-hero">
        <div className="gala-hero-bg">
          <img className="gala-hero-img" src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=2000" alt="Corporate Gala" />
          <div className="gala-hero-overlay"></div>
        </div>
        <div className="gala-hero-content">
          <div className="gala-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <Link to="/services">Services</Link> <span>/</span> <span>Corporate Galas</span>
          </div>
          <h1 className="gala-hero-title">Corporate Gala & Awards Events</h1>
          <p className="gala-hero-desc">Elevate your brand’s prestige with meticulously produced galas that leave a lasting impression on stakeholders, partners, and teams in Abu Dhabi.</p>
          <a href="#consultation" className="gala-btn">Request a Proposal</a>
        </div>
      </section>

      {/* 2. Intro */}
      <section className="gala-intro">
        <div className="gala-intro-content dark-glass">
          <h2>Prestigious Corporate Experiences</h2>
          <p>
            Perfect Party Events is the premier corporate event organizer in Abu Dhabi, specializing in high-profile galas, awards ceremonies, and milestone celebrations. We understand that a corporate gala is a direct reflection of your brand's stature. By blending rigorous corporate standards with high-end theatrical production, we ensure your event is not only seamless but profoundly impactful.
          </p>
        </div>
      </section>

      {/* 3. Capabilities */}
      <section className="gala-cap">
        <div className="gala-cap-left">
          <div className="gala-cap-sticky">
            <h2>Gala Production Capabilities</h2>
            <p style={{color: 'rgba(255,249,247,0.7)'}}>End-to-end management for high-stakes corporate events.</p>
          </div>
        </div>
        <div className="gala-cap-right">
          
          <div className="gala-cap-card">
            <img className="gala-cap-card-img" src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200" alt="Theme Development" />
            <div className="gala-cap-card-text dark-glass">
              <h3>Concept & Theme</h3>
              <p>Translating your corporate messaging into immersive, elegant themes that resonate deeply with your attendees.</p>
            </div>
          </div>

          <div className="gala-cap-card">
            <img className="gala-cap-card-img" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200" alt="Stage Production" />
            <div className="gala-cap-card-text dark-glass">
              <h3>Stage & Scenic Production</h3>
              <p>Designing custom, high-impact stage sets with dynamic lighting and architectural elements to command attention.</p>
            </div>
          </div>

          <div className="gala-cap-card">
            <img className="gala-cap-card-img" src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200" alt="Awards Ceremony" />
            <div className="gala-cap-card-text dark-glass">
              <h3>Awards Management</h3>
              <p>Precision timing, custom trophy design, and seamless on-stage transitions to honor your industry leaders.</p>
            </div>
          </div>

          <div className="gala-cap-card">
            <img className="gala-cap-card-img" src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200" alt="VIP Coordination" />
            <div className="gala-cap-card-text dark-glass">
              <h3>VIP Coordination</h3>
              <p>Ensuring VIPs, keynote speakers, and executives receive discrete, premium hospitality throughout the evening.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Process */}
      <section className="gala-process">
        <div className="gala-process-header">
          <h2>Our Production Workflow</h2>
        </div>
        <div className="gala-process-grid">
          <div className="gala-process-item dark-glass">
            <span className="step">01</span>
            <h3>Consultation</h3>
            <p>Defining KPIs and objectives for your corporate gathering.</p>
          </div>
          <div className="gala-process-item dark-glass">
            <span className="step">02</span>
            <h3>Concept</h3>
            <p>Establishing the visual identity and thematic direction.</p>
          </div>
          <div className="gala-process-item dark-glass">
            <span className="step">03</span>
            <h3>Planning</h3>
            <p>Procuring the ideal space and aligning top-tier AV partners.</p>
          </div>
          <div className="gala-process-item dark-glass">
            <span className="step">04</span>
            <h3>Production</h3>
            <p>Engineering stage sets and plotting lighting choreography.</p>
          </div>
          <div className="gala-process-item dark-glass">
            <span className="step">05</span>
            <h3>Execution</h3>
            <p>Directing the live event with military precision.</p>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section id="consultation" className="gala-cta">
        <h2>Planning a Gala in Abu Dhabi?</h2>
        <p>Speak with our team about the concept, design, production, and coordination of your upcoming corporate event.</p>
        <Link to="/contact" className="gala-btn">Contact Our Team</Link>
      </section>

    </div>
  );
};

export default CorporateGalas;
