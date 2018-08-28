import React from 'react';
import { shallow } from 'enzyme';
import 'enzyme-to-json';

import {
  StyledH1,
  StyledHeaderComponent,
  StyledLeft,
  StyledMusicIcon,
  StyledRight
} from '../styles';

describe('StyledH1', () => {
  it('renders correctly', () => {
    const wrappper = shallow(<StyledH1 />);
    expect(wrappper).toMatchSnapshot();
  });
});

describe('StyledHeaderComponent', () => {
  it('renders correctly', () => {
    const wrappper = shallow(<StyledHeaderComponent />);
    expect(wrappper).toMatchSnapshot();
  });
});

describe('StyledLeft', () => {
  it('renders correctly', () => {
    const wrappper = shallow(<StyledLeft />);
    expect(wrappper).toMatchSnapshot();
  });
});

describe('StyledMusicIcon', () => {
  it('renders soundOn', () => {
    const isMusicOn = true;
    const wrappper = shallow(<StyledMusicIcon isMusicOn={isMusicOn} />);
    expect(wrappper).toMatchSnapshot();
  });

  it('renders soundOff', () => {
    const isMusicOn = false;
    const wrappper = shallow(<StyledMusicIcon isMusicOn={isMusicOn} />);
    expect(wrappper).toMatchSnapshot();
  });
});

describe('StyledRight', () => {
  it('renders correctly', () => {
    const wrappper = shallow(<StyledRight />);
    expect(wrappper).toMatchSnapshot();
  });
});
