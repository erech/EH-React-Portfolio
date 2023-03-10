import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import Navbar from './pages/navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <nav>
        <ul>
          <li><NavLink exact to="/">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/resume">Resume</NavLink></li>
        </ul>
      </nav>
      <Route exact path="/" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/resume" component={Resume} />
    </Router>
  );
}

export default App;