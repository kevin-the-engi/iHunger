import React from 'react';

const Image = (props) => {
  const {item} = props;

  return(
    <div className="food">
      <div>
        <img className="food-img" src={item.strMealThumb} alt="food" width="370" height="296"></img>
      </div>
      <h4 className="meal-name">{item.strMeal}</h4>
      <table className="meal-type">
        <tbody>
          <tr>
            <th className="cuisine">Cuisine</th>
            <th className="category"> Category</th>
          </tr>
          <tr>
            <td className="cuisine">{item.strArea}</td>
            <td className="category">{item.strCategory}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default Image;