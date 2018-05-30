import React from "react";
import { connect } from "react-redux";
import { playDogSound } from "../actions/saga";

const Dog = ({ playDogSound, isDogSoundPlaying }) => (
  <div className="dog">
    <div
      className={isDogSoundPlaying ? "dog__image--chat" : "dog__image"}
      onClick={playDogSound}
    />
  </div>
);

const mapStateToProps = state => ({
  isDogSoundPlaying: state.settings.isDogSoundPlaying
});

export default connect(mapStateToProps, { playDogSound })(Dog);
