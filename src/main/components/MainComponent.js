import React from 'react';
import PropTypes from 'prop-types';

import Rotate from './Rotate';
import Content from './ContentContainer';

export const MainComponent = ({ isLandscape }) => (
  <div>{isLandscape ? <Content /> : <Rotate />}</div>
);

export default MainComponent;
MainComponent.displayName = 'Main';

MainComponent.propTypes = {
  isLandscape: PropTypes.bool
};
