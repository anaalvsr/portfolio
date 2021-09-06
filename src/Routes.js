import React from 'react';
import { Router } from 'express';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Curriculum from './pages/Curriculum';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';

function Routes() {
  <>
    <Router exact path="/" component={ HomePage } />
    <Router exact path="/About" component={ About } />
    <Router exact path="/Curriculum" component={ Curriculum } />
    <Router exact path="/Jobs" component={ Jobs } />
    <Router exact path="/Contact" component={ Contact } />
  </>
}

export default Routes;