import React from 'react';
import PropTypes from 'prop-types';

import { StyledDogComponent } from './styles';

export const DogComponent = ({ isPlaying, playSound }) => (
  <StyledDogComponent onClick={playSound} chat={isPlaying} />
);

export default DogComponent;
DogComponent.displayName = 'DogComponent';

DogComponent.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  playSound: PropTypes.func.isRequired
};
