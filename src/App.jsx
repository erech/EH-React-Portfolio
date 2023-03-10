import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;