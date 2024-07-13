import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';

export default function PythonSidenav() {
    return (
        <div className="Side-nav-align">
            <nav className="Side-nav">
                <a href="/Introduction"><button class="Side-back">Return</button></a>
                <div className="Side-header">Lessons</div>
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