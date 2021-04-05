import React from 'react';

const Remove = ({handleRemove}) => {
  const handleClick = (event) => {
    event.preventDefault();
    handleRemove();
  }

  return(
    <td className="remove-btn">
      <button className="remove-btn fas fa-times-circle" onClick={handleClick}>✖</button>
    </td>
  )
}

export default Remove;