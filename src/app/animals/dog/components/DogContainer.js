import { connect } from 'react-redux';

import { getIsPlaying } from '../selectors';
import * as actions from '../actions';
import DogComponent from './DogComponent';

const mapStateToProps = state => ({
  isPlaying: getIsPlaying(state)
});

const mapDispatchToProps = {
  playSound: actions.playSound
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogComponent);
