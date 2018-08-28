import React from 'react';
import { shallow } from 'enzyme';

import { MainComponent } from '../MainComponent';

describe('render', () => {
  it('renders content', () => {
    const wrapper = shallow(<MainComponent isLandscape />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders rotate', () => {
    const wrapper = shallow(<MainComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
