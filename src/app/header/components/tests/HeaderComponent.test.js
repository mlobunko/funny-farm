import React from 'react';
import { shallow } from 'enzyme';

import { HeaderComponent } from '../HeaderComponent';

const toggleMusic = jest.fn();
const isMusicOn = true;

describe('render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <HeaderComponent isMusicOn={isMusicOn} toggleMusic={toggleMusic} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledMusicIcon', () => {
  it('find toggleMusic in onClick', () => {
    const wrapper = shallow(
      <HeaderComponent isMusicOn={isMusicOn} toggleMusic={toggleMusic} />
    );
    expect(wrapper.find('StyledMusicIcon').prop('onClick')).toEqual(
      toggleMusic
    );
  });
});
