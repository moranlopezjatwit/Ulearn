import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';

function Navbar() {
  return (
    <nav className="nav">
      <div className="site-title">ULearn</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/introduction">Introduction</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
