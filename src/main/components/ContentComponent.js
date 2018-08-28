import React from 'react';
import Header from 'app/header/components';
import KindOfAnimal from 'app/kindOfAnimal/components';
import Cat from 'app/animals/cat/components';
import Cow from 'app/animals/cow/components';
import Dog from 'app/animals/dog/components';
import Duck from 'app/animals/duck/components';
import Rooster from 'app/animals/rooster/components';
import Sheep from 'app/animals/sheep/components';

import { StyledAnimals, StyledRow, StyledContentComponent } from './styles';

export const ContentComponent = () => (
  <StyledContentComponent>
    <Header />
    <KindOfAnimal />
    <StyledAnimals>
      <StyledRow top>
        <Duck />
        <Dog />
        <Rooster />
      </StyledRow>
      <StyledRow>
        <Cow />
        <Sheep />
        <Cat />
      </StyledRow>
    </StyledAnimals>
  </StyledContentComponent>
);

export default ContentComponent;
