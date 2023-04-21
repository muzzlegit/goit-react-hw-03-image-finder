import PropTypes from 'prop-types';
//STYLES
import { Item, ItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, onImageClick }) => {
  const { id, webformatURL, largeImageURL, tags } = image;

  return (
    <Item
      id={id}
      onClick={() => {
        onImageClick(largeImageURL, tags);
      }}
    >
      <ItemImage src={webformatURL} alt={tags} />
    </Item>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onImageClick: PropTypes.func.isRequired,
};
