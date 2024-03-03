import React from "react";
import style from "../../styles/Thumbnail.module.css";

const Thumbnail = ({ card }) => {
  const [imgIndex, setImgIndex] = React.useState(0);

  return (
    <>
      <div className={style.item} onClick={() => setImgIndex(imgIndex + 1)}>
        <img className={style.img} src={card.images} />
        <div className={style.content}>
          <div className={style.title}>
            {" "}
            {card.name}
            {card.id}-{imgIndex}
          </div>
          <div className={style.des}> Description {card.id}</div>
        </div>
      </div>
    </>
  );
};

export default Thumbnail;
