import React from 'react';
import bgImage from '../assets/GoOrganicMarch2022-9977.jpg';

const Testimonials = () => {
  return (
    <section className="testimonials reveal">
      <img src={bgImage} alt="Testimonials Background" className="testimonials-bg-img" />
      <div className="testimonials-bg-overlay"></div>
      <div className="experts-inner">
        <div className="label">Client Experiences</div>
        <h2 className="big">Real People. Real Results.<br /><em style={{ color: 'var(--teal)' }}>Real Food.</em></h2>
        <div className="testi-grid">
          <div className="testi-card">
            <div className="testi-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            <p className="testi-text">I was on Ozempic for 4 months and losing weight but I was also losing energy and muscle. A friend recommended GoOrganic's Mounjuro / Ozempic plan. The difference was immediate — proper protein, the right calories, still losing fat but I felt strong. Wish I'd started this from day one.</p>
            <div className="testi-author">Layla H.</div>
            <div className="testi-detail">Dubai · 20-Day Mounjuro / Ozempic Plan</div>
            <div className="testi-badge">On Wegovy · 20-Day Plan</div>
          </div>
          <div className="testi-card">
            <div className="testi-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            <p className="testi-text">Coming off Mounjaro I was terrified about regaining. I started the 40-Day Post-Injection Reset immediately. 6 weeks later — I haven't regained a single kilogram. My relationship with food has completely changed. The meals were delivered fresh every day and actually tasted incredible.</p>
            <div className="testi-author">Rania M.</div>
            <div className="testi-detail">Abu Dhabi · 40-Day Post-Injection Reset</div>
            <div className="testi-badge">Post Mounjaro · 40-Day Reset</div>
          </div>
          <div className="testi-card">
            <div className="testi-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            <p className="testi-text">My doctor suggested Ozempic and I called GoOrganic before I even started. The 5-Day starter plan set me up perfectly. The expert explained exactly why protein matters on Mounjuro / Ozempic. I lost 6KG in the first month — all fat. Blood work was perfect at my follow-up. This is the right way to do it.</p>
            <div className="testi-author">James K.</div>
            <div className="testi-detail">Dubai · 5-Day Starter + 20-Day Plan</div>
            <div className="testi-badge">On Ozempic · Both Plans</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
