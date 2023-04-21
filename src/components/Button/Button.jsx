import PropTypes from 'prop-types';
//STYLES
import { ButtonComponent } from './Button.styled';

const Button = ({ onLoadMoreClick, isDisabled }) => {
  return (
    <ButtonComponent
      type="button"
      onClick={onLoadMoreClick}
      disabled={isDisabled}
    >
      Load More
    </ButtonComponent>
  );
};

export default Button;
Button.propTypes = {
  onLoadMoreClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
