import { createBrowserRouter, Navigate, createHashRouter } from "react-router-dom";
// import Root from './Root'
import NotFound from "../pages/not-found";
import Root from "./Root";

//layouts
import AuthLayout from "../layouts/AuthLayout";

import Welcome from "../pages/Welcome";
import Login from "../pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" />,
  },
  {
    path: "*",
    element: <AuthLayout />,
    children: [
      {
        path: "auth/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
  
]);

export default routes;
