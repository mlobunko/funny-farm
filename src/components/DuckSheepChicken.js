import React from "react";
import { connect } from "react-redux";
import {
  playChickenSound,
  playDuckSound,
  playSheepSound
} from "../actions/saga";

export const DuckSheepChicken = ({
  playChickenSound,
  playDuckSound,
  playSheepSound,
  isChickenSoundPlaying,
  isDuckSoundPlaying,
  isSheepSoundPlaying
}) => (
  <div className="duck-sheep-chicken">
    <div
      className={isDuckSoundPlaying ? "duck--chat" : "duck"}
      onClick={playDuckSound}
    />
    <div
      className={isSheepSoundPlaying ? "sheep--chat" : "sheep"}
      onClick={playSheepSound}
    />
    <div
      className={isChickenSoundPlaying ? "chicken--chat" : "chicken"}
      onClick={playChickenSound}
    />
  </div>
);

const mapStateToProps = state => ({
  isChickenSoundPlaying: state.settings.isChickenSoundPlaying,
  isDuckSoundPlaying: state.settings.isDuckSoundPlaying,
  isSheepSoundPlaying: state.settings.isSheepSoundPlaying
});

export default connect(mapStateToProps, {
  playChickenSound,
  playDuckSound,
  playSheepSound
})(DuckSheepChicken);
