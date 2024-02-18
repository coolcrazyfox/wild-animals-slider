import React from "react";
import s from "../../../styles/AnimalItem.module.css";
const Thumbnail = () => {
  return (
    <div className={s.thumbnail}>
      <div className={s.item}>
        <img />
        <div className={s.content}>
          <div className={s.title}> 'item.name'</div>
          <div className={s.des}> Description</div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
