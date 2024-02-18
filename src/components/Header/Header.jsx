import React from "react";
import s from "../../styles/Header.module.css";
const Header = () => {
  return (
    <div className={s.header_container}>
      <nav>
        <a className={s.li}>Home</a>
        <a className={s.li}>Contact</a>
        <a className={s.li}>Info</a>
      </nav>
    </div>
  );
};

export default Header;
