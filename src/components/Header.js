import React from "react";
import { connect } from "react-redux";
import { changeIsMusicOn } from "../actions/settings";

export const Header = ({ isMusicOn, changeIsMusicOn }) => (
  <div className="header">
    <div className="header__left" />
    <div>
      <h1>Funny Farm</h1>
    </div>
    <div className="music-logo">
      <div
        className={isMusicOn ? "music-logo--on" : "music-logo--off"}
        onClick={changeIsMusicOn}
      />
    </div>
  </div>
);

const mapStateToProps = state => ({
  isMusicOn: state.settings.isMusicOn
});

export default connect(mapStateToProps, { changeIsMusicOn })(Header);
