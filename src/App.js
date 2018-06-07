import React from "react";
import Rotate from "./components/Rotate";
import Content from "./components/Content";
import { connect } from "react-redux";
import { landscapeOn, landscapeOff } from "./actions/settings";
import { startPlayMusic } from "./actions/saga";

export class App extends React.Component {
  checkLandscape = () =>
    document.documentElement.clientWidth > document.documentElement.clientHeight
      ? // window.innerWidth > window.innerHeight
        this.props.landscapeOn()
      : this.props.landscapeOff();

  componentDidMount = () => {
    this.props.startPlayMusic();
    this.checkLandscape();
    window.addEventListener("resize", this.checkLandscape);
  };
  render() {
    return <div>{this.props.isLandscape ? <Content /> : <Rotate />}</div>;
  }
}

const mapStateToProps = state => ({
  isLandscape: state.settings.isLandscape
});

export default connect(
  mapStateToProps,
  {
    landscapeOn,
    landscapeOff,
    startPlayMusic
  }
)(App);
