import React from "react";
import Header from "./Header";
import TouchTheAnimal from "./TouchTheAnimal";
import CowSheepCat from "./CowSheepCat";
import DuckDogChicken from "./DuckDogChicken";

const Content = () => (
  <div className="content">
    <Header />
    <TouchTheAnimal />
    <div className="animals">
      <DuckDogChicken />
      <CowSheepCat />
    </div>
  </div>
);

export default Content;
