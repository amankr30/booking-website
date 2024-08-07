import "./App.css";
import Body from "./component/Body/Body";
import Navbar from "./component/Header/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="mb-5 w-full">
        <Navbar />
      </div>
      <main>
        {" "}
        <Outlet />
      </main>
      <Body />
    </>
  );
}

export default App;
