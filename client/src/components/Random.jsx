import React from 'react';
import Image from './Image.jsx';
import Add from './Add.jsx';

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
    const {meal, addFavorite} = this.props;

    return(
      <div className="container">
        <div className="header">
          <button className="feed-btn" onClick={this.randomClick}>Feed Me!</button>
          {clicked ? <button onClick={this.chosenClick}>I choose you!</button> : null}
        </div>
        <div className="body">
          {clicked ? meal.map(item =>
            <Image key={item.idMeal} item={item} />) : <img src="./hungry.gif" alt="hungry" width="370" height="296"></img>}
        </div>
        <div className="footer">
          {clicked ? <Add addFavorite={addFavorite} /> : null}
        </div>
      </div>
    )
  }
};

export default Random;