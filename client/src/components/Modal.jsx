import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import 'bootstrap/dist/css/bootstrap.min.css';


class FavoritesModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      item: '',
      selectedData: {}
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(item) {
    this.setState({
      isOpen: true
    })
  };

  hideModal(item) {
    this.setState({
      isOpen: false,
    })
  };

  render() {
    const {favorites} = this.props;
    const {isOpen} = this.state;

    return (
      <>
        <button onClick={this.showModal}>Favorites</button>
        <Modal show={isOpen} onHide={this.hideModal}>
          <ModalHeader>
            <ModalTitle>Favorites</ModalTitle>
          </ModalHeader>
          <ModalBody>{this.state.selected}</ModalBody>
        </Modal>
      </>
    );
  }
}

export default FavoritesModal;