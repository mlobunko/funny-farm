import React from 'react';
import { shallow } from 'enzyme';

import { CowComponent } from '../CowComponent';

const isPlaying = true;
const playSound = jest.fn();

describe('render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <CowComponent isPlaying={isPlaying} playSound={playSound} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('props', () => {
  it('playSound onClick', () => {
    const wrapper = shallow(
      <CowComponent isPlaying={isPlaying} playSound={playSound} />
    );
    expect(wrapper.prop('onClick')).toEqual(playSound);
  });
});
