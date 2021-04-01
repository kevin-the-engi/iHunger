import React from 'react';
import FavoritesList from './FavoritesList.jsx';

const ListFavorites = ({favorites, switchTo}) => {
  return(
    <div className="favorites">
      {favorites.map((favorite, i) =>
        <FavoritesList
          key={i}
          favorite={favorite}
          switchTo={switchTo}
        />
      )}
    </div>
  )
}

export default ListFavorites;