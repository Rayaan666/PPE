import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

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

      // 5. Why Choose Us Animations
      gsap.fromTo('.pillar-card',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.why-us-section', start: 'top 70%' } }
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
                <span className="reveal-text"><span className="reveal-inner">Architects</span></span><br/>
                <span className="reveal-text"><span className="reveal-inner">of the</span></span><br/>
                <span className="reveal-text"><span className="reveal-inner"><em>Extraordinary.</em></span></span>
              </h1>
            </div>
            <p className="about-hero-text reveal-text"><span className="reveal-inner">Perfect Party Events is a premier luxury design and planning studio based in the UAE. We do not just plan events; we curate unforgettable cinematic experiences for the world's most discerning clientele.</span></p>
          </div>
          <div className="about-hero-visual">
            <div className="about-hero-img-mask">
              <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2000" alt="Luxury Event Decor" className="about-hero-img" />
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
                <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200" alt="Wedding Styling" className="story-img" />
              </div>
            </div>
            <div className="story-content">
              <span className="section-label">Our Genesis</span>
              <h2>The pursuit of <br/><em>absolute perfection.</em></h2>
              <p>Founded on the belief that every celebration should be a masterpiece, Perfect Party Events began as a boutique studio with a singular vision: to elevate the standard of luxury events in the region.</p>
              <p>We approach event design as a form of high art. From the initial sketch to the final execution, every element is considered, refined, and perfected.</p>
            </div>
          </div>

          <div className="story-block">
            <div className="story-content">
              <span className="section-label">The Experience</span>
              <h2>A canvas of <br/><em>pure emotion.</em></h2>
              <p>To walk into a Perfect Party event is to be transported. We layer sensory experiences—lighting, scent, texture, and sound—to create immersive worlds that resonate deeply with our clients and their guests.</p>
              <p>Our craftsmanship lies in the invisible details. The precision of the tablescape, the cascade of bespoke florals, the seamless orchestration behind the scenes.</p>
            </div>
            <div className="story-visual">
              <div className="story-img-container">
                <img src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200" alt="Elegant Tablescape" className="story-img" />
              </div>
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
          <div className="why-us-header">
            <span className="section-label">The PPE Difference</span>
            <h2>Four Pillars of <br/><em>Excellence</em></h2>
          </div>
          
          <div className="pillars-grid">
            <div className="pillar-card glass-panel">
              <div className="pillar-icon">01</div>
              <h3 className="pillar-title">Uncompromising Discretion</h3>
              <p className="pillar-desc">Strict privacy protocols and ironclad NDAs ensure your high-profile celebrations remain intimately yours, protected from the public eye.</p>
            </div>
            <div className="pillar-card glass-panel">
              <div className="pillar-icon">02</div>
              <h3 className="pillar-title">Spatial Architecture</h3>
              <p className="pillar-desc">We never rely on standard templates. Every venue is a blank canvas where we engineer custom pavilions and immersive environments from the ground up.</p>
            </div>
            <div className="pillar-card glass-panel">
              <div className="pillar-icon">03</div>
              <h3 className="pillar-title">Sensory Orchestration</h3>
              <p className="pillar-desc">Beyond visual aesthetics, we curate bespoke acoustics, ambient scents, and tactile experiences that guarantee a multi-dimensional emotional journey.</p>
            </div>
            <div className="pillar-card glass-panel">
              <div className="pillar-icon">04</div>
              <h3 className="pillar-title">Flawless Execution</h3>
              <p className="pillar-desc">With dedicated VIP concierges and precision military-grade timeline management, we orchestrate zero-friction setups behind the scenes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE VISIONARY / CEO */}
      <section className="ceo-section section-relative">
        <div className="container ceo-grid">
          <div className="ceo-visual">
            <div className="ceo-image-container">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200" alt="CEO Portrait" className="ceo-img" />
              <div className="ceo-img-overlay"></div>
            </div>
          </div>
          <div className="ceo-content glass-panel">
            <span className="section-label">The Visionary</span>
            <h2>"We don't just plan events; <br/>we engineer <em>unforgettable emotions.</em>"</h2>
            <p className="ceo-bio">
              With over a decade of curating high-society celebrations across the UAE and globally, our Founder & CEO believes that true luxury lies in the unseen details. Every sketch, every floral arrangement, and every lighting cue is meticulously orchestrated to transcend expectations.
            </p>
            <div className="ceo-signature">
              <span className="ceo-name">Alexander Sterling</span>
              <span className="ceo-title">Founder & Chief Creative Officer</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR PROMISE */}
      <section className="promise-section">
        <div className="promise-bg">
          <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=2400" alt="Cinematic Ending" />
        </div>
        <div className="promise-overlay"></div>
        <div className="promise-glass"></div>
        
        <div className="promise-content">
          <h2>Your legacy, <br/><em>beautifully told.</em></h2>
          <p>Entrust us with your most important moments. We promise an experience that transcends expectation.</p>
          <Link to="/contact" className="btn-promise">Begin the Conversation</Link>
        </div>
      </section>

    </div>
  );
};

export default About;
