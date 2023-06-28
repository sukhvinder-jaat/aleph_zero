import logo from "./logo.svg";
import "./App.css";
import "./root.css";
import { MyFooter } from "./components/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyHero from "./components/MyHero";
import FeaturedIn from "./components/FeaturedIn";
import "@splidejs/react-splide/css/sea-green";
import Build from "./components/Build";
import Time from "./components/Time";
import { AlphaBottom } from "./components/AlphaBottom";

function App() {
  return (
    <div className="bg_body">
      <div className="min_100vh d-flex flex-column">
        <MyNav />
        <MyHero />
      </div>
      <FeaturedIn />
      <Build />
      <Time />
      <MyFooter />
      <AlphaBottom />
    </div>
  );
}

export default App;
