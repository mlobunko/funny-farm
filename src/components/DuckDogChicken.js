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
      aria-label="play duck sound button"
      className={isDuckSoundPlaying ? "duck--chat" : "duck"}
      onClick={playDuckSound}
    />
    <div
      aria-label="play dog sound button"
      className={isDogSoundPlaying ? "dog--chat" : "dog"}
      onClick={playDogSound}
    />
    <div
      aria-label="play rooster sound button"
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
