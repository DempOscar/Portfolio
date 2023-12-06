import './App.css';
import Home from './Home';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <nav>
      <Link to="/" className="home-button">Home</Link> 
      <Link to="/ContactMe.js" className="contactMe-button">ContactMe</Link>
      <Link to="/Portfolio.js" className="portfolio-button">Portfolio</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="src/about-me" element={<AboutMe />} />
        <Route path="src/portfolio" element={<Portfolio />} />
        <Route path="src/contact-me" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;

