import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Showpage from "./component/ShowDetails/Showpage.tsx";
import Login from "./component/Auth/Login.tsx";
import Body from "./component/Body/Body.tsx";
import Error from "./component/Error/Error.tsx";
import Signup from "./component/Auth/Signup.tsx";
import Admin from "./component/admin/Admin.tsx";
import Showpages from "./component/ShowDetails/Showpages.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/showpage",
        element: <Showpages />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
