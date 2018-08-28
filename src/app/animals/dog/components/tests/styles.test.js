import React from 'react';
import { shallow } from 'enzyme';
import 'enzyme-to-json';

import { StyledDogComponent } from '../styles';

describe('StyledDogComponent', () => {
  it('renders animal', () => {
    const wrapper = shallow(<StyledDogComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders animalChat', () => {
    const chat = true;
    const wrapper = shallow(<StyledDogComponent chat={chat} />);
    expect(wrapper).toMatchSnapshot();
  });
});
