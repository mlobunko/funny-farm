import { connect } from 'react-redux';

import { getIsPlaying } from '../selectors';
import * as actions from '../actions';
import RoosterComponent from './RoosterComponent';

const mapStateToProps = state => ({
  isPlaying: getIsPlaying(state)
});

const mapDispatchToProps = {
  playSound: actions.playSound
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoosterComponent);
