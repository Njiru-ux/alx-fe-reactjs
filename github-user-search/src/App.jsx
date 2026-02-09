// src/App.jsx
import React from 'react';
import './App.css';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Search Application</h1>
        <p>Search for GitHub users by their username</p>
      </header>
      <main>
        <Search />
      </main>
      <footer>
        <p>Built with React and GitHub API</p>
      </footer>
    </div>
  );
}

export default App;