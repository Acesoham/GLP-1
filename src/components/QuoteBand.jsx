import React from 'react';
import victoriaImg from '../assets/victoria.jpg';

const QuoteBand = () => {
  return (
    <div className="quote-band">
      <div className="quote-text-side">
        <blockquote>"Mounjuro / Ozempic medications are a tool. Food is the foundation. Without the right nutrition protocol, you risk losing muscle, depleting your microbiome and regaining every kilogram the moment you stop. Our plans are built to prevent exactly that."</blockquote>
        <cite>— Victoria Tipper, MSc Nutrition · Chief Wellness Officer, GoOrganic</cite>
      </div>
      <div className="quote-image-side">
        <img src={victoriaImg} alt="Victoria Tipper" className="quote-avatar" />
      </div>
    </div>
  );
};

export default QuoteBand;
