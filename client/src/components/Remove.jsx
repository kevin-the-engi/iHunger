import React from 'react';

const Remove = ({handleRemove}) => {
  const handleClick = (event) => {
    event.preventDefault();
    handleRemove();
  }

  return(
    <td>
      <button className="remove-btn" onClick={handleClick}>X</button>
    </td>
  )
}

export default Remove;