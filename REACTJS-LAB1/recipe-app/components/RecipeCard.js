import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h2>{recipe.title}</h2>
      <p>Ready in {recipe.readyInMinutes} minutes</p>
      <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
        View Recipe
      </a>
    </div>
  );
};

export default RecipeCard;
