import React from 'react';
import FavoritesList from './FavoritesList.jsx';

const ListFavorites = ({favorites, switchTo, remove}) => {
  return(
    <div className="favorites">
      <table>
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
    </div>
  )
}

export default ListFavorites;