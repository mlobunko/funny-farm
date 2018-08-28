import React from 'react';
import { shallow } from 'enzyme';

import { Rotate } from '../Rotate';

describe('render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Rotate />);
    expect(wrapper).toMatchSnapshot();
  });
});
