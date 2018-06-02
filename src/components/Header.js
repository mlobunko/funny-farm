import React from "react";
import { connect } from "react-redux";
import { changePlayMusic } from "../actions/saga";

export const Header = ({ isMusicOn, changePlayMusic }) => (
  <div className="header">
    <div className="header__left" />
    <div>
      <h1>Funny Farm</h1>
    </div>
    <div className="music-logo">
      <div
        className={isMusicOn ? "music-logo--on" : "music-logo--off"}
        onClick={changePlayMusic}
      />
    </div>
  </div>
);

const mapStateToProps = state => ({
  isMusicOn: state.settings.isMusicOn
});

export default connect(mapStateToProps, { changePlayMusic })(Header);
