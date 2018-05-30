import React from "react";
import { connect } from "react-redux";
import { playCatSound, playCowSound } from "../actions/saga";

const CowAndCat = ({
  playCatSound,
  playCowSound,
  isCatSoundPlaying,
  isCowSoundPlaying
}) => (
  <div className="cow-and-cat">
    <div
      className={isCowSoundPlaying ? "cow--chat" : "cow"}
      onClick={playCowSound}
    />
    <div
      className={isCatSoundPlaying ? "cat--chat" : "cat"}
      onClick={playCatSound}
    />
  </div>
);

const mapStateToProps = state => ({
  isCowSoundPlaying: state.settings.isCowSoundPlaying,
  isCatSoundPlaying: state.settings.isCatSoundPlaying
});

export default connect(mapStateToProps, { playCatSound, playCowSound })(
  CowAndCat
);
