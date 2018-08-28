import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import MainComponent from './MainComponent';

export class MainContainer extends React.Component {
  state = {
    isLandscape: true
  };
  landscapeOn = () => {
    this.setState({
      isLandscape: true
    });
  };
  landscapeOff = () => {
    this.setState({
      isLandscape: false
    });
  };
  checkLandscape = () =>
    document.documentElement.clientWidth > document.documentElement.clientHeight
      ? this.landscapeOn()
      : this.landscapeOff();

  componentDidMount = () => {
    this.checkLandscape();
    window.addEventListener('resize', this.checkLandscape);
  };
  render() {
    return (
      <ErrorBoundary>
        <MainComponent isLandscape={this.state.isLandscape} />
      </ErrorBoundary>
    );
  }
}

export default MainContainer;
