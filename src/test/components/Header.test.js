import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";
import { changePlayMusic } from "../../actions/saga";

it("should render Header component correctly", () => {
  const wrapper = shallow(<Header changePlayMusic={changePlayMusic} />);
  expect(wrapper).toMatchSnapshot();
});

it("should call changePlayMusic on button click", () => {
  const changePlayMusic = jest.fn();
  const wrapper = shallow(<Header changePlayMusic={changePlayMusic} />);
  wrapper.find(".music-logo--off").simulate("click");
  expect(changePlayMusic).toHaveBeenCalledTimes(1);
});
