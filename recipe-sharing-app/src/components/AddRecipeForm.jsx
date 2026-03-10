import React, { useState } from 'react'
import useRecipeStore from '../store/recipeStore'
import './AddRecipeForm.css'

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe)
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: ''
  })
  
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    if (success) {
      setSuccess(false)
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required'
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    }
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required'
    }
    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Instructions are required'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    addRecipe(formData)
    
    setFormData({
      title: '',
      description: '',
      ingredients: '',
      instructions: ''
    })
    setErrors({})
    setSuccess(true)

    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <div className="add-recipe-form">
      <h2>Add New Recipe</h2>
      
      {success && (
        <div className="success-message">
           Recipe added successfully!
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Recipe Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Spaghetti Carbonara"
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Short Description *</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Brief description of the recipe"
            className={errors.description ? 'error' : ''}
          />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="ingredients">Ingredients *</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            placeholder="List all ingredients (one per line)"
            rows="4"
            className={errors.ingredients ? 'error' : ''}
          />
          {errors.ingredients && <span className="error-message">{errors.ingredients}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="instructions">Instructions *</label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            placeholder="Step by step instructions"
            rows="4"
            className={errors.instructions ? 'error' : ''}
          />
          {errors.instructions && <span className="error-message">{errors.instructions}</span>}
        </div>

        <button type="submit" className="submit-btn">
          Add Recipe
        </button>
      </form>
    </div>
  )
}

export default AddRecipeForm