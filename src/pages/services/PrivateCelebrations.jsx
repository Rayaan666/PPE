import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PrivateCelebrations.css';

gsap.registerPlugin(ScrollTrigger);

const PrivateCelebrations = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero Gallery Parallax
      gsap.to('.cel-gallery-img-1', { y: -100, ease: 'none', scrollTrigger: { trigger: '.cel-hero', start: 'top top', end: 'bottom top', scrub: true }});
      gsap.to('.cel-gallery-img-2', { y: -150, ease: 'none', scrollTrigger: { trigger: '.cel-hero', start: 'top top', end: 'bottom top', scrub: true }});
      gsap.to('.cel-gallery-img-3', { y: -50, ease: 'none', scrollTrigger: { trigger: '.cel-hero', start: 'top top', end: 'bottom top', scrub: true }});

      // Hero Elements Reveal
      gsap.from('.cel-hero-content', { scale: 0.9, opacity: 0, duration: 1.5, ease: 'power3.out' });
      gsap.from('.cel-hero-title', { y: 30, opacity: 0, duration: 1, delay: 0.4 });
      gsap.from('.cel-hero-desc', { y: 30, opacity: 0, duration: 1, delay: 0.6 });
      gsap.from('.cel-btn', { y: 30, opacity: 0, duration: 1, delay: 0.8 });

      // Intro
      gsap.from('.cel-intro-content', {
        y: 100, opacity: 0, duration: 1.5,
        scrollTrigger: {
          trigger: '.cel-intro',
          start: 'top 70%',
        }
      });

      // Mood Board Reveal
      gsap.utils.toArray('.cel-mood-item').forEach((item, i) => {
        gsap.from(item, {
          y: 100, opacity: 0, duration: 1.5,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          }
        });
      });

      // Process Reveal
      gsap.from('.cel-process-item', {
        scale: 0.9, opacity: 0, duration: 1, stagger: 0.2,
        scrollTrigger: {
          trigger: '.cel-process-flex',
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
        "name": "Private Event Planning and Theme Decoration Abu Dhabi",
        "provider": { "@type": "EventVenue", "name": "Perfect Party Events" },
        "description": "Bespoke private event planning and theme decoration in Abu Dhabi for birthdays, engagements, dinners, family celebrations, and special occasions.",
        "areaServed": "Abu Dhabi"
      }
    ]
  };

  return (
    <div className="cel-page" ref={containerRef}>
      <Helmet>
        <title>Private Event Planner Abu Dhabi | Perfect Party Events</title>
        <meta name="description" content="Bespoke private event planning and theme decoration in Abu Dhabi for birthdays, engagements, dinners, family celebrations, and special occasions." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Ambient Blobs */}
      <div className="cel-ambient"></div>

      {/* 1. Hero */}
      <section className="cel-hero">
        <div className="cel-hero-gallery">
          <img className="cel-gallery-img cel-gallery-img-1" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" alt="Gallery 1" />
          <img className="cel-gallery-img cel-gallery-img-2" src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800" alt="Gallery 2" />
          <img className="cel-gallery-img cel-gallery-img-3" src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" alt="Gallery 3" />
        </div>
        
        <div className="cel-hero-content">
          <div className="cel-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <Link to="/services">Services</Link> <span>/</span> <span>Private Celebrations</span>
          </div>
          <h1 className="cel-hero-title">Private Events & Theme Decoration</h1>
          <p className="cel-hero-desc">Intimate celebrations crafted with the same rigorous production standards as our largest galas, scaled perfectly for your closest circle in Abu Dhabi.</p>
          <a href="#consultation" className="cel-btn">Plan Your Celebration</a>
        </div>
      </section>

      {/* 2. Intro */}
      <section className="cel-intro">
        <div className="cel-intro-content">
          <h2>Intimate & Unforgettable</h2>
          <p>
            Your personal milestones deserve an extraordinary setting. As a premier private event planner in Abu Dhabi, Perfect Party Events specializes in transforming intimate spaces—from luxury hotel suites and private villas to exclusive dining rooms—into breathtaking, thematic environments. We provide a highly discreet, end-to-end service.
          </p>
        </div>
      </section>

      {/* 3. Capabilities (Mood Board) */}
      <section className="cel-cap">
        <div className="cel-cap-header">
          <h2>Bespoke Capabilities</h2>
        </div>
        <div className="cel-moodboard">
          
          <div className="cel-mood-item">
            <img className="cel-mood-img" src="https://images.unsplash.com/photo-1530103862676-de8892ebe68d?auto=format&fit=crop&q=80&w=1200" alt="Theme Development" />
            <div className="cel-mood-overlay">
              <h3>Bespoke Theme Development</h3>
              <p>Crafting unique narratives through custom props and set design.</p>
            </div>
          </div>

          <div className="cel-mood-item">
            <img className="cel-mood-img" src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800" alt="Birthday Styling" />
            <div className="cel-mood-overlay">
              <h3>Birthday Styling</h3>
              <p>From chic adult gatherings to opulent children's celebrations.</p>
            </div>
          </div>

          <div className="cel-mood-item">
            <img className="cel-mood-img" src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" alt="Engagement" />
            <div className="cel-mood-overlay">
              <h3>Engagement Celebrations</h3>
              <p>Designing romantic settings perfect for celebrating your journey.</p>
            </div>
          </div>

          <div className="cel-mood-item">
            <img className="cel-mood-img" src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800" alt="Private Dinners" />
            <div className="cel-mood-overlay">
              <h3>Private Dinners</h3>
              <p>Michelin-level experiences with exquisite tablescaping.</p>
            </div>
          </div>

          <div className="cel-mood-item">
            <img className="cel-mood-img" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" alt="Floral Styling" />
            <div className="cel-mood-overlay">
              <h3>Floral & Table Styling</h3>
              <p>Sourcing premium blooms to elevate the dining aesthetic.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Process */}
      <section className="cel-process">
        <div className="cel-process-header">
          <h2>Our Design Process</h2>
        </div>
        <div className="cel-process-flex">
          <div className="cel-process-item">
            <span className="step">01</span>
            <h3>Consultation</h3>
            <p>Understanding the occasion and your initial vision.</p>
          </div>
          <div className="cel-process-item">
            <span className="step">02</span>
            <h3>Styling</h3>
            <p>Presenting detailed mood boards and floral concepts.</p>
          </div>
          <div className="cel-process-item">
            <span className="step">03</span>
            <h3>Menu & Venue</h3>
            <p>Securing the perfect intimate location and catering.</p>
          </div>
          <div className="cel-process-item">
            <span className="step">04</span>
            <h3>Execution</h3>
            <p>Flawless on-the-day styling and discreet coordination.</p>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section id="consultation" className="cel-cta">
        <h2>Planning a Celebration?</h2>
        <p>Speak with our team about the concept, design, production, and coordination of your upcoming private event in Abu Dhabi.</p>
        <Link to="/contact" className="cel-btn">Plan Your Celebration</Link>
      </section>

    </div>
  );
};

export default PrivateCelebrations;
