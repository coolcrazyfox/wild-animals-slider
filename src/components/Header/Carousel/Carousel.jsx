import React from "react";
import img1 from "../../../accent/img1.jpg";
import img2 from "../../../accent/img2.jpg";
import img3 from "../../../accent/img3.jpg";
import img4 from "../../../accent/img4.jpg";
import AnimalItem from "./AnimalItem";
import s from "../../../styles/Carousel.module.css";

import Thumbnail from "../../Thumbnail/Thumbnail";

const Carousel = () => {
  const initState = [
    { id: 1, name: "elk", images: img1 },
    { id: 2, name: "leopard", images: img2 },
    { id: 3, name: "elephant", images: img3 },
    { id: 4, name: "wolf", images: img4 },
  ];
  return (
    <div className={s.carousel}>
      <div className={s.list}>
        {initState.map((a) => {
          return (
            <div key={a.id}>
              <AnimalItem item={a} />
            </div>
          );
        })}
      </div>
      {initState.map((c) => {
        return (
          <div key={c.id}>
            {" "}
            <Thumbnail card={c} />
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
