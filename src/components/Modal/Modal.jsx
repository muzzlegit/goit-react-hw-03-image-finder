import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
//STYLES
import { Backdrop, Content } from './Modal.styled';
//CoNSTS
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onCloseModal();
    }
  };
  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <Content>{this.props.children}</Content>
      </Backdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  children: PropTypes.element,
  onCloseModal: PropTypes.func.isRequired,
};
