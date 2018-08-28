import React from 'react';
import { shallow } from 'enzyme';
import 'enzyme-to-json';

import { StyledSheepComponent } from '../styles';

describe('StyledRoosterComponent', () => {
  it('renders animal', () => {
    const wrapper = shallow(<StyledSheepComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders animalChat', () => {
    const chat = true;
    const wrapper = shallow(<StyledSheepComponent chat={chat} />);
    expect(wrapper).toMatchSnapshot();
  });
});
