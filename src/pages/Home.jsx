import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.perfectpartyevents.ae/#organization',
      name: 'Perfect Party Events',
      url: 'https://www.perfectpartyevents.ae/',
      logo: 'https://www.perfectpartyevents.ae/logo.png',
      email: 'hello@perfectpartyevents.ae',
      description: 'Luxury event management, wedding planning, event styling, and corporate event production across Dubai and Abu Dhabi, UAE.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Dubai Design District, Building 7, Office 401',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
      areaServed: [
        { '@type': 'City', name: 'Dubai' },
        { '@type': 'City', name: 'Abu Dhabi' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.perfectpartyevents.ae/#event-services',
      name: 'Luxury Event Management Services in the UAE',
      numberOfItems: 5,
      itemListElement: [
        ['Luxury Wedding Planning & Design', 'Luxury wedding planning, venue selection, floral styling, and full-scale wedding production in Dubai and Abu Dhabi.', '/home/1.png'],
        ['Corporate Galas & Awards Production', 'Corporate gala, awards ceremony, stage design, audio-visual production, and VIP hospitality services across the UAE.', '/home/2.png'],
        ['Bespoke Product Launch Events', 'Experiential product launches, media styling, technical staging, and branded event environments in the UAE.', '/home/3.png'],
        ['Corporate Conferences & Summits', 'End-to-end conference and summit management, AV logistics, live streaming, interpretation, and registration in Dubai and Abu Dhabi.', '/home/4.png'],
        ['Experiential Brand Activations', 'Interactive brand activations, luxury pop-ups, retail installations, and consumer experiences across the Emirates.', '/home/5.png'],
      ].map(([name, description, image], index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name,
          description,
          image: `https://www.perfectpartyevents.ae${image}`,
          url: 'https://www.perfectpartyevents.ae/services',
          provider: { '@id': 'https://www.perfectpartyevents.ae/#organization' },
          areaServed: ['Dubai', 'Abu Dhabi', 'United Arab Emirates'],
        },
      })),
    },
  ],
};

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Image Parallax & Scale
      gsap.fromTo('.hero-img-inner', 
        { scale: 1.2 }, 
        { 
          scale: 1, 
          ease: 'power3.out', 
          duration: 2 
        }
      );
      
      gsap.to('.hero-img-inner', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-editorial',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Text Reveal
      gsap.fromTo('.reveal-inner', 
        { y: '110%' }, 
        { 
          y: '0%', 
          duration: 1.2, 
          stagger: 0.15, 
          ease: 'power4.out',
          delay: 0.5 
        }
      );

      // Section Fade Ups
      const fadeUpElements = gsap.utils.toArray('.fade-up');
      fadeUpElements.forEach(el => {
        gsap.fromTo(el, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        );
      });

      // Horizontal Parallax for Services Images
      const serviceImages = gsap.utils.toArray('.service-img img');
      serviceImages.forEach(img => {
        gsap.fromTo(img, 
          { scale: 1.2, transformOrigin: 'center center' },
          {
            scale: 1,
            scrollTrigger: {
              trigger: img.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="home-editorial" ref={containerRef}>
      <script type="application/ld+json">{JSON.stringify(homeStructuredData)}</script>
      
      {/* Editorial Hero */}
      <section className="hero-editorial">
        <div className="container hero-grid">
          <div className="hero-text-content">
            <h1 className="hero-heading">
              <span className="reveal-text"><span className="reveal-inner">Luxury Event</span></span><br/>
              <span className="reveal-text"><span className="reveal-inner">Management</span></span><br/>
              <span className="reveal-text"><span className="reveal-inner accent-dusty">&amp; Wedding Planner.</span></span>
            </h1>
            <div className="hero-meta fade-up" style={{ animationDelay: '1.5s' }}>
              <p>We plan, style, and coordinate premier corporate events, luxury weddings, theme decorations, and private celebrations across Dubai & Abu Dhabi, UAE.</p>
              <Link to="/services" className="btn-editorial">Explore Services</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-img-mask">
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Luxury Event" 
                className="hero-img-inner"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Stats — Editorial Redesign */}
      <section className="stats-editorial">
        <div className="stats-ticker">
          {[...Array(2)].map((_, idx) => (
            <div className="ticker-track" key={idx}>
              <span>Luxury Weddings</span>
              <span className="ticker-divider">✦</span>
              <span>Corporate Events</span>
              <span className="ticker-divider">✦</span>
              <span>Private Celebrations</span>
              <span className="ticker-divider">✦</span>
              <span>Event Styling & Design</span>
              <span className="ticker-divider">✦</span>
              <span>Stage Productions</span>
              <span className="ticker-divider">✦</span>
            </div>
          ))}
        </div>

        <div className="container">
          <div className="stats-grid">
            <div className="stat-item fade-up">
              <div className="stat-top">
                <span className="stat-num">15<em>+</em></span>
              </div>
              <div className="stat-bottom">
                <p className="stat-label">Years of <br/> Bespoke Craft</p>
                <span className="stat-index">01</span>
              </div>
            </div>

            <div className="stat-item fade-up">
              <div className="stat-top">
                <span className="stat-num">500<em>+</em></span>
              </div>
              <div className="stat-bottom">
                <p className="stat-label">Curated Luxury <br/> Weddings</p>
                <span className="stat-index">02</span>
              </div>
            </div>

            <div className="stat-item fade-up">
              <div className="stat-top">
                <span className="stat-num">10k<em>+</em></span>
              </div>
              <div className="stat-bottom">
                <p className="stat-label">Guests Wowed <br/> Across UAE</p>
                <span className="stat-index">03</span>
              </div>
            </div>

            <div className="stat-item fade-up">
              <div className="stat-top">
                <span className="stat-num">100<em>%</em></span>
              </div>
              <div className="stat-bottom">
                <p className="stat-label">Client <br/> Satisfaction</p>
                <span className="stat-index">04</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Services Preview — Highly SEO Structured Schema Markup */}
      <section className="services-editorial services-editorial-tight" id="event-management-services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-title-wrap fade-up">
            <span className="section-kicker">Our Expertise</span>
            <h2 id="services-title">Bespoke Event Styling &amp; <span className="accent-dusty">Management Services</span></h2>
          </div>

          <div className="service-list">

            {/* Service 1 — Luxury Weddings */}
            <article className="service-row fade-up" itemScope itemType="https://schema.org/Service">
              <meta itemProp="serviceType" content="Luxury wedding planning and event design" />
              <meta itemProp="areaServed" content="Dubai, Abu Dhabi, United Arab Emirates" />
              <div className="service-info">
                <h3 itemProp="name">Luxury Wedding Planning &amp; Design</h3>
                <p itemProp="description">Architecting breathtaking luxury weddings in Dubai and Abu Dhabi. We manage everything from bespoke venue selection and sublime floral styling to full-scale event production, ensuring your dream wedding is executed flawlessly.</p>
                <Link to="/services" className="btn-editorial" itemProp="url" aria-label="Learn more about Luxury Wedding Planning in Dubai and Abu Dhabi">Learn More</Link>
              </div>
              <div className="service-visual">
                <div className="service-img">
                  <img src="/home/1.png" itemProp="image" alt="Luxury wedding planning and bespoke event design in Dubai, UAE" loading="lazy" />
                </div>
              </div>
            </article>

            {/* Service 2 — Corporate Galas */}
            <article className="service-row reverse fade-up" itemScope itemType="https://schema.org/Service">
              <meta itemProp="serviceType" content="Corporate gala and awards ceremony production" />
              <meta itemProp="areaServed" content="Dubai, Abu Dhabi, United Arab Emirates" />
              <div className="service-visual">
                <div className="service-img square">
                  <img src="/home/2.png" itemProp="image" alt="Corporate gala dinner and awards ceremony production in Dubai" loading="lazy" />
                </div>
              </div>
              <div className="service-info">
                <h3 itemProp="name">Corporate Galas &amp; Awards Production</h3>
                <p itemProp="description">Elevating high-end corporate retreats, annual galas, and prestigious award ceremonies across the UAE. We deliver complete audio-visual setup, stage design, VIP guest hospitality, and premium coordination.</p>
                <Link to="/services" className="btn-editorial" itemProp="url" aria-label="Learn more about corporate gala and awards production in the UAE">Learn More</Link>
              </div>
            </article>

            {/* Service 3 — Product Launches */}
            <article className="service-row fade-up" itemScope itemType="https://schema.org/Service">
              <meta itemProp="serviceType" content="Experiential product launch event production" />
              <meta itemProp="areaServed" content="Dubai, Abu Dhabi, United Arab Emirates" />
              <div className="service-info">
                <h3 itemProp="name">Bespoke Product Launch Events</h3>
                <p itemProp="description">Unveil your brand to the UAE market with precision. We specialize in experiential product launches, premium media styling, high-end technical staging, and interactive custom brand environments.</p>
                <Link to="/services" className="btn-editorial" itemProp="url" aria-label="Learn more about bespoke product launch events in the UAE">Learn More</Link>
              </div>
              <div className="service-visual">
                <div className="service-img">
                  <img src="/home/3.png" itemProp="image" alt="Bespoke product launch stage and experiential production in the UAE" loading="lazy" />
                </div>
              </div>
            </article>

            {/* Service 4 — Conferences & Summits */}
            <article className="service-row reverse fade-up" itemScope itemType="https://schema.org/Service">
              <meta itemProp="serviceType" content="Corporate conference and summit management" />
              <meta itemProp="areaServed" content="Dubai, Abu Dhabi, United Arab Emirates" />
              <div className="service-visual">
                <div className="service-img square">
                  <img src="/home/4.png" itemProp="image" alt="Corporate conference and summit management in Abu Dhabi, UAE" loading="lazy" />
                </div>
              </div>
              <div className="service-info">
                <h3 itemProp="name">Corporate Conferences &amp; Summits</h3>
                <p itemProp="description">End-to-end congress and summit coordination in Dubai for global enterprises. Managing AV logistics, live broadcast streaming, interpreter setups, and premium registration portals.</p>
                <Link to="/services" className="btn-editorial" itemProp="url" aria-label="Learn more about corporate conference and summit management in the UAE">Learn More</Link>
              </div>
            </article>

            {/* Service 5 — Brand Activations */}
            <article className="service-row fade-up" itemScope itemType="https://schema.org/Service">
              <meta itemProp="serviceType" content="Experiential brand activation and luxury pop-up production" />
              <meta itemProp="areaServed" content="Dubai, Abu Dhabi, United Arab Emirates" />
              <div className="service-info">
                <h3 itemProp="name">Experiential Brand Activations</h3>
                <p itemProp="description">Forging powerful, emotional connections between consumers and your product. Interactive pop-up shops, luxury shopping mall setups, and creative digital installations across the Emirates.</p>
                <Link to="/services" className="btn-editorial" itemProp="url" aria-label="Learn more about experiential brand activations in Dubai and Abu Dhabi">Learn More</Link>
              </div>
              <div className="service-visual">
                <div className="service-img">
                  <img src="/home/5.png" itemProp="image" alt="Experiential brand activation and luxury pop-up event in Dubai" loading="lazy" />
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section" id="client-stories" aria-labelledby="client-stories-title">

        <div className="container">
          <div className="testi-header fade-up">
            <span className="section-kicker">Client Stories</span>
            <h2 id="client-stories-title">Voices of <span className="accent-rose">unforgettable moments.</span></h2>
            <p className="testi-subtext">From intimate weddings to grand galas — here is what our clients say about their Perfect Party experience.</p>
          </div>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="testi-track-wrap">
          <div className="testi-track testi-track-left">
            {[
              { name: 'Sarah Al Mansouri', event: 'Leadership Gala · Dubai', text: 'Perfect Party Events transformed our corporate gala into something out of a film. Every guest was speechless — the florals, the lighting, the staging. Simply breathtaking.', avatar: 'linear-gradient(135deg,#E8B4B8,#C9888D)' },
              { name: 'Layla & Khalid Hassan', event: 'Luxury Wedding · Abu Dhabi', text: 'We felt like royalty on our wedding day. Every single detail was handled with such grace and precision. Truly a once-in-a-lifetime experience we will cherish forever.', avatar: 'linear-gradient(135deg,#F7D5C7,#D98E95)' },
              { name: 'Omar Farouq', event: 'Product Launch · DIFC, Dubai', text: 'From concept to execution — absolutely flawless. Perfect Party Events elevated our brand image overnight. Clients still talk about it months later.', avatar: 'linear-gradient(135deg,#FCE7DF,#C9888D)' },
              { name: 'Nadia Al Rashid', event: 'Anniversary Dinner · Jumeirah', text: 'The most beautiful evening of my life. The team understood my vision perfectly and delivered something even more magical than I had imagined.', avatar: 'linear-gradient(135deg,#E8B4B8,#D98E95)' },
              { name: 'Faisal Al Hamdan', event: 'Corporate Summit · ADNOC', text: 'Seamless organisation, incredible production value and a team that truly goes above and beyond. Our delegates were impressed from the moment they arrived.', avatar: 'linear-gradient(135deg,#C9888D,#E8B4B8)' },
              { name: 'Mariam Khalil', event: 'Baby Shower · Palm Jumeirah', text: 'The decor was out of this world. Every corner was a photo opportunity. All our guests kept asking who planned it — we were so proud to say Perfect Party!', avatar: 'linear-gradient(135deg,#F7D5C7,#E8B4B8)' },
              { name: 'Sarah Al Mansouri', event: 'Leadership Gala · Dubai', text: 'Perfect Party Events transformed our corporate gala into something out of a film. Every guest was speechless — the florals, the lighting, the staging. Simply breathtaking.', avatar: 'linear-gradient(135deg,#E8B4B8,#C9888D)' },
              { name: 'Layla & Khalid Hassan', event: 'Luxury Wedding · Abu Dhabi', text: 'We felt like royalty on our wedding day. Every single detail was handled with such grace and precision. Truly a once-in-a-lifetime experience we will cherish forever.', avatar: 'linear-gradient(135deg,#F7D5C7,#D98E95)' },
              { name: 'Omar Farouq', event: 'Product Launch · DIFC, Dubai', text: 'From concept to execution — absolutely flawless. Perfect Party Events elevated our brand image overnight. Clients still talk about it months later.', avatar: 'linear-gradient(135deg,#FCE7DF,#C9888D)' },
              { name: 'Nadia Al Rashid', event: 'Anniversary Dinner · Jumeirah', text: 'The most beautiful evening of my life. The team understood my vision perfectly and delivered something even more magical than I had imagined.', avatar: 'linear-gradient(135deg,#E8B4B8,#D98E95)' },
              { name: 'Faisal Al Hamdan', event: 'Corporate Summit · ADNOC', text: 'Seamless organisation, incredible production value and a team that truly goes above and beyond. Our delegates were impressed from the moment they arrived.', avatar: 'linear-gradient(135deg,#C9888D,#E8B4B8)' },
              { name: 'Mariam Khalil', event: 'Baby Shower · Palm Jumeirah', text: 'The decor was out of this world. Every corner was a photo opportunity. All our guests kept asking who planned it — we were so proud to say Perfect Party!', avatar: 'linear-gradient(135deg,#F7D5C7,#E8B4B8)' },
            ].map((r, i) => (
              <article className="rcard" key={i} aria-label={`${r.event} client story from ${r.name}`}>
                <div className="rcard-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote className="rcard-text">&ldquo;{r.text}&rdquo;</blockquote>
                <footer className="rcard-footer">
                  <div className="rcard-avatar" style={{background: r.avatar}} aria-hidden="true"></div>
                  <div>
                    <cite className="rcard-name">{r.name}</cite>
                    <span className="rcard-event">{r.event}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="testi-track-wrap">
          <div className="testi-track testi-track-right">
            {[
              { name: 'Yasmine Al Zaabi', event: 'Engagement Party · Dubai Marina', text: 'Perfection in every detail. Our guests have not stopped complimenting the event. The floral arch alone was worth every dirham.', avatar: 'linear-gradient(135deg,#D98E95,#FCE7DF)' },
              { name: 'Tariq Saeed', event: 'Brand Activation · Mall of Emirates', text: 'The team created an immersive brand experience that stopped shoppers in their tracks. Footfall was triple what we expected. Outstanding work.', avatar: 'linear-gradient(135deg,#C9888D,#F7D5C7)' },
              { name: 'Hessa Al Muhairi', event: 'Private Gala · Burj Al Arab', text: 'We have attended many events, but nothing has ever compared to this. The ambiance, the precision, the warmth of the team — we are lifelong clients now.', avatar: 'linear-gradient(135deg,#E8B4B8,#FCE7DF)' },
              { name: 'Ahmed & Rima Jaber', event: 'Wedding · Atlantis The Palm', text: 'From the first meeting to the last dance, Perfect Party made our wedding feel effortless. We were fully present because we trusted them completely.', avatar: 'linear-gradient(135deg,#F7D5C7,#C9888D)' },
              { name: 'Dalal Al Sayed', event: 'Award Ceremony · DIFC', text: 'A faultless evening. Production, catering, entertainment — all curated to absolute perfection. Our award winners were truly honoured.', avatar: 'linear-gradient(135deg,#D98E95,#E8B4B8)' },
              { name: 'Rashed Al Nuaimi', event: 'VIP Conference · Abu Dhabi', text: 'I have used premium event agencies across three countries. Perfect Party is the only team that has ever made me feel I was their only client.', avatar: 'linear-gradient(135deg,#FCE7DF,#D98E95)' },
              { name: 'Yasmine Al Zaabi', event: 'Engagement Party · Dubai Marina', text: 'Perfection in every detail. Our guests have not stopped complimenting the event. The floral arch alone was worth every dirham.', avatar: 'linear-gradient(135deg,#D98E95,#FCE7DF)' },
              { name: 'Tariq Saeed', event: 'Brand Activation · Mall of Emirates', text: 'The team created an immersive brand experience that stopped shoppers in their tracks. Footfall was triple what we expected. Outstanding work.', avatar: 'linear-gradient(135deg,#C9888D,#F7D5C7)' },
              { name: 'Hessa Al Muhairi', event: 'Private Gala · Burj Al Arab', text: 'We have attended many events, but nothing has ever compared to this. The ambiance, the precision, the warmth of the team — we are lifelong clients now.', avatar: 'linear-gradient(135deg,#E8B4B8,#FCE7DF)' },
              { name: 'Ahmed & Rima Jaber', event: 'Wedding · Atlantis The Palm', text: 'From the first meeting to the last dance, Perfect Party made our wedding feel effortless. We were fully present because we trusted them completely.', avatar: 'linear-gradient(135deg,#F7D5C7,#C9888D)' },
              { name: 'Dalal Al Sayed', event: 'Award Ceremony · DIFC', text: 'A faultless evening. Production, catering, entertainment — all curated to absolute perfection. Our award winners were truly honoured.', avatar: 'linear-gradient(135deg,#D98E95,#E8B4B8)' },
              { name: 'Rashed Al Nuaimi', event: 'VIP Conference · Abu Dhabi', text: 'I have used premium event agencies across three countries. Perfect Party is the only team that has ever made me feel I was their only client.', avatar: 'linear-gradient(135deg,#FCE7DF,#D98E95)' },
            ].map((r, i) => (
              <article className="rcard" key={i} aria-label={`${r.event} client story from ${r.name}`}>
                <div className="rcard-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote className="rcard-text">&ldquo;{r.text}&rdquo;</blockquote>
                <footer className="rcard-footer">
                  <div className="rcard-avatar" style={{background: r.avatar}} aria-hidden="true"></div>
                  <div>
                    <cite className="rcard-name">{r.name}</cite>
                    <span className="rcard-event">{r.event}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>

      </section>

      {/* ── TRUSTED BY ── */}
      <section className="trustedby-section" aria-labelledby="partnerships-title">
        <div className="partnerships-watermark" aria-hidden="true">PARTNERS</div>
        <div className="container">
          <div className="trustedby-grid-layout">
            <div className="trustedby-info fade-up">
              <span className="section-kicker">Distinguished Partnerships</span>
              <h2 id="partnerships-title">In exceptional <br /> <em>company.</em></h2>
              <p className="trustedby-sub">We are proud to have orchestrated bespoke experiences and premium activations for the UAE's most prestigious luxury brands, hotels, and institutions.</p>
              <div className="partnership-note">
                <span className="partnership-note-line"></span>
                <span>Relationships built through remarkable experiences</span>
              </div>
            </div>

            <div className="partner-stage fade-up" aria-label="Selected distinguished partners">
              <span className="partner-stage-label">Selected collaborations</span>
              <div className="partner-flow">
                {[
                  { name: 'EMAAR', style: 'emaar' },
                  { name: 'Four Seasons', style: 'four-seasons' },
                  { name: 'MARRIOTT BONVOY', style: 'marriott' },
                  { name: 'ADNOC', style: 'adnoc' },
                  { name: 'DAMAC', style: 'damac' },
                  { name: 'Jumeirah', style: 'jumeirah' },
                  { name: 'DEWA', style: 'dewa' },
                  { name: 'BVLGARI HOTELS', style: 'bvlgari' },
                ].map((brand) => (
                  <span className={`partner-wordmark ${brand.style}`} key={brand.name}>{brand.name}</span>
                ))}
              </div>
              <div className="partner-sectors" aria-hidden="true">
                <span>Luxury</span><i></i><span>Hospitality</span><i></i><span>Enterprise</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Premium CTA Section */}
      <section className="cta-section">
        <div className="cta-bg-wrap">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Luxury Event Background"
            className="cta-bg-img"
          />
          <div className="cta-bg-overlay"></div>
        </div>

        <div className="container cta-inner">
          <div className="cta-orb"></div>

          <div className="cta-content fade-up">
            <span className="cta-kicker">Begin Your Story</span>
            <h2 className="cta-heading">
              Your most extraordinary <br/>
              <em>moment awaits.</em>
            </h2>
            <p className="cta-subtext">
              From intimate private affairs to grand-scale corporate galas across Dubai & Abu Dhabi — we engineer unforgettable events for clients who demand only the finest.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="cta-btn-primary">
                <span>Book a Private Consultation</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link to="/gallery" className="cta-btn-ghost">View Our Work</Link>
            </div>
          </div>

          <div className="cta-divider fade-up">
            <div className="cta-stat-inline">
              <span className="cta-stat-num">500<em>+</em></span>
              <span className="cta-stat-label">Events Executed</span>
            </div>
            <div className="cta-vline"></div>
            <div className="cta-stat-inline">
              <span className="cta-stat-num">15<em>+</em></span>
              <span className="cta-stat-label">Years of Excellence</span>
            </div>
            <div className="cta-vline"></div>
            <div className="cta-stat-inline">
              <span className="cta-stat-num">100<em>%</em></span>
              <span className="cta-stat-label">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
