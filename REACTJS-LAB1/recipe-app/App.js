import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const API_KEY = 'f78380dbdbe14379b2021b043d7a6d67';

  const searchRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${query}&number=10`);
    const data = await response.json();
    const recipeDetails = await Promise.all(data.results.map(async (recipe) => {
      const recipeResponse = await fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}`);
      const recipeData = await recipeResponse.json();
      return { ...recipe, ...recipeData };
    }));
    setRecipes(recipeDetails);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

  return (
    <div>
      <h1>Recipes</h1>
      <form onSubmit={handleSubmit}>
        <label>Your Taste: </label>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={`https://spoonacular.com/recipeImages/${recipe.image}`} alt={recipe.title} height="200" width="300" />
          <p>Preparation Time: {recipe.readyInMinutes} minutes</p>
          <p>Servings: {recipe.servings}</p>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
        </div>
      ))}
    </div>
  );
}

export default App;
