import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import TouchTheAnimal from "./TouchTheAnimal";
import CowCat from "./CowCat";
import Dog from "./Dog";
import DuckSheepChicken from "./DuckSheepChicken";
import { startPlayMusic } from "../actions/saga";

export class Content extends React.Component {
  componentDidMount = () => {
    this.props.startPlayMusic();
  };
  render() {
    return (
      <div>
        {this.props.isLandscape ? (
          <div className="content">
            <Header />
            <TouchTheAnimal />
            <CowCat />
            <Dog />
            <DuckSheepChicken />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLandscape: state.settings.isLandscape
});

export default connect(mapStateToProps, { startPlayMusic })(Content);
