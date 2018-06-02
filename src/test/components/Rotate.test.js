import React from "react";
import { shallow } from "enzyme";
import { Rotate } from "../../components/Rotate";

it("should render Rotate component correctly", () => {
  const wrapper = shallow(<Rotate />);
  expect(wrapper).toMatchSnapshot();
});
