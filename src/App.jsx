import Carousel from "./components/Header/Carousel/Carousel";
import Header from "./components/Header/Header";
import s from "./styles/App.module.css";

function App() {
  return (
    <div className={s.App}>
      <Header />
      <Carousel />
      <div className={s.thumbnail}>
        <div className={s.item}>
          <img />
        </div>
      </div>
    </div>
  );
}

export default App;
