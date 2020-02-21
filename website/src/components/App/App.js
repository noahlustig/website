import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Header from '../Header/Header.js';
import NavBar from '../NavBar/NavBar.js';
//import routing utils
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

//import pages
import HomePage from '../../pages/home';
import PortfolioPage from '../../pages/portfolio/PortfolioPage.jsx';

function App() {
  return (
  <Router>
  <Switch>
    <Route exact path="/" component = {HomePage} />
    <Route exact path="/portfolio" component = {PortfolioPage} />
  </ Switch>
  </Router>
  );
}

export default App;
