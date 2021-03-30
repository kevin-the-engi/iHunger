import React from 'react';

class Random extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.getMeal()

    this.setState({
      clicked: true
    })
  }

  render() {
    const {clicked} = this.state;
    const {meal} = this.props;

    return(
      <div className="container">
        <div className="header">
          <button onClick={this.handleClick}>Feed Me!</button>
        </div>
        <div className="body">
          <img src={clicked ? meal.strMealThumb : "../hungry.gif"} alt="food" width="370" height="296"></img>
          {clicked ? <h4>{meal.strMeal}</h4> : null}
        </div>
        <div className="footer">
          {clicked ? <button>I choose you!</button> : null}
        </div>
      </div>
    )
  }
};

export default Random;