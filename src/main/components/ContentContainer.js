import React from 'react';
import { connect } from 'react-redux';

import music from 'shared/music';

import ContentComponent from './ContentComponent';

export class ContentContainer extends React.Component {
  componentDidMount = () => {
    this.props.musicStart();
  };
  render() {
    return <ContentComponent />;
  }
}

const mapDispatchToProps = {
  musicStart: music.actions.start
};

export default connect(
  undefined,
  mapDispatchToProps
)(ContentContainer);
