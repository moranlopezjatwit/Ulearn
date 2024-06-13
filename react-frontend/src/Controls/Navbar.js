import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';  // Updated import path

function Navbar() {
  return (
    <nav className="nav">
      <div className="site-title">My Website</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/introduction">Introduction</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
