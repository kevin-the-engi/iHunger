import React from 'react';

const ListIngredient = (props) => {
  const {ingredient} = props;

  return(
    <tr>
      <td>{ingredient.ingredient}</td>
      <td>{ingredient.measure}</td>
    </tr>
  );
};

export default ListIngredient;