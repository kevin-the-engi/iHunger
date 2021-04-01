import React from 'react';

const Image = (props) => {
  const {item} = props;

  return(
    <div className="food">
      <div className="food-img">
        <img src={item.strMealThumb} alt="food" width="370" height="296"></img>
      </div>
      <h3 className="meal-name">{item.strMeal}</h3>
      <table className="meal-type">
        <tbody>
          <tr>
            <th>Cuisine</th>
            <th>Category</th>
          </tr>
          <tr>
            <td>{item.strArea}</td>
            <td>{item.strCategory}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default Image;