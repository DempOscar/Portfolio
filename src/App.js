import './App.css';
import Home from './Home';
import ContactMe from './ContactMe';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <nav>
      <Link to="/" className="home-button">Home</Link> 
      <Link to="/ContactMe.js" className="contactme-button">ContactMe</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./ContactMe" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;

