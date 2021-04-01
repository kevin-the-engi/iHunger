import React from 'react';
import Image from './Image.jsx';
import Add from './Add.jsx';
import Modal from './Modal.jsx';

class Random extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      expand: false,
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

    this.setState({
      expand: !this.state.expand
    })
  }

  render() {
    // console.log(this.props.meal)
    const {clicked, expand} = this.state;
    const {meal, addFavorite, favorites} = this.props;

    return(
      <div className="container">
        <div className="header">
          <button className="feed-btn" onClick={this.randomClick}>Feed Me!</button>
          {clicked ? <button onClick={this.chosenClick}>{expand ? "Collapse" : "Give me recipe!"}</button> : null}
        </div>
        <div className="body">
          {clicked ? meal.map(item =>
            <Image key={item.idMeal} item={item} />) : <img src="./hungry.gif" alt="hungry" width="370" height="296"></img>}
        </div>
        {clicked ?
          <div className="footer">
            <div className="add">
              <Add addFavorite={addFavorite} />
            </div>
            <div className="favorites">
              <Modal favorites={favorites} />
            </div>
          </div>
        : null}
      </div>
    )
  }
};

export default Random;