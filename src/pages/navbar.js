import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">About</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/resume">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;