import React from 'react';
import { shallow } from 'enzyme';
import 'enzyme-to-json';

import { StyledAnimation, StyledKind } from '../styles';

describe('StyledAnimation', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledAnimation />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledKind', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledKind />);
    expect(wrapper).toMatchSnapshot();
  });
});
