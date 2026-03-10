import React from 'react'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1> Recipe Sharing App</h1>
        <p>Share your favorite recipes with the world!</p>
      </header>
      
      <main className="app-main">
        <div className="container">
          <div className="form-section">
            <AddRecipeForm />
          </div>
          
          <div className="recipes-section">
            <RecipeList />
          </div>
        </div>
      </main>
      
      <footer className="app-footer">
        <p>&copy; 2024 Recipe Sharing App - Built with React & Zustand</p>
      </footer>
    </div>
  )
}

export default App