import React from 'react';

const Image = (props) => {
  const {item} = props;

  return(
    <div className="food">
      <img src={item.strMealThumb} alt="food" width="370" height="296"></img>
      <h4>{item.strMeal}</h4>
      <span>{item.strArea}</span>
    </div>
    // <img src=>
  )
};

export default Image;