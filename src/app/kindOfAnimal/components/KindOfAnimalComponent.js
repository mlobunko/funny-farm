import React from 'react';
import PropTypes from 'prop-types';

import { StyledAnimation, StyledKind } from './styles';

export const KindOfAnimalComponent = ({ clickedAnimal }) => (
  <React.Fragment>
    {clickedAnimal ? (
      <StyledKind>{clickedAnimal}</StyledKind>
    ) : (
      <StyledAnimation>Touch The Animal</StyledAnimation>
    )}
  </React.Fragment>
);

export default KindOfAnimalComponent;

KindOfAnimalComponent.proptypes = {
  clickedAnimal: PropTypes.string.isRequired
};
