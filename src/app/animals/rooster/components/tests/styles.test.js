import React from 'react';
import { shallow } from 'enzyme';
import 'enzyme-to-json';

import { StyledRoosterComponent } from '../styles';

describe('StyledRoosterComponent', () => {
  it('renders animal', () => {
    const wrapper = shallow(<StyledRoosterComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders animalChat', () => {
    const chat = true;
    const wrapper = shallow(<StyledRoosterComponent chat={chat} />);
    expect(wrapper).toMatchSnapshot();
  });
});
