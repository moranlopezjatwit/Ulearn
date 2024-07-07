import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';

export default function JavaSidenav() {
    return (
        <div className="Side-nav-align">
            <nav className="Side-nav">
                <a href="/Introduction"><button class="Side-back">Return</button></a>
                <div className="Side-header">Lessons</div>
                <ul>
                    <li><Link to="/Java-Modules">Introduction</Link></li>
                    <li><Link to="">Variables</Link></li>
                    <li><Link to="">Conditionals/Loops</Link></li>
                    <li><Link to="">Functions</Link></li>

                </ul>
            </nav>
        </div>
    );
}