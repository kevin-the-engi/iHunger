import React from 'react';

const ListIngredient = ({ingredient}) => {
  return(
    <tr>
      <td>{ingredient.ingredient}</td>
      <td>{ingredient.measure}</td>
    </tr>
  );
};

export default ListIngredient;