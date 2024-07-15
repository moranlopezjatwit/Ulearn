import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';

export default function PythonSidenav() {
    return (
        <div className="Side-nav-align">
            <nav className="Side-nav">

                <div className="Side-header">
                    <p>Lessons</p>
                    <a href="/Introduction"><button class="Side-back">Return</button></a>
                </div>
                <ul>
                    <li><Link to="/Python-Modules">Introduction</Link></li>
                    <li><Link to="/Python-Variables">Variables</Link></li>
                    <li><Link to="/Python-Loops">Conditionals/Loops</Link></li>
                    <li><Link to="/Python-Functions">Functions</Link></li>

                </ul>
            </nav>
        </div>
    );
}