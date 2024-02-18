import React from "react";
import style from "../../styles/Thumbnail.module.css";

const Thumbnail = (item) => {
  return (
    <div className={style.thumbnail}>
      <div className={style.item}>
        <img />
        <div className={style.content}>
          <div className={style.title}> {item.name}</div>
          <div className={style.des}> Description</div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
