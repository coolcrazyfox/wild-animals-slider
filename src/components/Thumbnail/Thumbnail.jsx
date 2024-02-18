import React from "react";
import style from "../../styles/Thumbnail.module.css";

const Thumbnail = (card) => {
  return (
    <div className={style.thumbnail}>
      <div className={style.item}>
        <img src={card.images} />
        <div className={style.content}>
          <div className={style.title}> {card.name}</div>
          <div className={style.des}> Description</div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
