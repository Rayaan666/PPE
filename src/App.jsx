import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

// New Dedicated Service Pages
import LuxuryWeddings from './pages/services/LuxuryWeddings';
import CorporateGalas from './pages/services/CorporateGalas';
import ProductLaunches from './pages/services/ProductLaunches';
import CorporateConferences from './pages/services/CorporateConferences';
import BrandActivations from './pages/services/BrandActivations';
import PrivateCelebrations from './pages/services/PrivateCelebrations';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <CustomCursor />
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              
              {/* Dedicated Service Routes */}
              <Route path="/services/luxury-wedding-planner-abu-dhabi" element={<LuxuryWeddings />} />
              <Route path="/services/corporate-gala-events-abu-dhabi" element={<CorporateGalas />} />
              <Route path="/services/product-launch-events-abu-dhabi" element={<ProductLaunches />} />
              <Route path="/services/corporate-conference-organizer-abu-dhabi" element={<CorporateConferences />} />
              <Route path="/services/brand-activation-agency-abu-dhabi" element={<BrandActivations />} />
              <Route path="/services/theme-decoration-private-events-abu-dhabi" element={<PrivateCelebrations />} />

              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
