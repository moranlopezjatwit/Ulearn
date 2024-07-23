import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles.css';

export default function PythonSidenav() {
    const location = useLocation();

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
                            to="/Python-Modules"
                            className={location.pathname === '/Python-Modules' ? 'active' : ''}
                        >
                            Introduction
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Python-Variables"
                            className={location.pathname === '/Python-Variables' ? 'active' : ''}
                        >
                            Variables
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Python-Loops"
                            className={location.pathname === '/Python-Loops' ? 'active' : ''}
                        >
                            Conditionals/Loops
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Python-Functions"
                            className={location.pathname === '/Python-Functions' ? 'active' : ''}
                        >
                            Functions
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
