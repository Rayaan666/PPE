import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  
  // Section Refs
  const heroRef = useRef(null);
  const selectorRef = useRef(null);
  
  const [activeService, setActiveService] = useState(0);

  const servicesData = [
    { 
      title: "Luxury Weddings", 
      desc: "Bespoke celebrations designed with elegance, precision, and heartfelt romance.", 
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1600",
      link: "/services/luxury-wedding-planner-abu-dhabi"
    },
    { 
      title: "Corporate Galas", 
      desc: "Prestigious corporate events that reinforce brand stature and celebrate milestones.", 
      image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1600",
      link: "/services/corporate-gala-events-abu-dhabi"
    },
    { 
      title: "Product Launches", 
      desc: "Immersive reveals designed to captivate audiences and maximize market impact.", 
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1600",
      link: "/services/product-launch-events-abu-dhabi"
    },
    { 
      title: "Corporate Conferences", 
      desc: "Professional summit management with meticulous planning and logistical precision.", 
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=1600",
      link: "/services/corporate-conference-organizer-abu-dhabi"
    },
    { 
      title: "Brand Activations", 
      desc: "Engaging pop-up experiences that forge deep emotional connections with consumers.", 
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1600",
      link: "/services/brand-activation-agency-abu-dhabi"
    },
    { 
      title: "Private Celebrations", 
      desc: "Bespoke theme decorations and planning for your most cherished milestones.", 
      image: "https://images.unsplash.com/photo-1530103862676-de8892ebe68d?auto=format&fit=crop&q=80&w=1600",
      link: "/services/theme-decoration-private-events-abu-dhabi"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Parallax
      gsap.to('.panel-left', {
        y: -100,
        rotate: -5,
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 }
      });
      gsap.to('.panel-right', {
        y: -150,
        rotate: 5,
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 }
      });
      gsap.to('.panel-center', {
        y: 50,
        scale: 1.05,
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="services-page-container" ref={containerRef}>
      
      {/* 1. Immersive Services Hero */}
      <section className="services-hero" ref={heroRef}>
        <div className="hero-panels-wrapper">
          <div className="hero-panel panel-left"></div>
          <div className="hero-panel panel-center"></div>
          <div className="hero-panel panel-right"></div>
        </div>
        <div className="hero-content-overlay">
          <h1 className="hero-title">Crafting Extraordinary <br/> <span className="service-title">Experiences</span></h1>
          <p className="hero-subtitle">From intimate private celebrations to monumental corporate galas, we design and produce events that transcend the ordinary, rooted in a strict ethos of luxury and precision.</p>
          <a href="#selector" className="hero-cta">Explore Capabilities</a>
        </div>
      </section>

      {/* 2. Signature Service Selector */}
      <section id="selector" className="service-selector" ref={selectorRef}>
        <div className="selector-left">
          <ul className="selector-list">
            {servicesData.map((service, index) => (
              <li 
                key={index} 
                className={`selector-item ${activeService === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div onClick={() => navigate(service.link)} style={{cursor: 'pointer'}}>
                  <span className="service-number">0{index + 1}</span>
                  <span className="service-title-text">{service.title}</span>
                </div>
                <div className="service-details">
                  <p>{service.desc}</p>
                  <Link to={service.link} className="view-more-link">
                    View More
                    <ArrowRight className="view-more-icon" size={16} />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="selector-right">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className={`visual-stage ${activeService === index ? 'active' : ''}`}
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default Services;
