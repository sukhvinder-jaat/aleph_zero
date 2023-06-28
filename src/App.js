import logo from "./logo.svg";
import "./App.css";
import "./root.css";
import { MyFooter } from "./components/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";

function App() {
  return (
    <div className="">
      <MyNav />
      <MyFooter />
    </div>
  );
}

export default App;
