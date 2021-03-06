import styled from 'styled-components';
import PropTypes from 'prop-types';

import soundOn from '../images/sound-on.svg';
import soundOff from '../images/sound-off.svg';

export const StyledH1 = styled.h1`
  font-size: 3rem;
  margin: 0;
  padding: 0;
  font-family: LuckiestGuy;
  letter-spacing: 2px;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

  @media (min-height: 600px) {
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    font-size: 5rem;
  }

  @media (min-width: 2000px) {
    font-size: 9rem;
  }
`;
StyledH1.displayName = 'StyledH1';

export const StyledHeaderComponent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  padding-top: 2rem;

  @media (min-height: 600px) {
    height: 8rem;
  }
  @media (min-width: 2000px) {
    height: 15rem;
  }
`;
StyledHeaderComponent.displayName = 'StyledHeaderComponent';

export const StyledLeft = styled.div`
  flex: 1 0;
  width: 1rem;
  height: 100%;
`;
StyledLeft.displayName = 'StyledLeft';

export const StyledMusicIcon = styled.div.attrs({
  'aria-label': 'toggle play music'
})`
  width: 3rem;
  touch-action: none;
  background: ${props =>
    props.isMusicOn
      ? `url(${soundOn}) no-repeat center center`
      : `url(${soundOff}) no-repeat center center`};
  background-size: contain;
  margin-right: 2rem;
  @media (min-width: 900px) {
    width: 5rem;
  }

  @media (min-width: 2000px) {
    width: 8rem;
    margin-right: 4rem;
  }
`;
StyledMusicIcon.displayName = 'StyledMusicIcon';

StyledMusicIcon.propTypes = {
  isMusicOn: PropTypes.bool
};

export const StyledRight = styled.div`
  flex: 1 0;
  display: flex;
  justify-content: flex-end;
`;
StyledRight.displayName = 'StyledRight';
