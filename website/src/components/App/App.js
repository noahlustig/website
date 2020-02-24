import React from 'react';
import './App.css';
//import routing utils
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

//import pages
import HomePage from '../../pages/home';
import PortfolioPage from '../../pages/portfolio/PortfolioPage.jsx';
import PageNotFound from '../../pages/404/404.jsx';
import BlogPage from '../../pages/blog/BlogPage.jsx';
import ContactPage from '../../pages/contact/ContactPage.jsx';
import ReadingListPage from '../../pages/reading-list/ReadingListPage.jsx';

function App() {
  return (
  <Router>
      <Switch>
        <Route exact path="/" component = {HomePage} />
        <Route exact path="/portfolio" component = {PortfolioPage} />
        <Route exact path="/blog" component = {BlogPage} />
        <Route exact path="/contact" component = {ContactPage} />
        <Route exact path="/reading-list" component = {ReadingListPage} />
        <Route exact path='/404' component = {PageNotFound} />
        <Redirect to='/404' />
      </ Switch>
  </Router>
  );
}

export default App;
