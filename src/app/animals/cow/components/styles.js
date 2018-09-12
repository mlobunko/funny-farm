import styled from 'styled-components';
import PropTypes from 'prop-types';

import imageAnimal from '../images/animal.svg';
import imageAnimalChat from '../images/animal-chat.svg';

export const StyledCowComponent = styled.div.attrs({
  'aria-label': 'play cow sound button'
})`
  width: 20vw;
  background: ${props =>
    props.chat
      ? `url(${imageAnimalChat}) no-repeat center center`
      : `url(${imageAnimal}) no-repeat center center`};
  background-size: contain;
  touch-action: none;
`;

StyledCowComponent.displayName = 'StyledCowComponent';

StyledCowComponent.propTypes = {
  chat: PropTypes.bool
};
