import React, { useState } from "react";

const RecipeSearch = ({ onRecipeSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onRecipeSearch(query);
  };

  return (
    <form className="recipe-search" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for recipes" value={query} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default RecipeSearch;
