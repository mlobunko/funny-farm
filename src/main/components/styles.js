import styled, { keyframes, injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';

import imageRotate from '../images/rotate.svg';
import imageBackground from '../images/bg.jpg';
import fontLuckiestGuy from '../fonts/LuckiestGuy.ttf';

injectGlobal`
  html {
    font-size: 62.5%;
  }
`;

export const StyledAnimals = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
StyledAnimals.displayName = 'StyledAnimals';

export const StyledContentComponent = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: url(${imageBackground}) no-repeat center center;
  background-size: cover;
  @font-face {
    font-family: LuckiestGuy;
    src: url(${fontLuckiestGuy});
  }
`;
StyledContentComponent.displayName = 'StyledContentComponent';

export const StyledImageRotate = styled.div`
  width: 15rem;
  height: 15rem;
  background: url(${imageRotate}) no-repeat center center;
  background-size: cover;
`;
StyledImageRotate.displayName = 'StyledImageRotate';

const rotate90deg = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-30deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const StyledRotate = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${rotate90deg} 1.5s;
  animation-iteration-count: infinite;
`;
StyledRotate.displayName = 'StyledRotate';

export const StyledRow = styled.div`
  margin-top: ${props => props.top && '1.6rem'};
  height: 18vh;
  display: flex;
  justify-content: ${props => (props.top ? 'space-evenly' : 'center')};
`;
StyledRow.displayName = 'StyledRow';

StyledRow.propTypes = {
  top: PropTypes.bool
};
