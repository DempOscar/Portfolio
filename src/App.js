import './App.css';
import Home from './Home';
import ContactMe from './ContactMe';
import Blog from './Blog';
import Post from './Post'
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Footer></Footer>
    <nav>
      <Link to="/" className="home-button">Home</Link> 
      <Link to="/ContactMe.js" className="contactme-button">Contact</Link>
      <Link to="/Blog.js" className="blog-button">Blog</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ContactMe.js" element={<ContactMe />} />
        <Route path="Blog.js" element={<Blog />} />
        <Route path="/post/:slug" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;

