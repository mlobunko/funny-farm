import React from "react";
import { shallow } from "enzyme";
import { CowSheepCat } from "../../components/CowSheepCat";
import { playCowSound, playSheepSound, playCatSound } from "../../actions/saga";

it("should render correctly CowCat component", () => {
  const wrapper = shallow(<CowSheepCat />);
  expect(wrapper).toMatchSnapshot();
});

it("should call playCowSound on button click", () => {
  const playCowSound = jest.fn();
  const wrapper = shallow(
    <CowSheepCat
      playCowSound={playCowSound}
      playSheepSound={playSheepSound}
      playCatSound={playCatSound}
    />
  );
  wrapper.find(".cow").simulate("click");
  expect(playCowSound).toHaveBeenCalledTimes(1);
});

it("should call playSheepSound on button click", () => {
  const playSheepSound = jest.fn();
  const wrapper = shallow(
    <CowSheepCat
      playCowSound={playCowSound}
      playSheepSound={playSheepSound}
      playCatSound={playCatSound}
    />
  );
  wrapper.find(".sheep").simulate("click");
  expect(playSheepSound).toHaveBeenCalledTimes(1);
});

it("should call playCatSound on button click", () => {
  const playCatSound = jest.fn();
  const wrapper = shallow(
    <CowSheepCat
      playCowSound={playCowSound}
      playSheepSound={playSheepSound}
      playCatSound={playCatSound}
    />
  );
  wrapper.find(".cat").simulate("click");
  expect(playCatSound).toHaveBeenCalledTimes(1);
});
