import React from "react";
// import image from "../../../accent/img1.jpg";
import s from "../../../styles/AnimalItem.module.css";
const AnimalItem = ({ item }) => {
  return (
    <div className={s.item}>
      <img src={item.images} />
      <div className={s.content}>
        <div className={s.author}> Andrei</div>
        <div className={s.title}> {item.name}</div>
        <div className={s.topic}> Animal</div>
        <div className={s.des}>
          Describes how inline contents of a block are horizontally aligned if
          the contents do not completely fill the line box.
        </div>
        <div className={s.buttons}>
          <button className={s.btn}>SEE MORE</button>
          <button className={s.btn}>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default AnimalItem;
