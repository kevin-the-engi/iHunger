import React from 'react';
import Modal from './Modal.jsx';
// import FavoritesModal from './FavoritesModal.jsx';

class Favorites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      display: true
    })
  }

  render() {
    const {display} = this.state;
    return (
      <div className="favorites-btn">
        <button onClick={this.handleClick}>Favorites</button>
        {display ? <Modal /> : null}
      </div>
    );
  }

}

export default Favorites;