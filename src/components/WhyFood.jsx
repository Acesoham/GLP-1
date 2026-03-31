import React from 'react';

import bgImage2 from '../assets/GOOrganicME-1978.jpg';
const WhyFood = () => {
  return (
    <section className="section why-food reveal">
      <img src={bgImage2} alt="Smoothies Background" className="wf-bg-img" />
      <div className="wf-bg-overlay"></div>
      <div className="why-food-inner">
        <div className="label wf-label">The GoOrganic Difference</div>
        <h2 className="big wf-title-main">Why Our Mounjuro / Ozempic Plans Are<br /><em>Not Like Any Other Meal Plan.</em></h2>
        <div className="wf-grid">
          <div className="wf-item">
            <div className="wf-icon">🧬</div>
            <div className="wf-title">Mounjuro / Ozempic Specific Formulation</div>
            <div className="wf-desc">Every meal is designed specifically for the reduced appetite, slower digestion and muscle protection needs of Mounjuro / Ozempic patients. Not a generic healthy meal.</div>
          </div>
          <div className="wf-item">
            <div className="wf-icon">💪</div>
            <div className="wf-title">Muscle-First Nutrition</div>
            <div className="wf-desc">High bioavailable protein in every meal to ensure your body burns fat — not muscle — during the low-calorie phase of treatment.</div>
          </div>
          <div className="wf-item">
            <div className="wf-icon">🌿</div>
            <div className="wf-title">100% Plant-Based & Clean</div>
            <div className="wf-desc">No injections, powders or artificial supplements. Real whole food, HACCP certified kitchen, freshly prepared and delivered daily.</div>
          </div>
          <div className="wf-item">
            <div className="wf-icon">👩‍⚕️</div>
            <div className="wf-title">Expert Nutritionist Backed</div>
            <div className="wf-desc">Designed by our team of qualified nutritionists with over a decade of experience in clinical nutrition and metabolic health in the UAE.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFood;
