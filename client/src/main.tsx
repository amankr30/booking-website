import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Showpage from "./component/ShowDetails/Showpage.tsx";
import Login from "./component/Auth/Login.tsx";
import Body from "./component/Body/Body.tsx";
import Error from "./component/Error/Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/showpage",
        element: <Showpage />
      },
      {
        path: "/login",
        element: <Login />
      }
    ],
    errorElement: <Error />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
