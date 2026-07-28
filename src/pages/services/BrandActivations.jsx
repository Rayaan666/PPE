import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BrandActivations.css';

gsap.registerPlugin(ScrollTrigger);

const BrandActivations = () => {
  const containerRef = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.act-hero-shapes', { scale: 0.8, opacity: 0, duration: 2, ease: 'power2.out' });
      gsap.from('.act-hero-title', { y: 50, opacity: 0, duration: 1.5, delay: 0.3 });
      gsap.from('.act-hero-desc', { y: 50, opacity: 0, duration: 1.5, delay: 0.5 });
      gsap.from('.act-btn', { y: 20, opacity: 0, duration: 1.5, delay: 0.7 });

      // Intro
      gsap.from('.act-intro-content', {
        y: 100, opacity: 0, duration: 1.5,
        scrollTrigger: {
          trigger: '.act-intro',
          start: 'top 70%',
        }
      });

      // Immersive Full Screen Scroll Logic
      const slides = gsap.utils.toArray('.act-cap-slide');
      const images = gsap.utils.toArray('.act-cap-img');

      // Pin the container
      ScrollTrigger.create({
        trigger: pinRef.current,
        start: 'top top',
        end: '+=300%', // 3 slides
        pin: true,
        scrub: true,
      });

      // Animate slides and images based on scroll progress
      slides.forEach((slide, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinRef.current,
            start: () => `top+=${i * 100}% top`,
            end: () => `top+=${(i + 1) * 100}% top`,
            scrub: true,
          }
        });

        // Fade in current slide text
        tl.fromTo(slide, 
          { opacity: 0, y: 50 }, 
          { opacity: 1, y: 0, duration: 0.4 }
        );
        // Fade out current slide text
        if (i !== slides.length - 1) {
          tl.to(slide, { opacity: 0, y: -50, duration: 0.4 }, 0.6);
        }

        // Handle image fading
        const imgTl = gsap.timeline({
          scrollTrigger: {
            trigger: pinRef.current,
            start: () => `top+=${i * 100}% top`,
            end: () => `top+=${(i + 1) * 100}% top`,
            scrub: true,
          }
        });
        
        imgTl.to(images[i], { opacity: 0.4, duration: 0.4 });
        if (i !== slides.length - 1) {
          imgTl.to(images[i], { opacity: 0, duration: 0.4 }, 0.6);
        }
      });

      // Process Reveal
      gsap.from('.act-process-item', {
        y: 50, opacity: 0, duration: 1, stagger: 0.2,
        scrollTrigger: {
          trigger: '.act-process-grid',
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
        "name": "Brand Activation Agency Abu Dhabi",
        "provider": { "@type": "EventVenue", "name": "Perfect Party Events" },
        "description": "Create premium brand activations in Abu Dhabi through luxury pop-ups, digital installations, mall experiences, and consumer engagement.",
        "areaServed": "Abu Dhabi"
      }
    ]
  };

  return (
    <div className="act-page" ref={containerRef}>
      <Helmet>
        <title>Brand Activation Agency Abu Dhabi | Perfect Party Events</title>
        <meta name="description" content="Create premium brand activations in Abu Dhabi through luxury pop-ups, digital installations, mall experiences, and consumer engagement." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* 1. Hero */}
      <section className="act-hero">
        <div className="act-hero-shapes"></div>
        <div className="act-hero-content">
          <div className="act-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <Link to="/services">Services</Link> <span>/</span> <span>Activations</span>
          </div>
          <h1 className="act-hero-title">Experiential Brand Activations</h1>
          <p className="act-hero-desc">Translate your brand identity into physical, immersive touchpoints that forge deep emotional connections and drive consumer engagement in Abu Dhabi.</p>
          <a href="#consultation" className="act-btn">Start Your Campaign</a>
        </div>
      </section>

      {/* 2. Intro */}
      <section className="act-intro">
        <div className="act-intro-content">
          <h2>Immersive Consumer Connections</h2>
          <p>
            In a saturated digital landscape, physical brand experiences are paramount. As a leading experiential brand activation agency in Abu Dhabi, Perfect Party Events designs luxury pop-ups, interactive mall installations, and engaging consumer touchpoints that cut through the noise.
          </p>
        </div>
      </section>

      {/* 3. Capabilities (Immersive Scroll) */}
      <section className="act-cap-wrapper">
        <div className="act-cap-pin" ref={pinRef}>
          
          <div className="act-cap-imgs">
            <img className="act-cap-img" src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=2000" alt="Pop-Up Design" />
            <img className="act-cap-img" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000" alt="Mall Activations" />
            <img className="act-cap-img" src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=2000" alt="Digital Installations" />
            <img className="act-cap-img" src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=2000" alt="Event Staffing" />
          </div>

          <div className="act-cap-text-container">
            <div className="act-cap-text-inner">
              
              <div className="act-cap-slide">
                <h3>Pop-Up Design</h3>
                <p>Architecting striking, temporary retail and exhibition spaces that embody your brand’s luxury aesthetic.</p>
              </div>

              <div className="act-cap-slide">
                <h3>Mall Activations</h3>
                <p>Navigating the complex logistics of executing high-traffic installations in premium Abu Dhabi shopping destinations.</p>
              </div>

              <div className="act-cap-slide">
                <h3>Interactive Installations</h3>
                <p>Integrating digital art, kinetic structures, and technology to create highly shareable consumer moments.</p>
              </div>

              <div className="act-cap-slide">
                <h3>Event Staffing</h3>
                <p>Providing trained, professional brand ambassadors to facilitate interactions and collect consumer data.</p>
              </div>

            </div>
          </div>
        </div>
        <div className="act-spacer"></div>
      </section>

      {/* 4. Process */}
      <section className="act-process">
        <div className="act-process-header">
          <h2>The Activation Workflow</h2>
        </div>
        <div className="act-process-grid">
          <div className="act-process-item">
            <span className="step">01</span>
            <h3>Concept & Design</h3>
            <p>Translating brand guidelines into experiential consumer journeys.</p>
          </div>
          <div className="act-process-item">
            <span className="step">02</span>
            <h3>Permitting</h3>
            <p>Managing venue and municipal approvals in Abu Dhabi.</p>
          </div>
          <div className="act-process-item">
            <span className="step">03</span>
            <h3>Fabrication</h3>
            <p>Building the custom structures and programming digital elements.</p>
          </div>
          <div className="act-process-item">
            <span className="step">04</span>
            <h3>Live Operations</h3>
            <p>Overseeing daily management, maintenance, and data capture.</p>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section id="consultation" className="act-cta">
        <h2>Ready to Activate?</h2>
        <p>Speak with our team about the concept, design, production, and coordination of your upcoming brand activation.</p>
        <Link to="/contact" className="act-btn">Start Your Campaign</Link>
      </section>

    </div>
  );
};

export default BrandActivations;
