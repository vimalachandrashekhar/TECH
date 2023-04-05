// import React, { useState, useEffect } from "react";

// function Spoonacular() {
//   const [recipe, setRecipe] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchRecipe() {
//       try {
//         const response = await fetch("https://api.spoonacular.com/recipes/random?apiKey=f78380dbdbe14379b2021b043d7a6d67");
//         const data = await response.json();
//         setRecipe(data.recipes[0]);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchRecipe();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>{recipe.title}</h1>
//       <img src={recipe.image} alt={recipe.title} />
//       <ul>
//         {recipe.extendedIngredients.map((ingredient) => (
//           <li key={ingredient.id}>{ingredient.original}</li>
//         ))}
//       </ul>
//       <p>{recipe.instructions}</p>
//     </div>
//   );
// }

// export default Spoonacular;











//slideshow-app
import Slideshow from './component/Slideshow';

function App() {
  const images = [
    'https://www.incimages.com/uploaded_files/image/1920x1080/getty_164908494_970566970450014_63814.jpg',
    'https://www.globotreks.com/wp-content/uploads/2020/08/Fun-and-Interesting-Facts-about-India-colored-powder.jpg',
    'https://img.freepik.com/free-photo/holi-color-background-black-background_24972-870.jpg',
  ];
  return (
    <div className="App">
      <Slideshow images={images} slideDuration={5000} />
    </div>
  );
}

export default App;

