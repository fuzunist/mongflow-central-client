import { createBrowserRouter } from "react-router-dom";
// import Root from './Root'
import NotFound from "../pages/not-found";
import Root from "./Root";

//layouts
import AuthLayout from "../layouts/AuthLayout";

import Welcome from "../pages/Welcome";
import Login from "../pages/Login";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "welcome",
        element: <Welcome />,
      },
    ],
  },

    {
      path: "*",
      element: <NotFound />,
    },
]);

export default routes;
