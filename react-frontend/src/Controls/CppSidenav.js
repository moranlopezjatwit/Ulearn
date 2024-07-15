import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';

export default function CppSidenav() {
    return (
        <div className="Side-nav-align">
            <nav className="Side-nav">
                <a href="/Introduction"><button class="Side-back">Return</button></a>
                <div className="Side-header">Lessons</div>
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