import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './src/pages/about.js';
import Contact from './src/pages/contact.js';
import Portfolio from './src/pages/portfolio.js';
import Resume from './src/pages/resume.js';

const React = require('react');

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;