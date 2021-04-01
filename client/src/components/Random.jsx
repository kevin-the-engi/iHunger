import React from 'react';
import Image from './Image.jsx';
import Add from './Add.jsx';
import Favorites from './Favorites.jsx';
// import Modal from './Modal.jsx';

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
    const {clicked, expand} = this.state;
    const {meal, addFavorite, favorites, showFavorites} = this.props;

    return(
      <div className="container">
        <div className="header">
          <div className="title">
            <h2>iHunger</h2>
          </div>
          <div className="header-btns">
            <button className="feed-btn" onClick={this.randomClick}>FEED ME!</button>
            {clicked ? <button className="recipe-btn" onClick={this.chosenClick}>{expand ? "COLLAPSE" : "RECIPE NOW!"}</button> : null}
          </div>
        </div>
        <div className="body">
          {clicked ? meal.map(item =>
            <Image key={item.idMeal} item={item} />) : <img className="hungry" src="./hungry.gif" alt="hungry" width="370" height="296"></img>}
        </div>
        {clicked ?
          <div className="footer">
            <div className="favorites">
              <Favorites showFavorites={showFavorites} />
            </div>
            <div className="add">
              <Add addFavorite={addFavorite} />
            </div>
          </div>
        : null}
      </div>
    )
  }
};

export default Random;