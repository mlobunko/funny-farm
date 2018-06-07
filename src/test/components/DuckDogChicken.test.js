import React from "react";
import { shallow } from "enzyme";
import { DuckDogChicken } from "../../components/DuckDogChicken";
import {
  playChickenSound,
  playDogSound,
  playDuckSound
} from "../../actions/saga";

it("should render DuckSheepChicken component correctly", () => {
  const wrapper = shallow(
    <DuckDogChicken
      playChickenSound={playChickenSound}
      playDogSound={playDogSound}
      playDuckSound={playDuckSound}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

it("should call playChickenSound on button click", () => {
  const playChickenSound = jest.fn();
  const wrapper = shallow(
    <DuckDogChicken
      playChickenSound={playChickenSound}
      playDogSound={playDogSound}
      playDuckSound={playDuckSound}
    />
  );
  wrapper.find(".chicken").simulate("click");
  expect(playChickenSound).toHaveBeenCalledTimes(1);
});

it("should call playDuckSound on button click", () => {
  const playDuckSound = jest.fn();
  const wrapper = shallow(
    <DuckDogChicken
      playChickenSound={playChickenSound}
      playDogSound={playDogSound}
      playDuckSound={playDuckSound}
    />
  );
  wrapper.find(".duck").simulate("click");
  expect(playDuckSound).toHaveBeenCalledTimes(1);
});

it("should call playDogSound on button click", () => {
  const playDogSound = jest.fn();
  const wrapper = shallow(
    <DuckDogChicken
      playChickenSound={playChickenSound}
      playDuckSound={playDuckSound}
      playDogSound={playDogSound}
    />
  );
  wrapper.find(".dog").simulate("click");
  expect(playDogSound).toHaveBeenCalledTimes(1);
});
