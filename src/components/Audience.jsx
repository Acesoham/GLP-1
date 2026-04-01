import React from 'react';

const Audience = () => {
  return (
    <section className="section audience reveal">
      <div className="audience-inner">
        <div className="label">Who This Is For</div>
        <h2 className="big">Wherever You Are in Your<br />Mounjuro / Ozempic Journey — <em>We Have a Plan.</em></h2>
        <p className="body-text">We've designed three distinct meal plans that match the exact nutritional needs of each stage of GLP-1 treatment.</p>
        <div className="audience-cards">
          <div className="aud-card on-glp">
            <div className="aud-icon">💉</div>
            <div className="aud-title">Currently on Mounjuro / Ozempic</div>
            <div className="aud-desc">You're on Ozempic, Wegovy or Mounjaro. Your appetite is suppressed. You're barely eating — but what you eat needs to be perfectly calibrated to protect your muscle, support your liver and maximise fat loss.</div>
            <a href="https://www.goorganic.me/products/powerful-post-2" target="_blank" rel="noopener noreferrer" className="aud-btn">5-Day & 20-Day Plans Available →</a>
          </div>

          <div className="aud-card post-glp">
            <div className="aud-icon">🔄</div>
            <div className="aud-title">Coming Off Mounjuro / Ozempic</div>
            <div className="aud-desc">You've stopped or are tapering off injections. Your appetite is returning. This is the critical window — without the right nutrition reset, weight rebounds fast. Our 40-Day Post-Injection Reset is built for exactly this.</div>
            <a href="https://www.goorganic.me/categories/40-day-glp-1-high-protein-weightloss-meal-plan" target="_blank" rel="noopener noreferrer" className="aud-btn">40-Day Post-Injection Reset →</a>
          </div>

          <div className="aud-card considering">
            <div className="aud-icon">🔍</div>
            <div className="aud-title">Considering Mounjuro / Ozempic</div>
            <div className="aud-desc">You're thinking about starting Mounjuro / Ozempic medication and want to understand how nutrition fits in. Our experts can guide you on how to maximise results from day one — food first, always.</div>
            <a href="https://wa.me/+971556250664" target="_blank" rel="noopener noreferrer" className="aud-btn">Book a Free Consultation →</a>
          </div>
        </div>
        <div className="section-btns">
          <a href="https://wa.me/+971525264045" className="btn-primary">TALK TO US →</a>
            
       
        </div>
      </div>
    </section>
  );
};

export default Audience;
