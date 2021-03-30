import React from 'react';
import ListIngredient from './ListIngredient.jsx';

const List = (props) => {
  const {meal, ingredients} = props;

  return(
    <table>
      <thead>
        <tr><td>List of Ingredients</td></tr>
      </thead>
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