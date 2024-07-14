import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';

export default function Navbar() {
  return (
      <nav className="nav">
          <a href="/">
              <div className="site-title">ULearn</div>
          </a>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Introduction">Introduction</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Register">Sign Up</Link></li>
      </ul>
    </nav>
  );
}
