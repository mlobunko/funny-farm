import React from "react";
import { shallow } from "enzyme";
import { Dog } from "../../components/Dog";
import { playDogSound } from "../../actions/saga";

it("should render Dog component correctly", () => {
  const wrapper = shallow(<Dog playDogSound={playDogSound} />);
  expect(wrapper).toMatchSnapshot();
});

it("should call playDogSound on buttonClick", () => {
  const playDogSound = jest.fn();
  const wrapper = shallow(<Dog playDogSound={playDogSound} />);
  wrapper.find(".dog__image").simulate("click");
  expect(playDogSound).toHaveBeenCalledTimes(1);
});
