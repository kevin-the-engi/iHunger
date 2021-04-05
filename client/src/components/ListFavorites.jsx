import React from 'react';
import FavoritesList from './FavoritesList.jsx';

const ListFavorites = ({favorites, switchTo, remove}) => {
  return(
    <table className="favorites-container">
      <tbody>
        {favorites.map((favorite, i) =>
          <FavoritesList
            key={i}
            favorite={favorite}
            switchTo={switchTo}
            remove={remove}
          />
        )}
      </tbody>
    </table>
  )
}

export default ListFavorites;