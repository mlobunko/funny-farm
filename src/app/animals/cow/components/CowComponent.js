import React from 'react';
import PropTypes from 'prop-types';

import { StyledCowComponent } from './styles';

export const CowComponent = ({ isPlaying, playSound }) => (
  <StyledCowComponent onClick={playSound} chat={isPlaying} />
);

export default CowComponent;
CowComponent.displayName = 'CowComponent';

CowComponent.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  playSound: PropTypes.func.isRequired
};
