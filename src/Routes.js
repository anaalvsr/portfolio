import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Curriculum from './pages/Curriculum';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route exact path="/About" component={ About } />
      <Route exact path="/Curriculum" component={ Curriculum } />
      <Route exact path="/Jobs" component={ Jobs } />
      <Route exact path="/Contact" component={ Contact } />
    </Switch>
    );
}

export default Routes;