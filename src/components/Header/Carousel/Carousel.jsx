import React from "react";
import img1 from "../../../accent/img1.jpg";
import img2 from "../../../accent/img2.jpg";
import img3 from "../../../accent/img3.jpg";
import img4 from "../../../accent/img4.jpg";
import img5 from "../../../accent/img5.jpg";
import img6 from "../../../accent/img6.jpg";
import AnimalItem from "./AnimalItem";
import style from "../../../styles/Carousel.module.css";
import Thumbnail from "../../Thumbnail/Thumbnail";

const Carousel = () => {
  const initState = [
    { id: 1, name: "elk", images: img1 },
    { id: 2, name: "elephant", images: img2 },
    { id: 3, name: "leopard", images: img3 },
    { id: 4, name: "wolf", images: img4 },
    { id: 5, name: "deer", images: img5 },
    { id: 6, name: "lion", images: img6 },
  ];

  return (
    <div className={style.carousel}>
      {initState.map((a, i) => {
        return (
          <div className={style.list} key={i}>
            <AnimalItem item={a} />
          </div>
        );
      })}

      <div className={style.thumbnail}>
        {initState.map((c, index) => {
          return <Thumbnail card={c} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Carousel;
