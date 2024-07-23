import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';

export default function CppSidenav() {
    return (
        <div className="Side-nav-align">
            <nav className="Side-nav">
                <div className="Side-header">
                    <p>Lessons</p>
                    <a href="/Introduction"><button className="Side-back">Return</button></a>
                </div>
                <ul>
                    <li>
                        <Link
                            to="/Cpp-Modules"
                            className={location.pathname === '/Cpp-Modules' ? 'active' : ''}
                        >
                            Introduction
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Cpp-Variables"
                            className={location.pathname === '/Cpp-Variables' ? 'active' : ''}
                        >
                            Variables
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Cpp-Loops"
                            className={location.pathname === '/Cpp-Loops' ? 'active' : ''}
                        >
                            Conditionals/Loops
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Cpp-Functions"
                            className={location.pathname === '/Cpp-Functions' ? 'active' : ''}
                        >
                            Functions
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
