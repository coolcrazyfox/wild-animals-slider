import React from "react";
import style from "../../styles/Thumbnail.module.css";

const Thumbnail = ({ card, onClickCard, newId, onChangeMainCar }) => {
  const [imgIndex, setImgIndex] = React.useState(newId);
  const handleCardChange = () => {
    setImgIndex(card.id);
    onClickCard(card.id);
    onChangeMainCar(card.id);
  };
  return (
    <>
      <div className={style.item} onClick={handleCardChange}>
        <img className={style.img} src={card.images} />
        <div className={style.content}>
          <div className={style.title}>
            {" "}
            {card.name}-{imgIndex}
          </div>
          <div className={style.des}> Description {card.id}</div>
        </div>
      </div>
    </>
  );
};

export default Thumbnail;
