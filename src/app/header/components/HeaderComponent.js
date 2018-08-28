import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledHeaderComponent,
  StyledH1,
  StyledLeft,
  StyledMusicIcon,
  StyledRight
} from './styles';

export const HeaderComponent = ({ isMusicOn, toggleMusic }) => (
  <StyledHeaderComponent>
    <StyledLeft />
    <StyledH1>Funny Farm</StyledH1>
    <StyledRight>
      <StyledMusicIcon onClick={toggleMusic} isMusicOn={isMusicOn} />
    </StyledRight>
  </StyledHeaderComponent>
);

export default HeaderComponent;

HeaderComponent.prototypes = {
  isMusicOn: PropTypes.bool.isRequired,
  toggleMusic: PropTypes.func.isRequired
};
