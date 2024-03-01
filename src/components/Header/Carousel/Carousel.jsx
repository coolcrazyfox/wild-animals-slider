import React from "react";
import img1 from "../../../accent/img9.jpg";
import img2 from "../../../accent/img10.jpg";
import img3 from "../../../accent/img11.jpg";
import img4 from "../../../accent/img12.jpg";
import img5 from "../../../accent/img13.jpg";
import img6 from "../../../accent/img14.jpg";
import img7 from "../../../accent/img15.jpg";
import img8 from "../../../accent/img16.jpg";
import img9 from "../../../accent/img17.jpg";
import img10 from "../../../accent/img18.jpg";
import img11 from "../../../accent/img19.jpg";
import img12 from "../../../accent/img20.jpg";
import img13 from "../../../accent/img21.jpg";
import img14 from "../../../accent/img22.jpg";
import AnimalItem from "./AnimalItem";
import style from "../../../styles/Carousel.module.css";
import Thumbnail from "../../Thumbnail/Thumbnail";

const Carousel = () => {
  // const initState = [
  //   { id: 1, name: "elk", images: img1 },
  //   { id: 2, name: "elephant", images: img2 },
  //   { id: 3, name: "leopard", images: img3 },
  //   { id: 4, name: "wolf", images: img4 },
  //   { id: 5, name: "deer", images: img5 },
  //   { id: 6, name: "lion", images: img6 },
  // ];
  const initState = [
    { id: 1, name: "KIA", images: img1 },
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
