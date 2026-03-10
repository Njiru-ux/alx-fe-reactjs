import React from 'react'
import useRecipeStore from './recipeStore'
import './RecipeList.css'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)

  if (recipes.length === 0) {
    return (
      <div className="recipe-list-empty">
        <h2>Recipe Collection</h2>
        <p>No recipes yet. Add your first recipe using the form!</p>
      </div>
    )
  }

  return (
    <div className="recipe-list">
      <h2>Recipe Collection ({recipes.length})</h2>
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p className="recipe-description">{recipe.description}</p>
            
            <div className="recipe-details">
              <div className="ingredients">
                <h4> Ingredients:</h4>
                <pre>{recipe.ingredients}</pre>
              </div>
              
              <div className="instructions">
                <h4> Instructions:</h4>
                <pre>{recipe.instructions}</pre>
              </div>
            </div>
            
            <button 
              onClick={() => deleteRecipe(recipe.id)}
              className="delete-btn"
            >
              Delete Recipe
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecipeList