import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../../contexts/ThemeContext';
import './Navbar.css'

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h3 className="navbar-brand">Posts-lab</h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to='/'>
              <p className='nav-link active'>Home</p>
            </Link>
            </li>
          </ul>
          <button className="btn btn-outline-info" onClick={toggleTheme}>Toggle theme</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;