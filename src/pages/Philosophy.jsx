import React from "react";


const Philosophy = () => {
  return (
    <div className="philosophy-wrapper">
      
      {/* --- Main Header Section --- */}
      <div className="philosophy-header">
        <div className="badge-top">WHO WE ARE</div>
        
        <h1 className="philosophy-title">
          Not just another <br />
          <span className="title-muted">job board.</span>
        </h1>
        
        <p className="philosophy-subtitle">
          Archtype was created for a very simple reason: To bridge the gap between 
          visionary companies and the top 1% of talent. We don't believe in thousands of 
          random listings. We believe in one perfect match.
        </p>
      </div>

      {/* --- Detailed Content Sections (The Long Read) --- */}
      <div className="philosophy-content-stack">
        
        {/* Section 1 */}
        <div className="content-row">
          <h2 className="section-number">01 / Our Purpose</h2>
          <div className="section-text">
            Most job sites are noisy and crowded. Archtype is different. We act as a 
            private filter for the industry. Our purpose is to save your time by 
            only showing you roles that actually matter—roles that offer growth, 
            impact, and a legacy. We don't just help you find a job; we help you 
            find your next big career move.
          </div>
        </div>

        {/* Section 2 */}
        <div className="content-row">
          <h2 className="section-number">02 / Complete Privacy</h2>
          <div className="section-text">
            At the executive level, searching for a new role can be sensitive. We understand 
            that. That is why discretion is our highest priority. We protect your 
            identity and ensure that your conversations stay private. Your career 
            is your business, and we keep it that way. No spam, no public profiles, 
            just direct and secure connections.
          </div>
        </div>

        {/* Section 3 */}
        <div className="content-row">
          <h2 className="section-number">03 / Human Curation</h2>
          <div className="section-text">
            Algorithms are great, but they don't understand human ambition. Every company 
            listed on our platform is hand-selected. Every role is verified. We look 
            at the culture, the leadership, and the long-term vision of a company 
            before we invite them into our network. This ensures that you are only 
            seeing the most elite opportunities in the world.
          </div>
        </div>

      </div>

      {/* --- Bottom Closing --- */}
      <footer className="philosophy-footer">
          <h3 className="footer-quote">Quality is not an act, it is a habit.</h3>
          <p className="footer-brand">ARCHTYPE PRIVATE NETWORK — EST 2026</p>
      </footer>

    </div>
  );
};

export default Philosophy;