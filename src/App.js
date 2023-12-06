import './App.css';
import Home from './Home';
import ContactMe from './ContactMe';
import Blog from './Blog';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <nav>
      <Link to="/" className="home-button">Home</Link> 
      <Link to="/ContactMe.js" className="contactme-button">ContactMe</Link>
      <Link to="/Blog.js" className="Blog-button">Blog</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ContactMe.js" element={<ContactMe />} />
        <Route path="Blog.js" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;

