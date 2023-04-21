import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
//COMPONENTS
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import ModalImage from './ModalImage/ModalImage';
//STYLES
import { Container } from './App.styled';

export class App extends Component {
  state = {
    imageName: '',
    showModal: false,
    modalContent: {},
  };

  toggleModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal }));
  };
  onImageClick = (largeImageURL, tags) => {
    this.setState({ modalContent: { url: largeImageURL, alt: tags } });
    this.toggleModal();
  };

  setQuery = name => {
    this.setState({ imageName: name });
  };

  render() {
    const { showModal, modalContent } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.setQuery} />
        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <ModalImage modalImage={modalContent} />
          </Modal>
        )}
        <ImageGallery
          onImageClick={this.onImageClick}
          imageName={this.state.imageName}
        />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Container>
    );
  }
}
