import React from 'react';
import PropTypes from 'prop-types';

import { StyledDuckComponent } from './styles';

export const DuckComponent = ({ isPlaying, playSound }) => (
  <StyledDuckComponent onClick={playSound} chat={isPlaying} />
);

export default DuckComponent;
DuckComponent.displayName = 'DuckComponent';

DuckComponent.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  playSound: PropTypes.func.isRequired
};
