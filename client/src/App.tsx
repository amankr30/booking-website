import "./App.css";
import Navbar from "./component/Header/Navbar";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <div className="w-full">
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
