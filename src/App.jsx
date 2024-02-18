import Carousel from "./components/Header/Carousel/Carousel";
import Header from "./components/Header/Header";
import s from "./styles/App.module.css";

function App() {
  return (
    <div className={s.App}>
      <Header />
      <Carousel />
    </div>
  );
}

export default App;
