import React from 'react';

const FavoritesList = ({favorite, switchTo}) => {
  const handleClick = (event) => {
    event.preventDefault();

    switchTo(favorite.items)
  }

  return (
    <div onClick={handleClick}>{favorite.mealName}</div>
  )
}

export default FavoritesList;