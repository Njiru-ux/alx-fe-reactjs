import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to React Router Advanced Demo</h1>
      <p>This application demonstrates advanced routing concepts including:</p>
      <ul className="features-list">
        <li>✅ Nested Routes - Check the Profile section</li>
        <li>✅ Dynamic Routes - Click on blog posts in the navigation</li>
        <li>✅ Protected Routes - Try accessing Profile without logging in</li>
      </ul>
      <div className="demo-links">
        <h3>Try these examples:</h3>
        <div className="link-grid">
          <Link to="/blog/1" className="demo-link">Blog Post 1 (Dynamic Route)</Link>
          <Link to="/blog/2" className="demo-link">Blog Post 2 (Dynamic Route)</Link>
          <Link to="/blog/3" className="demo-link">Blog Post 3 (Dynamic Route)</Link>
          <Link to="/profile" className="demo-link">Profile (Protected Route)</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;