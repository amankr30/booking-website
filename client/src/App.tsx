import "./App.css";
import Navbar from "./component/Header/Navbar";
import { Outlet } from "react-router-dom";
import ShowPage from "./component/ShowDetails/Showpage";

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
      {/* <Body /> */}
      <ShowPage />
    </>
  );
}

export default App;
