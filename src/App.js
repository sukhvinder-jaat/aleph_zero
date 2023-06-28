import logo from "./logo.svg";
import "./App.css";
import "./root.css";
import { MyFooter } from "./components/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import { New } from "./components/New";

function App() {
  return (
    <div className="">
      {/* <New /> */}
      <MyNav />
      <MyFooter />
    </div>
  );
}

export default App;
