import React from 'react';
import Modal from './Modal.jsx';

class Favorites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.showFavorites();
  }

  render() {
    const {display} = this.state;

    return (
      <div>
        <button className="favorites-btn" onClick={this.handleClick}>Favorites</button>
      </div>
    );
  }

}

export default Favorites;