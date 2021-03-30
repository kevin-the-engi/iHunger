import React from 'react';
import Image from './Image.jsx';

class Random extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }

    this.randomClick = this.randomClick.bind(this);
    this.chosenClick = this.chosenClick.bind(this);
  }

  randomClick(event) {
    event.preventDefault();
    this.props.getMeal()

    this.setState({
      clicked: true
    })
  }

  chosenClick(event) {
    event.preventDefault();
    this.props.chosen();
  }

  render() {
    // console.log(this.props.meal)
    const {clicked} = this.state;
    const {meal} = this.props;
    console.log(meal)

    return(
      <div className="container">
        <div className="header">
          <button onClick={this.randomClick}>Feed Me!</button>
        </div>
        <div className="body">
          {clicked ? meal.map(item =>
            <Image key={item.idMeal} item={item} />) : <img src="./hungry.gif" alt="hungry" width="370" height="296"></img>}
          {/* <img src={clicked ? meal.strMealThumb : "../hungry.gif"} alt="food" width="370" height="296"></img>
          {clicked ? <h4>{meal.strMeal}</h4> : null} */}
        </div>
        <div className="footer">
          {clicked ? <button onClick={this.chosenClick}>I choose you!</button> : null}
        </div>
      </div>
    )
  }
};

export default Random;