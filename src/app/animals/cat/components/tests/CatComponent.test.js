import React from 'react';
import { shallow } from 'enzyme';

import { CatComponent } from '../CatComponent';

const isPlaying = true;
const playSound = jest.fn();

describe('render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <CatComponent isPlaying={isPlaying} playSound={playSound} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('props', () => {
  it('playSound onClick', () => {
    const wrapper = shallow(
      <CatComponent isPlaying={isPlaying} playSound={playSound} />
    );
    expect(wrapper.prop('onClick')).toEqual(playSound);
  });
});
