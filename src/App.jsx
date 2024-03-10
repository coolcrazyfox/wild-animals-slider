import React, { useState } from "react";
import Carousel from "./components/Header/Carousel/Carousel";
import Header from "./components/Header/Header";
import Details from "./components/Test/Details";
import s from "./styles/App.module.css";

function App() {
  const [details, setDetails] = useState({
    title: "text",
    description: "History, guys",
    btnText: "Click",
  });
  return (
    <div className={s.App}>
      <Details details={details} setDetails={setDetails} />
    </div>
    //  <div className={s.App}>
    // <Header />
    // <Carousel />
    // </div>
  );
}

export default App;
