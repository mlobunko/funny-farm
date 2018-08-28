import React from 'react';
import { shallow } from 'enzyme';
import 'enzyme-to-json';

import { StyledCatComponent } from '../styles';

describe('StyledCatComponent', () => {
  it('renders animal', () => {
    const wrapper = shallow(<StyledCatComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders animalChat', () => {
    const chat = true;
    const wrapper = shallow(<StyledCatComponent chat={chat} />);
    expect(wrapper).toMatchSnapshot();
  });
});
