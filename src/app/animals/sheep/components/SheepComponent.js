import React from 'react';
import PropTypes from 'prop-types';

import { StyledSheepComponent } from './styles';

export const SheepComponent = ({ isPlaying, playSound }) => (
  <StyledSheepComponent onClick={playSound} chat={isPlaying} />
);

export default SheepComponent;

SheepComponent.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  playSound: PropTypes.func.isRequired
};
