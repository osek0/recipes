import React, { useState, useEffect, createContext } from 'react';

export const RecipesContext = createContext();

export const RecipesState = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [firstRecipe, setFirstRecipe] = useState(0);
  const [lastRecipe, setLastRecipe] = useState(9);
  const [isHidden, setIsHidden] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const APP_ID = process.env.REACT_APP_APP_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const FIRST_REQ = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=9`;
  const URL = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${API_KEY}&from=${firstRecipe}&to=${lastRecipe}`;

  const getFristResult = async () => {
    setLoading(true);

    const response = await fetch(FIRST_REQ);
    const data = await response.json();

    setRecipes(data.hits);
    setLoading(false);
  };

  const searchRecipes = async () => {
    setError(false);
    setLoading(true);

    const response = await fetch(URL);
    const data = await response.json();

    if(search.trim() !== '' && !data.more) {
      setError(true);
      setLoading(false);
      return;
    }

    setRecipes(data.hits);
    setLoading(false);
  };

  const getRecipes = e => {
    e.preventDefault();

    if(search.trim() === '') {
      return;
    }

    setIsHidden(true);
    searchRecipes();
  };

  const handlePage = direction => {
    if(direction === 'next') {
      setFirstRecipe(prevRecipe => prevRecipe + 9);
      setLastRecipe(prevRecipe => prevRecipe + 9);
      return
    } 
    if(direction === 'previous' && firstRecipe !== 0) {
      setFirstRecipe(prevRecipe => prevRecipe - 9);
      setLastRecipe(prevRecipe => prevRecipe - 9);
    }
  }

  useEffect(() => {
    getFristResult();
  }, []);

  useEffect(() => {
    searchRecipes();
  }, [firstRecipe, lastRecipe]);

  return(
    <RecipesContext.Provider 
      value={{ 
        recipes, 
        setRecipes, 
        getRecipes,
        search,
        setSearch,
        isHidden,
        error,
        loading,
        handlePage
      }}
    >
      {children}
    </RecipesContext.Provider>
  )
}