import React from 'react';
import { shallow } from 'enzyme';

import { ContentComponent } from '../ContentComponent';

describe('render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ContentComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
