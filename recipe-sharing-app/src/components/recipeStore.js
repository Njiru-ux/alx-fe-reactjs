import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: 1,
      title: "Classic Pancakes",
      description: "Fluffy homemade pancakes perfect for breakfast",
      ingredients: "2 cups flour\n2 tbsp sugar\n4 tsp baking powder\n1/2 tsp salt\n2 eggs\n1 1/2 cups milk\n1/4 cup melted butter",
      instructions: "1. Mix dry ingredients\n2. Beat eggs, milk, and butter\n3. Combine wet and dry ingredients\n4. Cook on griddle until golden"
    },
    {
      id: 2,
      title: "Spaghetti Carbonara",
      description: "Creamy pasta with bacon and cheese",
      ingredients: "400g spaghetti\n200g bacon\n4 eggs\n1 cup parmesan\nBlack pepper\nSalt",
      instructions: "1. Cook pasta\n2. Fry bacon until crispy\n3. Mix eggs and cheese\n4. Combine hot pasta with egg mixture and bacon"
    }
  ],
  
  // Add this missing function
  setRecipes: (recipes) => set({ recipes }),
  
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, { ...newRecipe, id: Date.now() }] 
  })),
  
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  }))
}));

export default useRecipeStore;