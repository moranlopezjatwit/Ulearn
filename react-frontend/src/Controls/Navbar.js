import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import '../Styles.css';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/Register');
  };

  return (
    <nav className="nav">
      <div className="site-title">
        <Link to="/Home">ULearn</Link>
      </div>
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
        {user ? (
          <>
            <li><span>Hello, {user.username}</span></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/Register">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
