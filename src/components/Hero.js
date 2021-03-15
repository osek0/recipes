import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import Container from './reusableComponents/Container';
import Loader from './reusableComponents/Loader';
import Search from './Search';
import Recipes from './Recipes';
import Pagination from './Pagination';

const Hero = () => {
  const { loading } = useContext(RecipesContext);

  return(
    <section className="hero">
      <Container>
        <Search />
      </Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Container>
            <Recipes />
          </Container>
          <Pagination />
        </>
      )}
    </section>
  );
}

export default Hero;