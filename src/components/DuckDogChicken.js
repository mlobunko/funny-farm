import React from "react";
import { connect } from "react-redux";
import { playChickenSound, playDogSound, playDuckSound } from "../actions/saga";

export const DuckDogChicken = ({
  playChickenSound,
  playDogSound,
  playDuckSound,
  isChickenSoundPlaying,
  isDogSoundPlaying,
  isDuckSoundPlaying
}) => (
  <div className="duck-dog-chicken">
    <div
      className={isDuckSoundPlaying ? "duck--chat" : "duck"}
      onClick={playDuckSound}
    />
    <div
      className={isDogSoundPlaying ? "dog--chat" : "dog"}
      onClick={playDogSound}
    />
    <div
      className={isChickenSoundPlaying ? "chicken--chat" : "chicken"}
      onClick={playChickenSound}
    />
  </div>
);

const mapStateToProps = state => ({
  isChickenSoundPlaying: state.settings.isChickenSoundPlaying,
  isDogSoundPlaying: state.settings.isDogSoundPlaying,
  isDuckSoundPlaying: state.settings.isDuckSoundPlaying
});

export default connect(mapStateToProps, {
  playChickenSound,
  playDogSound,
  playDuckSound
})(DuckDogChicken);
