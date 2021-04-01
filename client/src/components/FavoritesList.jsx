import React from 'react';
import Remove from './Remove.jsx';

const FavoritesList = ({favorite, switchTo, remove}) => {
  const handleClick = (event) => {
    event.preventDefault();
    switchTo(favorite.items)
  }

  const handleRemove = (event) => {
    remove(favorite._id);
  }

  return (
    <tr>
      <td onClick={handleClick}>
        {favorite.mealName}
      </td>
      <Remove handleRemove={handleRemove} />
    </tr>
  )
}

export default FavoritesList;