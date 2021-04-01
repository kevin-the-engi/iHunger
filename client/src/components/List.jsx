import React from 'react';
import ListIngredient from './ListIngredient.jsx';

const List = (props) => {
  const {meal, ingredients} = props;

  return(
    <table className="ingredients">
      <tbody>
        {ingredients.map((ingredient, i) =>
          <ListIngredient
            key={i}
            ingredient={ingredient}
            index={i + 1}
          />
        )}
      </tbody>
    </table>
  )
};

export default List;