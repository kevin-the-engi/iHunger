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

  handleClick(event) {
    // this.setState({
    //   display: true
    // })
    event.preventDefault();
    this.props.showFavorites();
  }

  render() {
    const {display} = this.state;
    return (
      <div>
        <button className="favorites-btn" onClick={this.handleClick}>Favorites</button>
        {/* {display ? <Modal /> : null} */}
      </div>
    );
  }

}

export default Favorites;