import React from "react";


const Openings = () => {
  const openings = [
    { 
      id: "01", 
      title: "CHIEF DESIGN OFFICER", 
      company: "AETHER GLOBAL", 
      salary: "$250k - $320k", 
      tags: ["EXECUTIVE", "REMOTE"],
      desc: "Leading the creative vision for a $2B valuation fintech unicorn. Define the aesthetic future of global finance.",
      location: "San Francisco / London",
      perks: "Private Equity + Health + Bonus"
    },
    { 
      id: "02", 
      title: "PRINCIPAL PRODUCT LEAD", 
      company: "VANGUARD TECH", 
      salary: "$180k - $240k", 
      tags: ["LEADERSHIP", "HYBRID"],
      desc: "Architecting the next generation of AI-driven productivity tools. Bridge the gap between engineering and emotion.",
      location: "New York, NY",
      perks: "Global Travel + Tech Stipend"
    },
    { 
      id: "03", 
      title: "VP OF BRAND STRATEGY", 
      company: "LUMIÈRE STUDIO", 
      salary: "EQUITY + $200k", 
      tags: ["STRATEGY", "PARIS"],
      desc: "Transforming luxury retail through immersive digital experiences. Working directly with elite fashion houses.",
      location: "Paris / Remote",
      perks: "Luxury Benefits + Relocation"
    }
  ];

  return (
    <div className="openings-page-wrapper">
      
      <header className="openings-header">
        <div className="badge-top-premium">CURATED SELECTION 2026</div>
        <h1 className="hero-title">
          Executive <br /><span>Opportunities.</span>
        </h1>
        <p className="hero-subtitle">
          Bypassing the noise to connect elite talent with visionary projects.
        </p>
      </header>

      <div className="cards-stack">
        {openings.map((job) => (
          <div key={job.id} className="opening-card-container">
            
            {/* Left Section */}
            <div className="card-info-block">
              <span className="job-id-loc">{job.id} / {job.location}</span>
              <h2 className="job-title">{job.title}</h2>
              <div className="tags-row">
                {job.tags.map(tag => (
                  <span key={tag} className="job-tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Middle Section */}
            <div className="card-desc-block">
              <p className="job-desc">{job.desc}</p>
              <p className="job-perks">PERKS: <span>{job.perks}</span></p>
            </div>

            {/* Right Section */}
            <div className="card-action-block">
              <p className="job-salary">{job.salary}</p>
              <button className="inquire-btn">INQUIRE</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Openings;