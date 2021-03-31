import React from 'react';

const Add = ({addFavorite}) => {
  return(
    <div>
      <button onClick={addFavorite} className="add-btn">Add</button>
    </div>
  )
}

export default Add;