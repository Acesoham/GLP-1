import React from 'react';
import victoriaImg from '../assets/victoria.jpg';
import milaImg from '../assets/mila.jpeg';
import bhawnaImg from '../assets/bhavana.jpeg';
import coachDenImg from '../assets/coachden.jpeg';

const Experts = () => {
  return (
    <section className="experts reveal">
      <div className="experts-inner">
        <div className="label">Your Wellness Council</div>
        <h2 className="big">Plans Designed By Real Experts.<br /><em>Not an Algorithm.</em></h2>
        <p className="body-text">Every GoOrganic Mounjuro / Ozempic plan is developed and reviewed by our team of qualified nutritionists, gut health specialists and metabolic health experts based in the UAE.</p>
        <div className="experts-grid">
          <div className="expert-card">
            <div className="ex-avatar"><img src={victoriaImg} alt="Victoria Tipper" /></div>
            <div className="ex-name">Victoria Tipper</div>
            <div className="ex-role">Chief Wellness Officer</div>
            <div className="ex-creds">MSc Nutrition — Australia<br />BSc Genetics — UK<br />GAPS Practitioner — UK<br />ISSA Trainer — USA</div>
            <div className="ex-quote">"The goal is sustainable results. Mounjuro / Ozempic gives you a window — our food makes sure you use it properly."</div>
          </div>
          <div className="expert-card">
            <div className="ex-avatar"><img src={milaImg} alt="Mila Konsina" /></div>
            <div className="ex-name">Mila Konsina</div>
            <div className="ex-role">Nutritionist & Metabolic Specialist</div>
            <div className="ex-creds">Holistic Health Coach<br />Weight Loss Specialist<br />Gut Health Expert<br />Clinical Reset Designer</div>
            <div className="ex-quote">"On Mounjuro / Ozempic, every meal you eat must earn its place. Nutrient density over volume — always."</div>
          </div>
          <div className="expert-card">
            <div className="ex-avatar"><img src={bhawnaImg} alt="Bhawna Nihalani" /></div>
            <div className="ex-name">Bhawna Nihalani</div>
            <div className="ex-role">Gut Health Specialist</div>
            <div className="ex-creds">Certified Nutritionist<br />Gut & Microbiome Expert<br />Functional Nutrition<br />UAE Based</div>
            <div className="ex-quote">"Mounjuro / Ozempic slows digestion. Your microbiome takes the impact. We build every plan to protect it."</div>
          </div>
          <div className="expert-card">
            <div className="ex-avatar"><img src={coachDenImg} alt="Coach Den" /></div>
            <div className="ex-name">Coach Den</div>
            <div className="ex-role">Fitness & Nutrition Expert</div>
            <div className="ex-creds">Holistic Health Coach<br />Certified Personal Trainer<br />Fat Loss Specialist<br />Plant-Based Nutrition</div>
            <div className="ex-quote">"Muscle loss is the silent enemy of Mounjuro / Ozempic treatment. High-protein real food is the solution."</div>
          </div>
        </div>
        <div className="section-btns">
          <a href="https://www.goorganic.me/categories/ozempic-mounjaro" className="btn-primary">View All Mounjuro / Ozempic Plans →</a>
          <a href="https://wa.me/+971556250664" target="_blank" rel="noopener noreferrer" className="btn-secondary">Talk to an Expert</a>
        </div>
      </div>
    </section>
  );
};

export default Experts;
