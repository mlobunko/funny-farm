import styled from 'styled-components';
import imageAnimal from '../images/animal.svg';
import imageAnimalChat from '../images/animal-chat.svg';

export const StyledCatComponent = styled.div.attrs({
  'aria-label': 'play cat sound button'
})`
  width: 20vw;
  background: ${props =>
    props.chat
      ? `url(${imageAnimalChat}) no-repeat center center`
      : `url(${imageAnimal}) no-repeat center center`};
  background-size: contain;
  touch-action: none;
`;
