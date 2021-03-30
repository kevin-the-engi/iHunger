import React from 'react';
import Recipe from './Recipe.jsx';
import Youtube from './Youtube.jsx';

const ListRecipe = ({meal, recipe}) => {
  return(
    <div className="recipe">
      {recipe.map((line, i) =>
        <Recipe key={i} line={line} />
      )}

      <Youtube ytID={meal[0].ytID} />
    </div>
  )
}

export default ListRecipe;