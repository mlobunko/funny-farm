import React from "react";
import { shallow } from "enzyme";
import { App } from "../App";
import { landscapeOn, landscapeOff } from "../actions/settings";
import { startPlayMusic } from "../actions/saga";

it("should render App correctly", () => {
  const wrapper = shallow(
    <App
      landscapeOn={landscapeOn}
      landscapeOff={landscapeOff}
      startPlayMusic={startPlayMusic}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

it("should call componentDidMount in App correctly", () => {
  const startPlayMusic = jest.fn();
  window.addEventListener = jest.fn();

  const wrapper = shallow(
    <App
      landscapeOn={landscapeOn}
      landscapeOff={landscapeOff}
      startPlayMusic={startPlayMusic}
    />
  );
  expect(startPlayMusic).toHaveBeenCalledTimes(1);
  expect(window.addEventListener).toHaveBeenCalledWith(
    "resize",
    wrapper.instance().checkLandscape
  );
  wrapper.instance().checkLandscape = jest.fn();
  wrapper.update();
  wrapper.instance().componentDidMount();
  expect(wrapper.instance().checkLandscape).toHaveBeenCalledTimes(1);
});

it("should call landscapeOn in checkLandscape correctly when width > height", () => {
  Object.defineProperty(document.documentElement, "clientWidth", {
    get: function() {
      return 1000;
    },
    configurable: true
  });
  Object.defineProperty(document.documentElement, "clientHeight", {
    get: function() {
      return 500;
    },
    configurable: true
  });
  const wrapper = shallow(
    <App
      landscapeOn={landscapeOn}
      landscapeOff={landscapeOff}
      startPlayMusic={startPlayMusic}
    />
  );
  expect(wrapper.instance().checkLandscape()).toEqual(landscapeOn());
});

it("should call landscapeOff in checkLandscape correctly when width < height", () => {
  Object.defineProperty(document.documentElement, "clientWidth", {
    get: function() {
      return 500;
    },
    configurable: true
  });
  Object.defineProperty(document.documentElement, "clientHeight", {
    get: function() {
      return 1000;
    },
    configurable: true
  });
  const wrapper = shallow(
    <App
      landscapeOn={landscapeOn}
      landscapeOff={landscapeOff}
      startPlayMusic={startPlayMusic}
    />
  );
  expect(wrapper.instance().checkLandscape()).toEqual(landscapeOff());
});
