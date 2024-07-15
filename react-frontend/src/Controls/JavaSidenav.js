import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';

export default function JavaSidenav() {
    return (
        <div className="Side-nav-align">
            <nav className="Side-nav">
                <div className="Side-header">
                    <p>Lessons</p>
                    <a href="/Introduction"><button class="Side-back">Return</button></a>
                </div>
                <ul>
                    <li><Link to="/Java-Modules">Introduction</Link></li>
                    <li><Link to="/Java-Variables">Variables</Link></li>
                    <li><Link to="/Java-Loops">Conditionals/Loops</Link></li>
                    <li><Link to="/Java-Functions">Functions</Link></li>

                </ul>
            </nav>
        </div>
    );
}