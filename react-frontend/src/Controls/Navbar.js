import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';

export default function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="nav">
            <a href="/">
                <div className="site-title">ULearn</div>
            </a>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li
                    className="dropdown"
                    onMouseEnter={handleDropdownToggle}
                    onMouseLeave={handleDropdownToggle}
                >
                    <Link to="/Introduction">Modules</Link>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><Link to="/Python-Modules">Python</Link></li>
                            <li><Link to="/Java-Modules">Java</Link></li>
                            <li><Link to="/Cpp-Modules">C++</Link></li>
                        </ul>
                    )}
                </li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Register">Sign Up</Link></li>
            </ul>
        </nav>
    );
}
