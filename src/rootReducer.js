import { combineReducers } from 'redux';
import clickedAnimal from 'shared/clickedAnimal';
import music from 'shared/music';
import cat from 'app/animals/cat';
import cow from 'app/animals/cow';
import dog from 'app/animals/dog';
import duck from 'app/animals/duck';
import rooster from 'app/animals/rooster';
import sheep from 'app/animals/sheep';

export default combineReducers({
  [clickedAnimal.constants.NAME]: clickedAnimal.reducer,
  [music.constants.NAME]: music.reducer,
  [cat.constants.NAME]: cat.reducer,
  [cow.constants.NAME]: cow.reducer,
  [dog.constants.NAME]: dog.reducer,
  [duck.constants.NAME]: duck.reducer,
  [rooster.constants.NAME]: rooster.reducer,
  [sheep.constants.NAME]: sheep.reducer
});
