import React from 'react';
import Recipe from './Recipe.jsx';

const ListRecipe = ({recipe}) => {
  return(
    <div>
      {recipe.map((line, i) =>
        <Recipe key={i} line={line} />
      )}
    </div>
  )
}

export default ListRecipe;