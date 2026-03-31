import React from 'react';
import heroFoodBg from '../assets/hero-food-bg.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg-image" style={{ backgroundImage: `url(${heroFoodBg})` }}></div>
      <div className="hero-bg-overlay"></div>
      <div className="hero-pill">Clinically Designed Nutrition for Mounjuro / Ozempic Patients</div>
      <h1>
        On Ozempic or Wegovy?<br />
        <em>Your Food Matters More<br />Than Ever.</em>
        <span className="line2">Real food. Delivered. Built around your injection schedule.</span>
      </h1>
      <p className="hero-sub">Mounjuro / Ozempic medications reduce your appetite dramatically — but they don't choose what you eat. <strong>Without the right nutrition, you risk losing muscle, not fat.</strong> Our expert-designed meal plans ensure every bite counts.</p>
      <div className="hero-btns">
        <a href="https://www.goorganic.me/categories/ozempic-mounjaro" className="btn-primary">View All Meal Plans →</a>
        <a href="https://wa.me/+971556250664" target="_blank" rel="noopener noreferrer" className="btn-secondary">Talk to an Expert</a>
      </div>
      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hs-num">100K+</div>
          <div className="hs-label">Clients in UAE</div>
        </div>
        <div className="hero-stat">
          <div className="hs-num">11 Yrs</div>
          <div className="hs-label">Operating in UAE</div>
        </div>
        <div className="hero-stat">
          <div className="hs-num">3 Plans</div>
          <div className="hs-label">For Every Mounjuro / Ozempic Stage</div>
        </div>
        <div className="hero-stat">
          <div className="hs-num">300+</div>
          <div className="hs-label">Google Reviews ⭐</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
