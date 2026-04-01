import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Audience from './components/Audience';
import Explainer from './components/Explainer';
import WarningBand from './components/WarningBand';
import Products from './components/Products';
import WhyFood from './components/WhyFood';
import QuoteBand from './components/QuoteBand';
import Experts from './components/Experts';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    // Scroll reveal observer
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('on');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Hide sticky near products observer
    const sticky = document.querySelector('.sticky');
    const productsEl = document.getElementById('products');
    
    if (sticky && productsEl) {
      const so = new IntersectionObserver(entries => {
        entries.forEach(e => {
          sticky.style.opacity = e.isIntersecting ? '0' : '1';
          sticky.style.pointerEvents = e.isIntersecting ? 'none' : 'auto';
        });
      }, { threshold: 0.3 });
      so.observe(productsEl);
      
      // Cleanup
      return () => {
        so.disconnect();
        io.disconnect();
      };
    }

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <>
      <Nav />
      {/* ═══ HERO ═══ */}
      <Hero />
      
      {/* ═══ AUDIENCE ═══ */}
      <Audience />
      
      {/* ═══ EXPLAINER + TIMELINE ═══ */}
      <Explainer />
      
      {/* ═══ WARNING BAND ═══ */}
      <WarningBand />
      
      {/* ═══ PRODUCTS ═══ */}
      <Products />
      
      {/* ═══ WHY FOOD MATTERS ═══ */}
      <WhyFood />
      
      {/* ═══ QUOTE ═══ */}
      <QuoteBand />
      
      {/* ═══ EXPERTS ═══ */}
      <Experts />
      
      {/* ═══ TESTIMONIALS ═══ */}
      <Testimonials />
      
      {/* ═══ FAQ ═══ */}
      <FAQ />
      
      {/* ═══ FINAL CTA ═══ */}
      <FinalCTA />
      
      {/* STICKY */}
      <a href="https://wa.me/+971525264045" className="nav-cta">Talk To Us</a>
      <a href="" className="sticky">Talk To Us→</a>
      
      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
