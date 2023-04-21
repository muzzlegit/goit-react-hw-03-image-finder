import PropTypes from 'prop-types';
//STYLES
import { Img } from './ModalImage.styled';

const ModalImage = ({ modalImage }) => {
  return <Img src={modalImage.url} alt={modalImage.alt} />;
};

export default ModalImage;

ModalImage.propTypes = {
  modalImage: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};
