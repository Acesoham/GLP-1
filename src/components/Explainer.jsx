import React from 'react';


const Explainer = () => {
  return (
    <section className="explainer reveal">
     
      <div className="explainer-grid">
        <div>
          <div className="label">Why Nutrition is Critical</div>
          <h2 className="big">Mounjuro / Ozempic Reduces Appetite.<br />It Doesn't Choose <em>What You Eat.</em></h2>
          <p className="body-text" style={{ marginBottom: 0 }}>The biggest risk with Mounjuro / Ozempic medications is not the injections themselves — it's what most patients eat (or don't eat) while on them. Our plans are designed to solve this.</p>
          <ul className="explainer-points">
            <li>
              <div className="ep-icon">💪</div>
              <div><strong>Protect Muscle Mass</strong><br />On low-calorie intake, your body cannibalises muscle before fat. Our plans are high-protein, clinically calibrated to preserve lean mass.</div>
            </li>
            <li>
              <div className="ep-icon">🫀</div>
              <div><strong>Support Liver & Gut Health</strong><br />Mounjuro / Ozempic medications slow digestion. Our meals are designed to support gut motility, liver function and microbiome balance during treatment.</div>
            </li>
            <li>
              <div className="ep-icon">🧬</div>
              <div><strong>Prevent Nutrient Deficiency</strong><br />Eating less means fewer vitamins and minerals. Every GoOrganic meal is nutrient-dense to cover your full micronutrient needs at lower volumes.</div>
            </li>
            <li>
              <div className="ep-icon">🔄</div>
              <div><strong>Lock In Results Long-Term</strong><br />The 40-Day Post-Injection Reset re-trains your metabolism so weight doesn't return when you stop the medication.</div>
            </li>
          </ul>
        </div>
        <div>
          <div className="explainer-visual">
            <div className="ev-title">Your Mounjuro / Ozempic Nutrition Roadmap</div>
            <div className="timeline">
              <div className="tl-item">
                <div className="tl-left">
                  <div className="tl-dot active">1</div>
                  <div className="tl-line"></div>
                </div>
                <div className="tl-content">
                  <div className="tl-phase active">Week 1–2 · Starting Injections</div>
                  <div className="tl-desc">Appetite begins to suppress. Critical to introduce high-protein, nutrient-dense food immediately to protect muscle from day one.</div>
                  <div className="tl-product">5-Day Meal Plan →</div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-left">
                  <div className="tl-dot active">2</div>
                  <div className="tl-line"></div>
                </div>
                <div className="tl-content">
                  <div className="tl-phase active">Week 3–20 · Active Treatment Phase</div>
                  <div className="tl-desc">Ongoing nutritional support throughout the full treatment period. Meals calibrated to your suppressed appetite while maximising fat loss.</div>
                  <div className="tl-product">20-Day Meal Plan →</div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-left">
                  <div className="tl-dot gold">3</div>
                  <div className="tl-line"></div>
                </div>
                <div className="tl-content">
                  <div className="tl-phase gold">Post-Injection · The Critical Window</div>
                  <div className="tl-desc">Appetite returns. Metabolism needs resetting. This 40-day program prevents rebound weight gain and builds sustainable food habits.</div>
                  <div className="tl-product gold-bg">40-Day Post-Injection Reset →</div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-left">
                  <div className="tl-dot dim">✓</div>
                </div>
                <div className="tl-content">
                  <div className="tl-phase dim">Long-Term · Maintenance</div>
                  <div className="tl-desc">Results locked in. Healthy relationship with food established. Weight maintained independently of medication.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explainer;
