import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import Button from './reusableComponents/Button';

const Pagination = () => {
  const { isHidden, loading, error, handlePage } = useContext(RecipesContext);

  return(
    <>
      {isHidden && !loading && !error && (
        <div className="pagination">
          <Button btnText="Prev" handelClick={() => handlePage("previous")} />
          <Button btnText="Prev" handelClick={() => handlePage("next")} />
        </div>
      )}
    </>
  );
}

export default Pagination;