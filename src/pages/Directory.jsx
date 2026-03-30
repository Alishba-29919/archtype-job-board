import React from "react";


const Directory = () => {
  const partners = [
    { name: "Aether Global", type: "Fintech", desc: "Shaping the future of digital assets and global transactions." },
    { name: "Vanguard Tech", type: "AI Labs", desc: "High-impact AI tools for the next generation of professionals." },
    { name: "Lumière Studio", type: "Luxury", desc: "Transforming fashion houses through digital innovation." }
  ];

  return (
    <div className="directory-wrapper">
      <h1 className="directory-title">Our Network.</h1>
      
      <div className="directory-grid">
        {partners.map((p, i) => (
          <div key={i} className="directory-item">
            <span className="partner-index">0{i+1} / {p.type}</span>
            <h3 className="partner-name">{p.name}</h3>
            <p className="partner-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directory;