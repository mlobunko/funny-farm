import { connect } from 'react-redux';

import { getIsPlaying } from '../selectors';
import * as actions from '../actions';
import SheepComponent from './SheepComponent';

const mapStateToProps = state => ({
  isPlaying: getIsPlaying(state)
});

const mapDispatchToProps = {
  playSound: actions.playSound
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SheepComponent);
