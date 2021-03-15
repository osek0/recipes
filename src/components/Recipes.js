import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import { Link } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';

const Recipes = () => {
  const { recipes, error, loading } = useContext(RecipesContext);

  return(
    <>
      {error && <ErrorMessage />}
      {recipes && !error && !loading && recipes.map(({ recipe }, index) => (
        <div key={index} className="recipe">
          <a 
            href={recipe.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div 
              style={{background: `url(${recipe.image}) no-repeat center/cover`}} 
              className="recipeBg"
            >
            </div>
          </a>
          <div className="recipeInfo">
            <p>{recipe.label}</p>
            <p>{Math.floor(recipe.calories)} calories</p>
            <Link to={`/recipes/${recipe.label}`}>View more</Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default Recipes;