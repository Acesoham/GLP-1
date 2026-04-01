import React from 'react';

const FinalCTA = () => {
  return (
    <section className="final-cta reveal">
      <div className="final-cta::before"></div>
      <div className="label">Start Today</div>
      <h2 className="big" style={{ maxWidth: '700px', margin: '0 auto 16px' }}>Don't Let Mounjuro / Ozempic Work Against You.<br /><em>Give It the Right Food to Work With.</em></h2>
      <p className="body-text" style={{ maxWidth: '520px', margin: '0 auto 48px', color: 'var(--grey)', textAlign: 'center' }}>Your medication is doing its part. Our meal plans do the rest. Fresh food, expert-designed, delivered to your door across the UAE every single day.</p>
      <div className="final-btns">
        <a href="https://wa.me/+971525264045" className="btn-primary">TALK TO US →</a>
         <a href="https://www.goorganic.me/products/powerful-post-peptide-exit-protocol-1" className="btn-secondary">VIEW ALL GLP-1 PLANS →</a>
      </div>
      <div className="trust-row">
        <div className="trust-item">🔬 HACCP Certified Kitchen</div>
        <div className="trust-item">🌿 No Injections</div>
        <div className="trust-item">🚚 Daily Delivery Across UAE</div>
        <div className="trust-item">⭐ 300+ Google Reviews</div>
      </div>
    </section>
  );
};

export default FinalCTA;
