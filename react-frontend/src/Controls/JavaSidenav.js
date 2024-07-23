import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';

export default function JavaSidenav() {
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
                            to="/Java-Modules"
                            className={location.pathname === '/Java-Modules' ? 'active' : ''}
                        >
                            Introduction
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Java-Variables"
                            className={location.pathname === '/Java-Variables' ? 'active' : ''}
                        >
                            Variables
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Java-Loops"
                            className={location.pathname === '/Java-Loops' ? 'active' : ''}
                        >
                            Conditionals/Loops
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Java-Functions"
                            className={location.pathname === '/Java-Functions' ? 'active' : ''}
                        >
                            Functions
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
