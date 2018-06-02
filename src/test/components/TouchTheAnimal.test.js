import React from "react";
import { shallow } from "enzyme";
import { TouchTheAnimal } from "../../components/TouchTheAnimal";

it("should render TouchTheAnimal component correctly", () => {
  const wrapper = shallow(<TouchTheAnimal />);
  expect(wrapper).toMatchSnapshot();
});
