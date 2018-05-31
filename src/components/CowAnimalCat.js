import React from "react";
import { connect } from "react-redux";
import { playCatSound, playCowSound } from "../actions/saga";

const CowAndCat = ({
  playCatSound,
  playCowSound,
  isCatSoundPlaying,
  isCowSoundPlaying,
  clickedAnimal
}) => (
  <div className="cow-animal-cat">
    <div
      className={isCowSoundPlaying ? "cow--chat" : "cow"}
      onClick={playCowSound}
    />
    <div className="animal">
      <div>{clickedAnimal}</div>
    </div>
    <div
      className={isCatSoundPlaying ? "cat--chat" : "cat"}
      onClick={playCatSound}
    />
  </div>
);

const mapStateToProps = state => ({
  isCowSoundPlaying: state.settings.isCowSoundPlaying,
  isCatSoundPlaying: state.settings.isCatSoundPlaying,
  clickedAnimal: state.settings.clickedAnimal
});

export default connect(mapStateToProps, { playCatSound, playCowSound })(
  CowAndCat
);
