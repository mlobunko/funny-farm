import React from "react";
import { shallow } from "enzyme";
import { DuckSheepChicken } from "../../components/DuckSheepChicken";
import {
  playChickenSound,
  playDuckSound,
  playSheepSound
} from "../../actions/saga";

it("should render DuckSheepChicken component correctly", () => {
  const wrapper = shallow(
    <DuckSheepChicken
      playChickenSound={playChickenSound}
      playDuckSound={playDuckSound}
      playSheepSound={playSheepSound}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

it("should call playChickenSound on button click", () => {
  const playChickenSound = jest.fn();
  const wrapper = shallow(
    <DuckSheepChicken
      playChickenSound={playChickenSound}
      playDuckSound={playDuckSound}
      playSheepSound={playSheepSound}
    />
  );
  wrapper.find(".chicken").simulate("click");
  expect(playChickenSound).toHaveBeenCalledTimes(1);
});

it("should call playDuckSound on button click", () => {
  const playDuckSound = jest.fn();
  const wrapper = shallow(
    <DuckSheepChicken
      playChickenSound={playChickenSound}
      playDuckSound={playDuckSound}
      playSheepSound={playSheepSound}
    />
  );
  wrapper.find(".duck").simulate("click");
  expect(playDuckSound).toHaveBeenCalledTimes(1);
});

it("should call playSheepSound on button click", () => {
  const playSheepSound = jest.fn();
  const wrapper = shallow(
    <DuckSheepChicken
      playChickenSound={playChickenSound}
      playDuckSound={playDuckSound}
      playSheepSound={playSheepSound}
    />
  );
  wrapper.find(".sheep").simulate("click");
  expect(playSheepSound).toHaveBeenCalledTimes(1);
});
