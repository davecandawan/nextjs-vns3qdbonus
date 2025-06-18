import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <img src="https://d1tnk6mbnurvod.cloudfront.net/img/brh/White-VNSH-Logo.png" alt="Logo" className="navbar-logo" />
          <p className="navbar-text">Questions? | 888-526-1885</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
