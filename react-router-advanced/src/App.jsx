import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

// Create and export the context
export const AuthContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const authValue = {
    isAuthenticated,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={authValue}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              
              <Route element={<ProtectedRoute />}>
                <Route path="/profile/*" element={<Profile />} />
              </Route>
              
              <Route path="*" element={<div className="not-found"><h2>404 - Page Not Found</h2></div>} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;