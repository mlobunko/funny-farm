import React from "react";
import { connect } from "react-redux";
import { playCatSound, playSheepSound, playCowSound } from "../actions/saga";

export const CowSheepCat = ({
  playCatSound,
  playSheepSound,
  playCowSound,
  isCowSoundPlaying,
  isSheepSoundPlaying,
  isCatSoundPlaying
}) => (
  <div className="cow-sheep-cat">
    <div
      className={isCowSoundPlaying ? "cow--chat" : "cow"}
      onClick={playCowSound}
    />
    <div
      className={isSheepSoundPlaying ? "sheep--chat" : "sheep"}
      onClick={playSheepSound}
    />
    <div
      className={isCatSoundPlaying ? "cat--chat" : "cat"}
      onClick={playCatSound}
    />
  </div>
);

const mapStateToProps = state => ({
  isCowSoundPlaying: state.settings.isCowSoundPlaying,
  isSheepSoundPlaying: state.settings.isSheepSoundPlaying,
  isCatSoundPlaying: state.settings.isCatSoundPlaying
});

export default connect(mapStateToProps, {
  playCowSound,
  playSheepSound,
  playCatSound
})(CowSheepCat);
