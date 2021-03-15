import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import Button from './reusableComponents/Button';

const Search = () => {
  const { search, setSearch, getRecipes } = useContext(RecipesContext);

  return (
    <form onSubmit={getRecipes}>
      <div className="formContainer">
        <input 
          type="text"
          required
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <label>
          Recipe / Ingredient
        </label>
      </div>
      <Button btnText="Search"  />
    </form>
  );
}

export default Search;