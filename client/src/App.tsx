import "./App.css";
import Body from "./component/Body/Body";
import Navbar from "./component/Header/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="mb-5">
        <Navbar />
      </div>
      <main>
        {" "}
        <Outlet />
      </main>

      {/* <div><SearchYourCity /></div> */}
      {/* <div ><DatePicker /></div> */}
      <Body />
    </>
  );
}

export default App;
