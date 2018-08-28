import { connect } from 'react-redux';

import { getIsPlaying } from '../selectors';
import * as actions from '../actions';
import DuckComponent from './DuckComponent';

const mapStateToProps = state => ({
  isPlaying: getIsPlaying(state)
});

const mapDispatchToProps = {
  playSound: actions.playSound
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DuckComponent);
