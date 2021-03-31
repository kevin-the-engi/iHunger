import React from 'react';

const Image = (props) => {
  const {item} = props;

  return(
    <div className="food">
      <img src={item.strMealThumb} alt="food" width="370" height="296"></img>
      <h3>{item.strMeal}</h3>
      <table>
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