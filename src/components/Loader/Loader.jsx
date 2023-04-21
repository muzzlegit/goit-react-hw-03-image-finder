import PropTypes from 'prop-types';
//ICONS
import { ImSpinner10 } from 'react-icons/im';
//STYLES
import { List, Item, Spiner } from './Loader.styled';

const Loader = ({ imagesQuantity }) => {
  let sceletons = [];
  for (let index = 0; index < imagesQuantity; index++) {
    sceletons = [...sceletons, index];
  }
  return (
    <List>
      {sceletons.map((_, index) => {
        return (
          <Item key={index}>
            <Spiner>
              <ImSpinner10 size="48px" />
            </Spiner>
          </Item>
        );
      })}
    </List>
  );
};

export default Loader;
Loader.propTypes = {
  imagesQuantity: PropTypes.number.isRequired,
};
