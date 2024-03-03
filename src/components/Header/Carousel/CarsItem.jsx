import React from "react";

import s from "../../../styles/Carousel.module.css";
const CarsItem = ({ item }) => {
  return (
    <div className={s.list}>
      <div className={s.item}>
        <img src={item.images} />
        <div className={s.content}>
          <div className={s.author}>By Andrei Malets</div>
          <div className={s.title}> {item.name}</div>
          <div className={s.topic}> EV9</div>
          <div className={s.des}>Electric like you've never seen.</div>
          <div className={s.buttons}>
            <button className={s.btn}>SEE MORE</button>
            <button className={s.btn}>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsItem;
