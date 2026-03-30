import React, { useState } from "react";
import { Link } from "react-router-dom"; // YE LINE ADD KARNA ZAROORI HAI

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="nav-logo">
        ARCH<span><sub> TYPE</sub></span>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/openings" onClick={() => setIsOpen(false)}>Openings</Link></li>
        <li><Link to="/directory" onClick={() => setIsOpen(false)}>Directory</Link></li>
        <li><Link to="/philosophy" onClick={() => setIsOpen(false)}>Philosophy</Link></li>
        
        <div className="mobile-menu-btns">
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary">Post Role</button>
        </div>
      </ul>

      <div className="nav-actions">
        <button className="btn-secondary">Sign In</button>
        <button className="btn-primary">Post Role</button>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={`line ${isOpen ? "active" : ""}`}></span>
          <span className={`line ${isOpen ? "active" : ""}`}></span>
          <span className={`line ${isOpen ? "active" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;