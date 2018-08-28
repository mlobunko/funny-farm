import React from 'react';
import { shallow } from 'enzyme';
import 'enzyme-to-json';

import { StyledDuckComponent } from '../styles';

describe('StyledDuckComponent', () => {
  it('renders animal', () => {
    const wrapper = shallow(<StyledDuckComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders animalChat', () => {
    const chat = true;
    const wrapper = shallow(<StyledDuckComponent chat={chat} />);
    expect(wrapper).toMatchSnapshot();
  });
});
