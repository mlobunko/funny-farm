import React from 'react';
import { shallow } from 'enzyme';

import { KindOfAnimalComponent } from '../KindOfAnimalComponent';

describe('render', () => {
  it('renders StyledKind', () => {
    const clickedAnimal = 'pig';
    const wrapper = shallow(
      <KindOfAnimalComponent clickedAnimal={clickedAnimal} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders StyledAnimation', () => {
    const wrapper = shallow(<KindOfAnimalComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
