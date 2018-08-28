import React from 'react';
import { shallow } from 'enzyme';

import { ContentContainer } from '../ContentContainer';

const musicStart = jest.fn();

beforeEach(() => {
  jest.resetAllMocks();
});

describe('render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ContentContainer musicStart={musicStart} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('componentDidMount', () => {
  shallow(<ContentContainer musicStart={musicStart} />);
  expect(musicStart).toHaveBeenCalledTimes(1);
});
