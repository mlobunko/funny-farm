import React from "react";
import { connect } from "react-redux";

export const TouchTheAnimal = ({ clickedAnimal }) => (
  <div>
    {clickedAnimal ? (
      <div className="touch-the-animal touch-the-animal__clicked-animal">
        {clickedAnimal}
      </div>
    ) : (
      <div className="touch-the-animal touch-the-animal--animation">
        Touch The Animal
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  clickedAnimal: state.settings.clickedAnimal
});

export default connect(mapStateToProps)(TouchTheAnimal);
