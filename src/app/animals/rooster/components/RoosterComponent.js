import React from 'react';
import PropTypes from 'prop-types';

import { StyledRoosterComponent } from './styles';

export const RoosterComponent = ({ isPlaying, playSound }) => (
  <StyledRoosterComponent onClick={playSound} chat={isPlaying} />
);

export default RoosterComponent;
RoosterComponent.displayName = 'RoosterComponent';

RoosterComponent.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  playSound: PropTypes.func.isRequired
};
