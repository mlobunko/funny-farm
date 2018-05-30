import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import CowAndCat from "./CowAndCat";
import Dog from "./Dog";
import DuckSheepChicken from "./DuckSheepChicken";

export const Content = ({ isLandscape }) => (
  <div>
    {isLandscape ? (
      <div className="content">
        <Header />
        <CowAndCat />
        <Dog />
        <DuckSheepChicken />
      </div>
    ) : null}
  </div>
);

const mapStateToProps = state => ({
  isLandscape: state.settings.isLandscape
});

export default connect(mapStateToProps)(Content);
