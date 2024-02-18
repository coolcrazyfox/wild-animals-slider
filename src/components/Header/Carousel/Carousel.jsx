import React from "react";
import image from "../../../accent/img1.jpg";
import AnimalItem from "./AnimalItem";
const Carousel = () => {
  return (
    <div className="carousel">
      <div className="list">
        <AnimalItem />
      </div>
    </div>
  );
};

export default Carousel;
