import React from 'react';
import PropTypes from 'prop-types';

import { StyledCatComponent } from './styles';

export const CatComponent = ({ isPlaying, playSound }) => (
  <StyledCatComponent onClick={playSound} chat={isPlaying} />
);

export default CatComponent;

CatComponent.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  playSound: PropTypes.func.isRequired
};
