import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { RecipesContext } from '../context/RecipesContext';
import Container from './reusableComponents/Container';

const FullRecipe = () => {
  const { recipes } = useContext(RecipesContext);
  const { id } = useParams();

  return(
    <section className="fullRecipe">
      <Container>
        {recipes && recipes.filter(({ recipe }) => recipe.label === id).map(({ recipe }, index) => (
          <div key={index} className="fullRecipeCard">
            <div className="fullRecipeBg" style={{
              background: `url(${recipe.image}) no-repeat center/cover`
            }}>
            </div>
            <div className="fullRecipeInfo">
              <h2>
                {recipe.label}
              </h2>
              {recipe.ingredientLines.map((ingredient, index) =>(
                <ul key={index}>
                  <li>{ingredient}</li>
                </ul>
              ))}
            </div>
          </div>  
        ))
        }
      </Container>
    </section>
  );
}

export default FullRecipe;