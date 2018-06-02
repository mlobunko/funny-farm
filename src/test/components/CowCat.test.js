import React from "react";
import { shallow } from "enzyme";
import { CowCat } from "../../components/CowCat";
import { playCatSound, playCowSound } from "../../actions/saga";

it("should render correctly CowCat component", () => {
  const wrapper = shallow(<CowCat />);
  expect(wrapper).toMatchSnapshot();
});

it("should call playCowSound on button click", () => {
  const playCowSound = jest.fn();
  const wrapper = shallow(
    <CowCat playCatSound={playCatSound} playCowSound={playCowSound} />
  );
  wrapper.find(".cow").simulate("click");
  expect(playCowSound).toHaveBeenCalledTimes(1);
});

it("should call playCatSound on button click", () => {
  const playCatSound = jest.fn();
  const wrapper = shallow(
    <CowCat playCatSound={playCatSound} playCowSound={playCowSound} />
  );
  wrapper.find(".cat").simulate("click");
  expect(playCatSound).toHaveBeenCalledTimes(1);
});
