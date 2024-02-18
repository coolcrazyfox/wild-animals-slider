import React from "react";
import style from "../../../styles/AnimalItem.module.css";
import img5 from "../../accent/";
const Thumbnail = () => {
  return (
    <div className={style.thumbnail}>
      <div className={style.item}>
        <img src="{img4}" />
        <div className={style.content}>
          <div className={style.title}> 'item.name'</div>
          <div className={style.des}> Description</div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
