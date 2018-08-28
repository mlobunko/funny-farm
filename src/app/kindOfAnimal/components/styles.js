import styled, { keyframes } from 'styled-components';

const commonStyles = `
  height: 9vh;
  text-align: center;
  font-family: LuckiestGuy;
  letter-spacing: 2px;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

export const StyledKind = styled.div`
  ${commonStyles};
  font-size: 2.5rem;

  @media (min-height: 600px) {
    font-size: 4rem;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  }

  @media (min-width: 2000px) {
    font-size: 7rem;
  }
`;

const blinkingText = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledAnimation = styled.div`
  ${commonStyles};
  font-size: 1.5rem;
  animation-name: ${blinkingText};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  opacity: 1;

  @media (min-height: 600px) {
    font-size: 2.3rem;
  }

  @media (min-width: 2000px) {
    font-size: 4rem;
  }
`;
