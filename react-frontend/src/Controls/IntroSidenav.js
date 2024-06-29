import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';

export default function IntroSidenav() {
    return (
        <div className="Side-nav-align"> 
        <nav className="Side-nav">
                <div className="Side-header">Modules</div>
            <ul>
                <li><Link to="/Python-Modules">Python Modules</Link></li>
                <li><Link to="/Java-Modules">Java Modules</Link></li>
                <li><Link to="/CPP-Modules">C++ Modules</Link></li>

            </ul>
            </nav>
        </div>
    );
}