import PropTypes from 'prop-types';
import { Component } from 'react';
//API
import { fetchImage } from 'services/images-api';
//COMPONENTS
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
//STYLES
import { Container, List, EmptyBox } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    imagesQuantity: 12,
    totalPages: 0,
    status: 'idle',
    error: null,
    firstRecivedImage: null,
  };

  handleButtonClick = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, imagesQuantity, firstRecivedImage } = this.state;
    const { imageName } = this.props;

    if (prevState.firstRecivedImage !== firstRecivedImage && page > 1) {
      document.getElementById(firstRecivedImage)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    if (prevProps.imageName !== imageName) {
      this.setState({ status: 'panding' });

      fetchImage(imageName, page, imagesQuantity)
        .then(res => {
          this.setState({
            totalPages: Math.ceil(res.total / imagesQuantity),
          });
          return res.hits.map(({ id, webformatURL, largeImageURL, tags }) => ({
            id,
            webformatURL,
            largeImageURL,
            tags,
          }));
        })
        .then(res => {
          this.setState({ images: [...res], page: 1, status: 'resolved' });
        })
        .catch(error => this.setState({ error, status: 'rjected' }));
    }
    if (prevState.page !== page && page !== 1) {
      this.setState({ status: 'panding' });
      fetchImage(imageName, page, imagesQuantity)
        .then(res => {
          this.setState({
            firstRecivedImage: res.hits[0].id,
            totalPages: Math.ceil(res.total / imagesQuantity),
          });
          return res.hits.map(({ id, webformatURL, largeImageURL, tags }) => ({
            id,
            webformatURL,
            largeImageURL,
            tags,
          }));
        })
        .then(res => {
          this.setState(prev => ({
            images: [...prev.images, ...res],
            status: 'resolved',
          }));
        })
        .catch(error => this.setState({ error, status: 'rjected' }));
    }
  }

  render() {
    const { images, status, page, imagesQuantity, totalPages } = this.state;

    if (status === 'panding')
      return (
        <Container>
          <Loader imagesQuantity={imagesQuantity} />
        </Container>
      );
    if (status === 'resolved') {
      return (
        <Container>
          <List>
            {images.map(image => {
              return (
                <ImageGalleryItem
                  key={image.id}
                  image={image}
                  onImageClick={this.props.onImageClick}
                />
              );
            })}
          </List>
          {images.length ? (
            <Button
              isDisabled={page === totalPages}
              onLoadMoreClick={this.handleButtonClick}
            />
          ) : (
            <EmptyBox>Oops, Nothing Found!</EmptyBox>
          )}
        </Container>
      );
    }
  }
}

ImageGallery.propTypes = {
  imageName: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
