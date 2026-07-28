import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CorporateConferences.css';

gsap.registerPlugin(ScrollTrigger);

const CorporateConferences = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.conf-hero-grid', { opacity: 0, duration: 2, ease: 'power2.inOut' });
      gsap.from('.conf-hero-img-container', { x: 100, opacity: 0, duration: 1.5, delay: 0.2, ease: 'power3.out' });
      gsap.to('.conf-hero-img', {
        y: '20%', ease: 'none', scrollTrigger: {
          trigger: '.conf-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
      
      gsap.from('.conf-hero-title', { y: 50, opacity: 0, duration: 1.5, delay: 0.4 });
      gsap.from('.conf-hero-desc', { y: 50, opacity: 0, duration: 1.5, delay: 0.6 });
      gsap.from('.conf-btn', { y: 20, opacity: 0, duration: 1.5, delay: 0.8 });

      // Intro
      gsap.from('.conf-intro-content', {
        y: 100, opacity: 0, duration: 1.5,
        scrollTrigger: {
          trigger: '.conf-intro',
          start: 'top 70%',
        }
      });

      // Masonry Capabilities Reveal
      gsap.utils.toArray('.conf-cap-item').forEach((item) => {
        gsap.from(item.querySelector('.conf-cap-img'), {
          scale: 1.05, opacity: 0, duration: 1.5,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          }
        });
        gsap.from(item.querySelector('.conf-cap-text'), {
          y: 50, opacity: 0, duration: 1.5,
          scrollTrigger: {
            trigger: item,
            start: 'top 70%',
          }
        });
      });

      // Timeline Animation
      gsap.utils.toArray('.conf-timeline-item').forEach((item) => {
        gsap.from(item.querySelector('.conf-timeline-dot'), {
          scale: 0, duration: 0.5, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: item, start: 'top 80%' }
        });
        gsap.from(item.querySelector('.conf-timeline-content'), {
          y: 50, opacity: 0, duration: 1,
          scrollTrigger: { trigger: item, start: 'top 75%' }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Corporate Conference Organizer Abu Dhabi",
        "provider": { "@type": "EventVenue", "name": "Perfect Party Events" },
        "description": "Professional conference and summit management in Abu Dhabi, including AV logistics, live streaming, registration, speakers, and interpretation.",
        "areaServed": "Abu Dhabi"
      }
    ]
  };

  return (
    <div className="conf-page" ref={containerRef}>
      <Helmet>
        <title>Conference Organizer Abu Dhabi | Perfect Party Events</title>
        <meta name="description" content="Professional conference and summit management in Abu Dhabi, including AV logistics, live streaming, registration, speakers, and interpretation." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* 1. Hero */}
      <section className="conf-hero">
        <div className="conf-hero-grid"></div>
        
        <div className="conf-hero-img-container">
          <img className="conf-hero-img" src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=1600" alt="Corporate Conference" />
        </div>

        <div className="conf-hero-content">
          <div className="conf-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <Link to="/services">Services</Link> <span>/</span> <span>Conferences</span>
          </div>
          <h1 className="conf-hero-title">Corporate Conference Organizer</h1>
          <p className="conf-hero-desc">Seamless execution of complex, multi-day intellectual gatherings, summits, and corporate symposiums, handled with meticulous logistical precision in Abu Dhabi.</p>
          <a href="#consultation" className="conf-btn">Discuss Your Summit</a>
        </div>
      </section>

      {/* 2. Intro */}
      <section className="conf-intro">
        <div className="conf-intro-content">
          <h2>Precision Logistical Management</h2>
          <p>
            Organizing a successful corporate conference requires more than just booking a venue; it demands a deep understanding of delegate flow, technical infrastructure, and seamless scheduling. As a leading conference organizer in Abu Dhabi, Perfect Party Events delivers end-to-end summit management designed for global corporations, government entities, and industry associations.
          </p>
        </div>
      </section>

      {/* 3. Capabilities (Asymmetric Masonry) */}
      <section className="conf-cap">
        <div className="conf-cap-header">
          <h2>Logistical Expertise</h2>
        </div>
        <div className="conf-masonry">
          
          <div className="conf-cap-item">
            <img className="conf-cap-img" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200" alt="Planning" />
            <div className="conf-cap-text">
              <h3>Conference Planning</h3>
              <p>End-to-end project management, timeline tracking, and budgeting to ensure a successful summit.</p>
            </div>
          </div>

          <div className="conf-cap-item">
            <img className="conf-cap-img" src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200" alt="Registration" />
            <div className="conf-cap-text">
              <h3>Delegate Registration</h3>
              <p>Custom-built registration platforms, secure ticketing, and streamlined on-site badge printing.</p>
            </div>
          </div>

          <div className="conf-cap-item">
            <img className="conf-cap-img" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200" alt="Speaker Management" />
            <div className="conf-cap-text">
              <h3>Speaker Management</h3>
              <p>Coordinating itineraries, presentation logistics, and green room hospitality for keynote speakers.</p>
            </div>
          </div>

          <div className="conf-cap-item">
            <img className="conf-cap-img" src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200" alt="AV & Streaming" />
            <div className="conf-cap-text">
              <h3>AV and Live Streaming</h3>
              <p>State-of-the-art audiovisual production, multi-camera setups, and hybrid event broadcasting.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Process (Timeline) */}
      <section className="conf-process">
        <div className="conf-process-header">
          <h2>Execution Plan</h2>
        </div>
        <div className="conf-process-timeline">
          
          <div className="conf-timeline-item">
            <div className="conf-timeline-dot"></div>
            <div className="conf-timeline-content">
              <h3>01. Initial Consultation</h3>
              <p>Analyzing expected delegate numbers, technical requirements, and overall summit objectives.</p>
            </div>
          </div>

          <div className="conf-timeline-item">
            <div className="conf-timeline-dot"></div>
            <div className="conf-timeline-content">
              <h3>02. Logistical Framework</h3>
              <p>Drafting the master schedule, selecting the ideal venue, and mapping out breakout room utilization.</p>
            </div>
          </div>

          <div className="conf-timeline-item">
            <div className="conf-timeline-dot"></div>
            <div className="conf-timeline-content">
              <h3>03. Technical & Digital Prep</h3>
              <p>Deploying the registration platform and engineering the AV, staging, and interpretation requirements.</p>
            </div>
          </div>

          <div className="conf-timeline-item">
            <div className="conf-timeline-dot"></div>
            <div className="conf-timeline-content">
              <h3>04. On-Site Operations</h3>
              <p>Executing the run-of-show with our dedicated team managing registration, AV cues, and stage transitions.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CTA */}
      <section id="consultation" className="conf-cta">
        <h2>Planning a Summit in Abu Dhabi?</h2>
        <p>Speak with our team about the logistics, design, and coordination of your upcoming corporate conference.</p>
        <Link to="/contact" className="conf-btn">Discuss Your Summit</Link>
      </section>

    </div>
  );
};

export default CorporateConferences;
