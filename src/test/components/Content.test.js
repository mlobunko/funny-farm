import React from "react";
import { shallow } from "enzyme";
import { Content } from "../../components/Content";
import { startPlayMusic } from "../../actions/saga";

it("should render Content correctly", () => {
  const wrapper = shallow(<Content startPlayMusic={startPlayMusic} />);
  expect(wrapper).toMatchSnapshot();
});

it("component Content should componentDidMount startPlayMusic() correctly", () => {
  const startPlayMusic = jest.fn();
  const wrapper = shallow(<Content startPlayMusic={startPlayMusic} />);
  expect(startPlayMusic).toHaveBeenCalledTimes(1);
});
