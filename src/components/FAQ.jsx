import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <div className="faq-arrow">+</div>
      </div>
      <div className="faq-a">{answer}</div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "Can I start the meal plan at any point during my Mounjuro / Ozempic treatment?",
      a: "Yes. Ideally you start from day one, but our plans are designed to benefit you at any stage. If you're already on Mounjuro / Ozempic and haven't been eating well, starting now will still make a significant difference to your muscle retention, energy and fat loss results."
    },
    {
      q: "Will the portions be too large given my appetite is suppressed?",
      a: "No. Our Mounjuro / Ozempic meal plans are specifically portioned for the reduced appetite of patients on these medications. You'll receive smaller, highly nutrient-dense meals designed to feel comfortable even on suppressed appetite — never forcing you to overeat."
    },
    {
      q: "Why do I need a special plan — can't I just eat normally?",
      a: "Research shows that without proper nutrition management on Mounjuro / Ozempic, up to 40% of weight lost can be muscle mass rather than fat. \"Eating normally\" while appetite is suppressed almost always means insufficient protein and micronutrients. Our plans prevent this specifically."
    },
    {
      q: "What is the 40-Day Post-Injection Reset and why do I need it?",
      a: "When Mounjuro / Ozempic medication stops, appetite returns rapidly and most patients regain weight quickly without a nutrition plan in place. The 40-Day Post-Injection Reset progressively reintroduces calories in a controlled way, resets your gut microbiome and trains sustainable eating habits so your results last long after the medication ends."
    },
    {
      q: "Do you deliver across the UAE?",
      a: "Yes. We deliver fresh daily across Dubai, Abu Dhabi, Sharjah and other Emirates. Meals are freshly prepared in our HACCP certified kitchen and delivered to your door. Contact us on WhatsApp to confirm delivery to your specific area."
    },
    {
      q: "Is a nutritionist consultation included?",
      a: "The 40-Day Post-Injection Reset includes a 1:1 expert consultation. For the 5-Day and 20-Day plans, you can add a consultation at any time by contacting us on WhatsApp. Our experts are available to guide you throughout your entire Mounjuro / Ozempic journey."
    }
  ];

  return (
    <section className="faq reveal">
      <div className="faq-inner">
        <div className="label">Questions Answered</div>
        <h2 className="big">Frequently Asked<br /><em>Questions</em></h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>
        <div className="section-btns">
          <a href="https://wa.me/+971525264045" className="btn-primary">TALK TO US →</a>
           <a href="https://www.goorganic.me/products/powerful-post-peptide-exit-protocol-1" className="btn-secondary">VIEW ALL GLP-1 PLANS →</a>
      
        </div>
      </div>
    </section>
  );
};

export default FAQ;
