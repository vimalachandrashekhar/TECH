import React from 'react';

const FavoritesList = ({ favorites, handleRemoveFromFavorites }) => {
  return (
    <div className="favorites-list">
      <h2>Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <img src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          <button onClick={() => handleRemoveFromFavorites(recipe.id)}>Remove from favorites</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
