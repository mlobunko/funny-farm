import React from 'react';
import { shallow } from 'enzyme';
import 'enzyme-to-json';

import { StyledCowComponent } from '../styles';

describe('StyledCatComponent', () => {
  it('renders animal', () => {
    const wrapper = shallow(<StyledCowComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders animalChat', () => {
    const chat = true;
    const wrapper = shallow(<StyledCowComponent chat={chat} />);
    expect(wrapper).toMatchSnapshot();
  });
});
