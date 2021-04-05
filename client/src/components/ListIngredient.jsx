import React from 'react';

const ListIngredient = ({ingredient, index}) => {
  return(
    <tr className="ingredient-row">
      <td className="ingredient">{index}. {ingredient.ingredient}</td>
      <td className="measure">{ingredient.measure}</td>
    </tr>
  );
};

export default ListIngredient;