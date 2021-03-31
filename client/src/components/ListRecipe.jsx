import React from 'react';
import Recipe from './Recipe.jsx';
import Youtube from './Youtube.jsx';

const ListRecipe = ({meal, recipe}) => {
  return(
    <div className="recipe">
      <div className="instructions">
        {recipe.map((line, i) =>
          <Recipe key={i} line={line} />
        )}
      </div>
      <div className="video-container">
        <Youtube ytID={meal[0].ytID} />
      </div>
    </div>
  )
}

export default ListRecipe;