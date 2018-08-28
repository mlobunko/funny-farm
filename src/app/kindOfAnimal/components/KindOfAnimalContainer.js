import { connect } from 'react-redux';

import clickedAnimal from 'shared/clickedAnimal';

import KindOfAnimalComponent from './KindOfAnimalComponent';

const mapStateToProps = state => ({
  clickedAnimal: clickedAnimal.selectors.getAll(state)
});

export default connect(mapStateToProps)(KindOfAnimalComponent);
