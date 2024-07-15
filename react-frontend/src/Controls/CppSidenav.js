import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';

export default function CppSidenav() {
    return (
        <div className="Side-nav-align">
            <nav className="Side-nav">
                <div className="Side-header">
                    <p>Lessons</p>
                    <a href="/Introduction"><button class="Side-back">Return</button></a>
                </div>
                <ul>
                    <li><Link to="/Cpp-Modules">Introduction</Link></li>
                    <li><Link to="/Cpp-Variables">Variables</Link></li>
                    <li><Link to="/Cpp-Loops">Conditionals/Loops</Link></li>
                    <li><Link to="/Cpp-Functions">Functions</Link></li>

                </ul>
            </nav>
        </div>
    );
}