import React from 'react';
import smoothiesImg from '../assets/5 pack smoothies original.JPG';
import fiveDayImg from '../assets/5day.jpg';
import ozempic20Img from '../assets/ozempic20.jpg';
import postOzempicImg from '../assets/postozempic.jpg';

const Products = () => {
  return (
    <section className="products reveal" id="products">
      <div className="products-inner">
        <div className="products-header">
          <div className="label">Our Mounjuro / Ozempic Meal Plans</div>
          <h2 className="big">Three Plans. One for Every Stage<br />of Your <em>Mounjuro / Ozempic Journey.</em></h2>
          <p className="body-text">Fresh, chef-prepared meals delivered to your door across Dubai, Abu Dhabi and the UAE. No cooking, no guesswork. Just the right food at the right time.</p>
        </div>

        <div className="product-grid">

          {/* PLAN 1 */}
          <div className="product-row">
            <div className="product-visual pv-bg-1">
              <img src={fiveDayImg} alt="5day" className="pv-img" />
              <div className="pv-img-overlay"></div>
              <div className="pv-inner">
              
              </div>
            </div>
            <div className="product-info">
              <div className="pi-label teal">Plan 01 — During Mounjuro / Ozempic Injections</div>
              <div className="pi-title">5-Day Mounjuro / Ozempic Nutritional Support Meal Plan</div>
              <div className="pi-desc">Designed for the first weeks on Mounjuro / Ozempic when appetite is just beginning to suppress. High-protein, nutrient-dense small meals that work with your reduced appetite — not against it. Perfect for starting your treatment on the right nutritional foundation.</div>
              <ul className="pi-includes">
                <li><span className="pi-check">✓</span> 3 small meals + 2 snacks daily — calibrated to suppressed appetite</li>
                <li><span className="pi-check">✓</span> High-protein to protect lean muscle mass</li>
                <li><span className="pi-check">✓</span> Gut-friendly, easy-to-digest whole foods</li>
                <li><span className="pi-check">✓</span> Daily fresh delivery across UAE</li>
                <li><span className="pi-check">✓</span> Nutritionist-designed for Mounjuro / Ozempic patients</li>
              </ul>
              <div className="pi-footer">
                <div>
                  <div className="pi-price">AED <span>from</span> TBC</div>
                  <div className="pi-note">Free delivery across UAE</div>
                </div>
                <a href="https://www.goorganic.me/products/powerful-post-2" target="_blank" rel="noopener noreferrer" className="btn-buy teal-buy">Order Now →</a>
              </div>
            </div>
          </div>

          {/* PLAN 2 */}
          <div className="product-row reverse">
            <div className="product-visual pv-bg-2">
              <img src={ozempic20Img} alt="20-Day Extended Meal Plan" className="pv-img" />
              <div className="pv-img-overlay"></div>
              <div className="pv-inner">
                
              </div>
            </div>
            <div className="product-info">
              <div className="pi-label green">Plan 02 — During Mounjuro / Ozempic Injections</div>
              <div className="pi-title">20-Day Mounjuro / Ozempic Active Treatment Meal Plan</div>
              <div className="pi-desc">The full treatment support plan for patients in the active phase of Mounjuro / Ozempic therapy. A complete 20-day nutrition programme designed to work alongside your injection cycle — maximising fat loss, preserving muscle and keeping your microbiome healthy throughout.</div>
              <ul className="pi-includes">
                <li><span className="pi-check">✓</span> 20 days of fully prepared, delivered meals</li>
                <li><span className="pi-check">✓</span> Progressive nutrition — adjusts as appetite changes week to week</li>
                <li><span className="pi-check">✓</span> Liver support meals to complement Mounjuro / Ozempic mechanism</li>
                <li><span className="pi-check">✓</span> Anti-inflammatory, gut-healing ingredients throughout</li>
                <li><span className="pi-check">✓</span> Expert nutritionist check-in included</li>
              </ul>
              <div className="pi-footer">
                <div>
                  <div className="pi-price">AED <span>from</span> TBC</div>
                  <div className="pi-note">Free delivery across UAE</div>
                </div>
                <a href="https://www.goorganic.me/categories/20-day-glp-1-high-protein-weightloss-meal-plan" target="_blank" rel="noopener noreferrer" className="btn-buy">Order Now →</a>
              </div>
            </div>
          </div>

          {/* PLAN 3 */}
          <div className="product-row">
            <div className="product-visual pv-bg-3">
              <img src={postOzempicImg} alt="40-Day Post-Injection Reset" className="pv-img" />
              <div className="pv-img-overlay"></div>
              <div className="pv-inner">
              
              </div>
            </div>
            <div className="product-info">
              <div className="pi-label gold">Plan 03 — Post Mounjuro / Ozempic Injections</div>
              <div className="pi-title">40-Day Post-Injection Metabolic Reset</div>
              <div className="pi-desc">The most important plan of your entire Mounjuro / Ozempic journey. When you stop injections, appetite returns — and most people regain weight rapidly. This 40-day reset re-calibrates your metabolism, resets your gut microbiome and establishes sustainable food patterns so your results last for life.</div>
              <ul className="pi-includes">
                <li><span className="pi-check">✓</span> Full 40-day metabolic rehabilitation programme</li>
                <li><span className="pi-check">✓</span> Gut microbiome restoration after extended Mounjuro / Ozempic use</li>
                <li><span className="pi-check">✓</span> Progressive caloric reintroduction — prevents rebound weight gain</li>
                <li><span className="pi-check">✓</span> Hormone and cortisol reset nutrition</li>
                <li><span className="pi-check">✓</span> 1:1 expert consultation included</li>
                <li><span className="pi-check">✓</span> Daily fresh delivery across UAE</li>
              </ul>
              <div className="pi-footer">
                <div>
                  <div className="pi-price">AED <span>from</span> TBC</div>
                  <div className="pi-note">Most popular · Free delivery</div>
                </div>
                <a href="https://www.goorganic.me/categories/40-day-glp-1-high-protein-weightloss-meal-plan" target="_blank" rel="noopener noreferrer" className="btn-buy gold-buy">Order Now →</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;
