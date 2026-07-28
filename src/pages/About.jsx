import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const aboutStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Perfect Party Events',
  image: 'https://www.perfectpartyevents.ae/about/hero.png',
  '@id': 'https://www.perfectpartyevents.ae/about',
  url: 'https://www.perfectpartyevents.ae/about',
  telephone: 'info@perfectpartyeventsae.com',
  priceRange: '$$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot 3, ME 40, Musaffah',
    addressLocality: 'Abu Dhabi',
    addressRegion: 'Abu Dhabi',
    postalCode: '00000',
    addressCountry: 'AE'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.35,
    longitude: 54.51
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    opens: '09:00',
    closes: '21:00'
  },
  sameAs: [
    'https://www.instagram.com/perfectpartyevents/'
  ],
  areaServed: [
    { '@type': 'City', name: 'Abu Dhabi' },
    { '@type': 'City', name: 'Dubai' },
    { '@type': 'Country', name: 'United Arab Emirates' }
  ]
};

const About = () => {
  const containerRef = useRef(null);
  const [activePillar, setActivePillar] = useState(0);

  const pillarsData = [
    {
      id: '01',
      title: 'Bespoke Event Design',
      desc: 'We create custom decorations and unique themes tailored specifically to your vision, ensuring your event stands out beautifully.',
      image: '/about/1.png'
    },
    {
      id: '02',
      title: 'Premium Catering',
      desc: 'Our culinary team designs custom menus with gourmet dishes, delivering exceptional dining experiences for all guests.',
      image: '/about/2.png'
    },
    {
      id: '03',
      title: 'Seamless Coordination',
      desc: 'From coordination to setup, we manage every detail of your event timing and layout for a stress-free experience.',
      image: '/about/3.png'
    },
    {
      id: '04',
      title: 'Exclusive Venues',
      desc: 'We assist you in selecting and styling the most beautiful venues across the UAE to fit your guest list perfectly.',
      image: '/about/4.png'
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Animations
      gsap.fromTo('.about-hero-img', 
        { scale: 1.2 }, 
        { scale: 1, duration: 2, ease: 'power3.out' }
      );
      
      gsap.fromTo('.reveal-inner', 
        { y: '110%' }, 
        { y: '0%', duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.5 }
      );

      gsap.to('.orb-1', { y: 100, x: 50, duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.orb-2', { y: -100, x: -50, duration: 12, repeat: -1, yoyo: true, ease: 'sine.inOut' });

      // 2. Story Blocks
      const storyBlocks = gsap.utils.toArray('.story-block');
      storyBlocks.forEach(block => {
        gsap.fromTo(block.querySelector('.story-img-container'),
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', scrollTrigger: { trigger: block, start: 'top 80%' } }
        );
        gsap.fromTo(block.querySelectorAll('p, h2'),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: block, start: 'top 75%' } }
        );
      });

      // 3. Signature SVG Path Drawing
      gsap.fromTo('.sig-path-line', 
        { strokeDasharray: "0, 4000" }, 
        { strokeDasharray: "4000, 0", 
          ease: "none", 
          scrollTrigger: {
            trigger: ".path-container",
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1
          }
        }
      );

      gsap.fromTo('.station-card',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.3, duration: 1, scrollTrigger: { trigger: ".path-container", start: "top 50%" } }
      );



      // 4. CEO Section Animations
      gsap.fromTo('.ceo-image-container',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out', scrollTrigger: { trigger: '.ceo-section', start: 'top 75%' } }
      );
      gsap.fromTo('.ceo-content > *',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.ceo-section', start: 'top 70%' } }
      );

      // 7. Promise Cinematic Ending
      gsap.to('.promise-bg img', {
        scale: 1,
        scrollTrigger: {
          trigger: ".promise-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page-wrapper" ref={containerRef}>
      <Helmet>
        <title>Luxury Event Management & Wedding Planner Abu Dhabi | Perfect Party Events</title>
        <meta name="description" content="Discover Perfect Party Events, the leading luxury event management and wedding planner in Abu Dhabi, Dubai & the UAE. We design bespoke weddings, galas, and corporate events." />
        <link rel="canonical" href="https://www.perfectpartyevents.ae/about" />
        <script type="application/ld+json">{JSON.stringify(aboutStructuredData)}</script>
      </Helmet>
      
      {/* Background Ambience */}
      <div className="bg-ambient">
        <div className="bg-ambient-orb orb-1"></div>
        <div className="bg-ambient-orb orb-2"></div>
        <div className="bg-ambient-orb orb-3"></div>
      </div>

      {/* 1. EDITORIAL HERO */}
      <section className="about-hero section-relative">
        <div className="container about-hero-grid">
          <div className="about-hero-content">
            <div className="about-hero-title-wrap">
              <div className="about-hero-title-line"></div>
              <h1>
                <span className="reveal-text"><span className="reveal-inner">The Curators of</span></span><br/>
                <span className="reveal-text"><span className="reveal-inner">Bespoke Moments</span></span><br/>
                <span className="reveal-text"><span className="reveal-inner"><em>in Abu Dhabi &amp; UAE.</em></span></span>
              </h1>
            </div>
            <p className="about-hero-text reveal-text"><span className="reveal-inner">Perfect Party Events is the premier luxury event management and wedding planner agency based in Abu Dhabi, UAE. We specialize in curating high-society weddings, corporate conferences, product launches, and experiential brand activations across Abu Dhabi, Dubai, and the wider UAE.</span></p>
          </div>
          <div className="about-hero-visual">
            <div className="about-hero-img-mask">
              <img src="/about/hero.png" alt="Luxury wedding planning and event management in Abu Dhabi UAE" className="about-hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="story-section section-relative">
        <div className="container">
          
          <div className="story-block">
            <div className="story-visual">
              <div className="story-img-container">
                <img src="/about/ourstory.png" alt="Wedding Styling" className="story-img" />
              </div>
            </div>
            <div className="story-content">
              <span className="section-label">Our Story</span>
              <h2>The pursuit of <br/><em>absolute perfection.</em></h2>
              <p>At Perfect Party Events, we believe every celebration deserves to be unforgettable. Our mission is to craft moments that go beyond décor and dining — experiences that leave lasting memories. With a passion for creativity, luxury, and attention to detail, we turn ordinary gatherings into extraordinary events that tell your story beautifully.</p>
            </div>
          </div>

          <div className="story-block">
            <div className="story-content">
              <span className="section-label" style={{ paddingLeft: '15px' }}>The Experience</span>
              <h2>A canvas of <br/><em>pure emotion.</em></h2>
              <p>From intimate family celebrations to grand corporate galas, we deliver bespoke event planning and catering services across the UAE, blending elegance, innovation, and flawless execution. Every detail, from the ambiance to the cuisine, is designed to reflect your unique style and vision.</p>
              <p>Our mission is to create meaningful, unforgettable moments that last a lifetime. With a deep passion for detail and a flair for innovation, we curate stunning settings, thoughtful designs, and flawless execution that make every celebration truly perfect.</p>
            </div>
            <div className="story-visual">
              <div className="story-img-container">
                <img src="/about/experience.png" alt="Elegant Tablescape" className="story-img" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE VISIONARY / CEO */}
      <section className="ceo-section section-relative dark-theme">
        <div className="ceo-watermark" aria-hidden="true">V</div>
        <div className="container ceo-grid">
          <div className="ceo-content">
            <div className="ceo-content-inner">
              <span className="section-label rose-gold-text">The Visionary</span>
              <h2>"We don't just plan events; <br/>we engineer <em>unforgettable emotions.</em>"</h2>
              <div className="ceo-separator"></div>
              <p className="ceo-bio">
                With over a decade of curating high-society celebrations across the UAE and globally, our Founder & CEO believes that true luxury lies in the unseen details. Every sketch, every floral arrangement, and every lighting cue is meticulously orchestrated to transcend expectations.
              </p>
              <div className="ceo-signature">
                <span className="ceo-name">Fareeha Waqar</span>
                <span className="ceo-title">Founder & CHIEF EXECUTIVE OFFICER</span>
              </div>
            </div>
          </div>
          <div className="ceo-visual">
            <div className="ceo-frame">
              <img src="/about/founder.jpeg" alt="CEO Portrait" className="ceo-img" />
              <div className="ceo-img-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PERFECT PARTY SIGNATURE */}
      <section className="signature-section section-relative">
        <div className="container">
          <div className="sig-header">
            <span className="section-label">Our Philosophy</span>
            <h2>The Signature <em>Journey</em></h2>
          </div>
          
          <div className="path-container">
            <svg className="sig-path-svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
              <path className="sig-path-line" d="M 120 60 C 400 60, 300 240, 420 240 C 600 240, 600 120, 780 120 C 900 120, 1000 360, 1020 360 C 1040 360, 600 540, 600 540" />
            </svg>

            <div className="station-item station-1">
              <div className="station-card glass-panel">
                <span className="station-num">01.</span>
                <h3 className="station-title">Dream</h3>
                <p className="station-desc">Unearthing your vision and unspoken desires.</p>
              </div>
            </div>
            <div className="station-item station-2">
              <div className="station-card glass-panel">
                <span className="station-num">02.</span>
                <h3 className="station-title">Design</h3>
                <p className="station-desc">Sketching the architecture of your celebration.</p>
              </div>
            </div>
            <div className="station-item station-3">
              <div className="station-card glass-panel">
                <span className="station-num">03.</span>
                <h3 className="station-title">Curate</h3>
                <p className="station-desc">Sourcing world-class artisans and materials.</p>
              </div>
            </div>
            <div className="station-item station-4">
              <div className="station-card glass-panel">
                <span className="station-num">04.</span>
                <h3 className="station-title">Execute</h3>
                <p className="station-desc">Precision engineering behind the scenes.</p>
              </div>
            </div>
            <div className="station-item station-5">
              <div className="station-card glass-panel">
                <span className="station-num">05.</span>
                <h3 className="station-title">Celebrate</h3>
                <p className="station-desc">The flawless realization of your masterpiece.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US / THE DIFFERENCE */}
      <section className="why-us-section section-relative">
        <div className="container">
          <div className="why-us-header text-center">
            <span className="section-label">The PPE Difference</span>
            <h2>Four Pillars of <br/><em>Excellence</em></h2>
          </div>
          
          <div className="compact-accordion">
            {pillarsData.map((pillar) => (
              <div key={pillar.id} className="accordion-panel group">
                <img src={pillar.image} alt={pillar.title} className="accordion-bg" />
                <div className="accordion-overlay"></div>
                
                <div className="accordion-content">
                  <div className="accordion-header">
                    <span className="accordion-num">{pillar.id}</span>
                    <h3 className="accordion-title-vertical">{pillar.title}</h3>
                  </div>
                  
                  <div className="accordion-details">
                    <h3 className="accordion-title">{pillar.title}</h3>
                    <p className="accordion-desc">{pillar.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="cta-section">
        <div className="cta-bg-wrap">
          <img
            src="/about/CTA.png"
            alt="Luxury wedding planners and event organizers in Abu Dhabi and Dubai, UAE"
            className="cta-bg-img"
          />
          <div className="cta-bg-overlay"></div>
        </div>

        <div className="container cta-inner">
          <div className="cta-orb"></div>

          <div className="cta-content">
            <span className="cta-kicker">Elite Event Management in Abu Dhabi & Dubai</span>
            <h2 className="cta-heading">
              Let's design your next <br/>
              <em>masterpiece in the UAE.</em>
            </h2>
            <p className="cta-subtext">
              Whether you are planning a prestigious corporate gala in Abu Dhabi, a destination wedding in Dubai, or a luxury brand activation in the UAE, our experienced event organizers manage and style every detail to perfection.
            </p>
            <div className="cta-actions">
              <a href="#" onClick={(e) => e.preventDefault()} className="cta-btn-primary">
                <span>Schedule a VIP Consultation</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="cta-btn-primary">
                <span>Explore Our Event Gallery</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>

          <div className="cta-divider">
            <div className="cta-stat-inline">
              <span className="cta-stat-num">500<em>+</em></span>
              <span className="cta-stat-label">Luxury Events Managed</span>
            </div>
            <div className="cta-vline"></div>
            <div className="cta-stat-inline">
              <span className="cta-stat-num">15<em>+</em></span>
              <span className="cta-stat-label">Years Event Styling</span>
            </div>
            <div className="cta-vline"></div>
            <div className="cta-stat-inline">
              <span className="cta-stat-num">Top<em>Ranked</em></span>
              <span className="cta-stat-label">Event Planners UAE</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
