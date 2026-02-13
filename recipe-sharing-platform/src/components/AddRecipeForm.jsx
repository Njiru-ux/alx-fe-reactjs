import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  // Validation errors state
  const [errors, setErrors] = useState({});

  // Track if form has been submitted (to show errors only after submit)
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear that field's error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Validate form
  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      // Optional: check that ingredients list has at least two items (split by line break or comma)
      const ingredientLines = formData.ingredients.split('\n').filter(line => line.trim() !== '');
      if (ingredientLines.length < 2) {
        newErrors.ingredients = 'Please list at least two ingredients (one per line)';
      }
    }

    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // For now, just log the new recipe and navigate back home
    console.log('New recipe submitted:', formData);
    alert('Recipe added successfully! (Check console for data)');

    // Reset form
    setFormData({ title: '', ingredients: '', steps: '' });
    setSubmitted(false);
    setErrors({});

    // Optionally redirect to home page
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
        Add a New Recipe
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-6"
      >
        {/* Title field */}
        <div>
          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold mb-2"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition ${
              submitted && errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="e.g., Spaghetti Carbonara"
          />
          {submitted && errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients field */}
        <div>
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-semibold mb-2"
          >
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="5"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition ${
              submitted && errors.ingredients ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="200g spaghetti&#10;2 large eggs&#10;50g Parmesan cheese&#10;..."
          />
          {submitted && errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation steps field */}
        <div>
          <label
            htmlFor="steps"
            className="block text-gray-700 font-semibold mb-2"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            rows="6"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition ${
              submitted && errors.steps ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="1. Cook spaghetti in salted water.&#10;2. Fry pancetta with garlic.&#10;3. ..."
          />
          {submitted && errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;