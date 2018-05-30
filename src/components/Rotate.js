import React from "react";
import { connect } from "react-redux";

export const Rotate = ({ isLandscape }) => (
  <div>
    {isLandscape ? null : (
      <div className="rotate">
        <div className="rotate__logo" />
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  isLandscape: state.settings.isLandscape
});

export default connect(mapStateToProps)(Rotate);
