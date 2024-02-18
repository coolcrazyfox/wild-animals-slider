import React from "react";
import img1 from "../../../accent/img1.jpg";
import img2 from "../../../accent/img2.jpg";
import img3 from "../../../accent/img3.jpg";
import img4 from "../../../accent/img4.jpg";
import AnimalItem from "./AnimalItem";
import style from "../../../styles/Carousel.module.css";
import Thumbnail from "../../Thumbnail/Thumbnail";

const Carousel = () => {
  const initState = [
    { id: 1, name: "elk", images: img1 },
    { id: 2, name: "wolf", images: img4 },
    { id: 3, name: "elephant", images: img2 },
    { id: 4, name: "leopard", images: img3 },
  ];

  return (
    <div className={style.carousel}>
      <div className={style.list}>
        {initState.map((a, i) => {
          return (
            <div key={i}>
              <AnimalItem item={a} />
            </div>
          );
        })}
      </div>

      <div className={style.thumbnail}>
        <div className={style.item}>
          <img className={style.img} src={img2} />
          <div className={style.content}>
            <div className={style.title}>1</div>
            <div className={style.des}> Description</div>
          </div>
        </div>
        <div className={style.item}>
          <img className={style.img} src={img3} />
          <div className={style.content}>
            <div className={style.title}>2</div>
            <div className={style.des}> Description</div>
          </div>
        </div>
      </div>

      {/* <div>
        {initState.map((c, index) => {
          return <Thumbnail card={c} key={index} />;
        })}
      </div> */}
    </div>
  );
};

export default Carousel;
