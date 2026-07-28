import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProductLaunches.css';

gsap.registerPlugin(ScrollTrigger);

const ProductLaunches = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo('.pl-circle', 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, stagger: 0.2, ease: 'power3.out' }
      );
      gsap.from('.pl-hero-title', { y: 50, opacity: 0, duration: 1.5, delay: 0.5 });
      gsap.from('.pl-hero-desc', { y: 50, opacity: 0, duration: 1.5, delay: 0.7 });
      gsap.from('.pl-btn', { y: 20, opacity: 0, duration: 1.5, delay: 0.9 });

      // Intro Fade
      gsap.from('.pl-intro-content', {
        y: 100, opacity: 0, duration: 1.5,
        scrollTrigger: {
          trigger: '.pl-intro',
          start: 'top 70%',
        }
      });

      // Horizontal Scroll Magic
      const horizontalSections = gsap.utils.toArray('.pl-slide');
      
      gsap.to(horizontalRef.current, {
        xPercent: -100 * (horizontalSections.length - 1) - 20, // Adjust based on sizing
        ease: "none",
        scrollTrigger: {
          trigger: '.pl-horizontal-wrapper',
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          end: () => "+=" + horizontalRef.current.offsetWidth
        }
      });

      // Process List Reveal
      gsap.from('.pl-process-item', {
        x: -50, opacity: 0, duration: 1, stagger: 0.2,
        scrollTrigger: {
          trigger: '.pl-process-list',
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
        "name": "Product Launch Event Management Abu Dhabi",
        "provider": { "@type": "EventVenue", "name": "Perfect Party Events" },
        "description": "Launch your product in Abu Dhabi with experiential concepts, premium staging, media styling, technical production, and guest engagement.",
        "areaServed": "Abu Dhabi"
      }
    ]
  };

  return (
    <div className="launch-page" ref={containerRef}>
      <Helmet>
        <title>Product Launch Events Abu Dhabi | Perfect Party Events</title>
        <meta name="description" content="Launch your product in Abu Dhabi with experiential concepts, premium staging, media styling, technical production, and guest engagement." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* 1. Hero */}
      <section className="pl-hero">
        <div className="pl-hero-circles">
          <div className="pl-circle pl-circle-1"></div>
          <div className="pl-circle pl-circle-2"></div>
          <div className="pl-circle pl-circle-3"></div>
        </div>
        <div className="pl-hero-content">
          <div className="pl-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <Link to="/services">Services</Link> <span>/</span> <span>Product Launches</span>
          </div>
          <h1 className="pl-hero-title">Product Launch Management</h1>
          <p className="pl-hero-desc">Make your debut unforgettable with multi-sensory launch experiences designed to build anticipation and generate immediate market momentum.</p>
          <a href="#consultation" className="pl-btn">Plan Your Launch</a>
        </div>
      </section>

      {/* 2. Intro */}
      <section className="pl-intro">
        <div className="pl-intro-content">
          <h2>Creating Market Momentum</h2>
          <p>
            A successful product launch requires more than just an unveiling; it demands an immersive, brand-defining experience that captivates media, influencers, and key stakeholders in Abu Dhabi. We conceptualize the initial launch strategy, design experiential environments, and execute advanced technical reveals.
          </p>
        </div>
      </section>

      {/* 3. Capabilities (Horizontal Scroll) */}
      <section className="pl-horizontal-wrapper">
        <div className="pl-horizontal-container" ref={horizontalRef}>
          
          <div className="pl-horizontal-intro">
            <h2>Core Capabilities.</h2>
          </div>

          <div className="pl-slide">
            <img className="pl-slide-img" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200" alt="Strategy" />
            <h3>Launch Strategy</h3>
            <p>We align the event narrative with your broader marketing objectives to ensure maximum impact and message retention.</p>
          </div>

          <div className="pl-slide">
            <img className="pl-slide-img" src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200" alt="Creative Environment" />
            <h3>Creative Brand Environment</h3>
            <p>Translating your brand identity into physical, immersive spaces that encourage content creation and social sharing.</p>
          </div>

          <div className="pl-slide">
            <img className="pl-slide-img" src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200" alt="Technical Staging" />
            <h3>Technical Staging & Reveals</h3>
            <p>Flawless execution of complex audiovisual setups, projection mapping, and kinetic staging to elevate the experience.</p>
          </div>

          <div className="pl-slide">
            <img className="pl-slide-img" src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200" alt="Media Experience" />
            <h3>Media and Press Experience</h3>
            <p>Curating dedicated press zones, highly photogenic installations, and seamless media logistics.</p>
          </div>

        </div>
      </section>

      {/* 4. Process */}
      <section className="pl-process">
        <div className="pl-process-header">
          <h2>The Launch Trajectory</h2>
        </div>
        <div className="pl-process-list">
          <div className="pl-process-item">
            <span className="pl-process-num">01</span>
            <div className="pl-process-text">
              <h3>Strategy & Ideation</h3>
              <p>Understanding your product architecture, target demographic, and key messaging goals.</p>
            </div>
          </div>
          <div className="pl-process-item">
            <span className="pl-process-num">02</span>
            <div className="pl-process-text">
              <h3>Experiential Design</h3>
              <p>Mapping the consumer journey and designing physical touchpoints, photo moments, and the main reveal.</p>
            </div>
          </div>
          <div className="pl-process-item">
            <span className="pl-process-num">03</span>
            <div className="pl-process-text">
              <h3>Venue & Technical Planning</h3>
              <p>Securing the ideal location and engineering the AV, lighting, and staging mechanics.</p>
            </div>
          </div>
          <div className="pl-process-item">
            <span className="pl-process-num">04</span>
            <div className="pl-process-text">
              <h3>Live Execution</h3>
              <p>Directing the live show, managing all technical cues, and ensuring a flawless guest experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section id="consultation" className="pl-cta">
        <h2>Ready to Launch?</h2>
        <p>Speak with our team about the concept, design, production, and coordination of your upcoming product launch.</p>
        <Link to="/contact" className="pl-btn">Plan Your Event</Link>
      </section>

    </div>
  );
};

export default ProductLaunches;
