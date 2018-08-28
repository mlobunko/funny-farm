import { connect } from 'react-redux';

import music from 'shared/music';

import HeaderComponent from './HeaderComponent';

const mapStateToProps = state => ({
  isMusicOn: music.selectors.getAll(state)
});

const mapDispatchToProps = {
  toggleMusic: music.actions.click
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);
