import React from 'react';
import { shallow } from 'enzyme';
import 'enzyme-to-json';

import {
  StyledAnimals,
  StyledContentComponent,
  StyledImageRotate,
  StyledRotate,
  StyledRow
} from '../styles';

describe('StyledAnimals', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledAnimals />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledContentComponent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledContentComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledImageRotate', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledImageRotate />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledRotate', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledRotate />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledRow', () => {
  it('renders correctly with props.top', () => {
    const wrapper = shallow(<StyledRow top />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly without props.top', () => {
    const wrapper = shallow(<StyledRow />);
    expect(wrapper).toMatchSnapshot();
  });
});
