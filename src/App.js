import logo from "./logo.svg";
import "./App.css";
import "./root.css";
import { MyFooter } from "./components/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import { New } from "./components/New";
import { AlphaBottom } from "./components/AlphaBottom";

function App() {
  return (
    <div className="">
      {/* <New /> */}
      <MyNav />
      <MyFooter />
      <AlphaBottom />
    </div>
  );
}

export default App;
