import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LuxuryWeddings.css';

gsap.registerPlugin(ScrollTrigger);

const LuxuryWeddings = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero Parallax & Reveal
      gsap.fromTo('.lw-hero-img', 
        { y: '-10%', scale: 1.1 },
        { y: '10%', scale: 1, ease: 'none', scrollTrigger: {
          trigger: '.lw-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }}
      );

      gsap.from('.lw-hero-title', {
        y: 100, opacity: 0, duration: 1.5, ease: 'power4.out', delay: 0.2
      });
      gsap.from('.lw-hero-desc', {
        y: 50, opacity: 0, duration: 1.5, ease: 'power4.out', delay: 0.4
      });
      gsap.from('.lw-btn-primary', {
        y: 30, opacity: 0, duration: 1.5, ease: 'power4.out', delay: 0.6
      });

      // Intro Fade Up
      gsap.from('.lw-intro-content', {
        y: 100, opacity: 0, duration: 1.5,
        scrollTrigger: {
          trigger: '.lw-intro',
          start: 'top 70%',
        }
      });

      // Capabilities Overlap
      gsap.utils.toArray('.lw-cap-item').forEach((item, i) => {
        gsap.from(item, {
          y: 150, opacity: 0, duration: 1.5,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          }
        });
        
        // Parallax image slightly
        gsap.to(item.querySelector('.lw-cap-img'), {
          yPercent: 10, ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });

      // Why Choose Us Floating Image
      gsap.to('.lw-why-img-float', {
        yPercent: -30, ease: 'none',
        scrollTrigger: {
          trigger: '.lw-why',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Process Stagger
      gsap.from('.lw-process-card', {
        y: 100, opacity: 0, duration: 1, stagger: 0.2,
        scrollTrigger: {
          trigger: '.lw-process-grid',
          start: 'top 80%',
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Structured Data...
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Luxury Wedding Planning Abu Dhabi",
        "provider": { "@type": "EventVenue", "name": "Perfect Party Events" },
        "description": "Bespoke luxury wedding planning and production services across Abu Dhabi and the UAE.",
        "areaServed": "Abu Dhabi"
      }
    ]
  };

  return (
    <div className="luxury-wedding-page" ref={containerRef}>
      <Helmet>
        <title>Luxury Wedding Planner Abu Dhabi | Perfect Party Events</title>
        <meta name="description" content="Plan an elegant Abu Dhabi wedding with bespoke venue coordination, floral styling, guest experiences, and complete luxury event production." />
        <link rel="canonical" href="https://www.perfectpartyevents.ae/services/luxury-wedding-planner-abu-dhabi" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Ambient Animated Gradient Background */}
      <div className="ambient-gradient"></div>

      {/* 1. Service Hero */}
      <section className="lw-hero">
        <div className="lw-hero-img-wrapper">
          <img className="lw-hero-img" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2000" alt="Luxury Wedding Decor" />
          <div className="lw-hero-overlay"></div>
        </div>
        
        <div className="lw-hero-content">
          <div className="lw-breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span>Luxury Weddings</span>
          </div>
          <h1 className="lw-hero-title">Luxury Wedding Planner<br/>in Abu Dhabi</h1>
          <p className="lw-hero-desc">Bespoke wedding production focused on creating deeply personal, visually spectacular environments that reflect your unique journey.</p>
          <a href="#consultation" className="lw-btn-primary">Book Consultation</a>
        </div>
      </section>

      {/* 2. Service Introduction */}
      <section className="lw-intro">
        <div className="lw-intro-content glass-panel">
          <h2>Bespoke Wedding Journeys</h2>
          <p>
            At Perfect Party Events, our luxury wedding planning service provides end-to-end management for couples seeking an extraordinary celebration. Designed for discerning clients who expect flawless execution, highly personalized design, and comprehensive coordination. From securing the most exclusive venues in Abu Dhabi to meticulously curating floral styling, lighting, and guest hospitality, we manage every layer of the production process.
          </p>
        </div>
      </section>

      {/* 3. Capabilities (Asymmetric Layout) */}
      <section className="lw-capabilities">
        <div className="lw-cap-header">
          <h2>What We Manage</h2>
        </div>
        <div className="lw-cap-grid">
          
          <div className="lw-cap-item">
            <img className="lw-cap-img" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200" alt="Wedding Design" />
            <div className="lw-cap-text glass-panel">
              <h3>Bespoke Wedding Planning</h3>
              <p>Comprehensive planning ensuring your aesthetic vision is realized down to the finest detail.</p>
            </div>
          </div>

          <div className="lw-cap-item">
            <img className="lw-cap-img" src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1200" alt="Floral Architecture" />
            <div className="lw-cap-text glass-panel">
              <h3>Wedding Design and Styling</h3>
              <p>Curated visual identities, from cascading floral architecture to elegant table settings.</p>
            </div>
          </div>

          <div className="lw-cap-item">
            <img className="lw-cap-img" src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" alt="Venue Logistics" />
            <div className="lw-cap-text glass-panel">
              <h3>Venue & Supplier Coordination</h3>
              <p>Managing strict logistics with premium Abu Dhabi venues and high-end suppliers.</p>
            </div>
          </div>

          <div className="lw-cap-item">
            <img className="lw-cap-img" src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=1200" alt="Guest Experience" />
            <div className="lw-cap-text glass-panel">
              <h3>Guest Experience Management</h3>
              <p>Flawless hospitality, RSVP tracking, and bespoke entertainment for your attendees.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="lw-why">
        <div className="lw-why-img-container">
          <img className="lw-why-img-main" src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" alt="Main Decor" />
          <img className="lw-why-img-float" src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=600" alt="Detail shot" />
        </div>
        <div className="lw-why-content">
          <h2>Why Choose Us in Abu Dhabi</h2>
          <p>Our reputation is built on delivering high-end design and production standards for the most prestigious clients.</p>
          <ul className="lw-why-list">
            <li>Deep understanding of premium Abu Dhabi venues</li>
            <li>Unmatched high-end design and production standards</li>
            <li>Reliable vendor and luxury supplier coordination</li>
            <li>Meticulous on-site event supervision</li>
          </ul>
        </div>
      </section>

      {/* 5. Process */}
      <section className="lw-process">
        <div className="lw-process-header">
          <h2>Our Planning Process</h2>
        </div>
        <div className="lw-process-grid">
          <div className="lw-process-card glass-panel">
            <span className="lw-process-num">01</span>
            <h3>Consultation</h3>
            <p>Understanding your vision and preferences.</p>
          </div>
          <div className="lw-process-card glass-panel">
            <span className="lw-process-num">02</span>
            <h3>Concept</h3>
            <p>Creating mood boards and spatial design.</p>
          </div>
          <div className="lw-process-card glass-panel">
            <span className="lw-process-num">03</span>
            <h3>Planning</h3>
            <p>Securing the perfect location and vendors.</p>
          </div>
          <div className="lw-process-card glass-panel">
            <span className="lw-process-num">04</span>
            <h3>Design</h3>
            <p>Finalizing floral and technical staging.</p>
          </div>
          <div className="lw-process-card glass-panel">
            <span className="lw-process-num">05</span>
            <h3>Execution</h3>
            <p>Flawless on-site event coordination.</p>
          </div>
        </div>
      </section>

      {/* 6. Coverage */}
      <section className="lw-coverage">
        <div className="lw-coverage-box glass-panel">
          <h2>Event Planning Across Abu Dhabi</h2>
          <p>
            We manage and execute extraordinary weddings across the most exclusive locations in the region. Whether your vision involves the serene waterfront venues of Saadiyat Island, the sophisticated luxury hotels of Al Maryah Island, or private villas along the Corniche, our team understands the logistical nuances of producing high-end events in Abu Dhabi.
          </p>
        </div>
      </section>

      {/* 7. Related Services */}
      <section className="lw-related">
        <h2>Explore More</h2>
        <div className="lw-related-links">
          <Link to="/services/theme-decoration-private-events-abu-dhabi" className="lw-related-link">Private Celebrations</Link>
          <Link to="/services/corporate-gala-events-abu-dhabi" className="lw-related-link">Corporate Galas</Link>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="lw-faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="lw-faq-item">
          <h3>How early should I book a wedding planner in Abu Dhabi?</h3>
          <p>We recommend booking our services 9 to 12 months in advance to secure premium venues and bespoke suppliers.</p>
        </div>
        <div className="lw-faq-item">
          <h3>Do you coordinate venue selection in Abu Dhabi?</h3>
          <p>Yes, we handle complete venue scouting and selection across luxury hotels, private villas, and exclusive event spaces.</p>
        </div>
        <div className="lw-faq-item">
          <h3>Can you provide complete event production and styling?</h3>
          <p>Absolutely. We manage end-to-end production including floral architecture, bespoke staging, lighting design, and technical AV.</p>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section id="consultation" className="lw-cta">
        <div className="lw-cta-bg"></div>
        <div className="lw-cta-overlay"></div>
        <h2>Begin Your Journey</h2>
        <p>Speak with our team about the concept, design, production, and coordination of your upcoming event.</p>
        <div className="lw-cta-buttons">
          <Link to="/contact" className="lw-btn-primary">Book Consultation</Link>
          <Link to="/contact" className="lw-btn-secondary">Contact Team</Link>
        </div>
      </section>

    </div>
  );
};

export default LuxuryWeddings;
