import React from 'react';
import ListIngredient from './ListIngredient.jsx';

const List = (props) => {
  const {meal, ingredients} = props;

  return(
    <table>
      <tbody>
        {ingredients.map((ingredient, i) =>
          <ListIngredient
            key={i}
            ingredient={ingredient}
          />
        )}
      </tbody>
    </table>
  )
};

export default List;