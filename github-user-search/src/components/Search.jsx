// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubApi'; // Fixed import

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username.trim()) return;
    
    setLoading(true);
    setError(null);
    setUserData(null);
    
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
      console.error('Error fetching user:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <h2>Search GitHub Users</h2>
      
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="search-input"
        />
        <button 
          type="submit" 
          className="search-button"
          disabled={loading || !username.trim()}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && (
        <div className="loading-message">
          <p>Loading...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      {userData && (
        <div className="user-profile">
          <div className="user-avatar">
            <img 
              src={userData.avatar_url} 
              alt={`${userData.login}'s avatar`}
              width="150"
              height="150"
            />
          </div>
          <div className="user-info">
            <h3>{userData.name || userData.login}</h3>
            <p>Username: {userData.login}</p>
            {userData.bio && <p>Bio: {userData.bio}</p>}
            <p>Followers: {userData.followers} | Following: {userData.following}</p>
            <p>Public Repos: {userData.public_repos}</p>
            <a 
              href={userData.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="profile-link"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;