import React from "react";
import Rotate from "./components/Rotate";
import Content from "./components/Content";
import { connect } from "react-redux";
import { landscapeOn, landscapeOff } from "./actions/settings";

export class App extends React.Component {
  checkLandscape = () =>
    window.screen.width > window.screen.height
      ? this.props.landscapeOn()
      : this.props.landscapeOff();

  componentDidMount = () => {
    this.checkLandscape();
    window.addEventListener("resize", this.checkLandscape);
  };
  render() {
    return (
      <div>
        <Rotate />
        <Content />
      </div>
    );
  }
}

export default connect(undefined, { landscapeOn, landscapeOff })(App);
