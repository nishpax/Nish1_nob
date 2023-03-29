import * as React from "react";
import { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-router-dom";
import NavBar from "./NavBar/NavBar.js";
import Aboutus from "./AboutUs/AboutUs.js";
import Login from "./Login/Login.js";
import Registration from "./Registration/Registration.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
  },
  {
    path: "/Aboutus",
    element: <Aboutus />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Registration",
    element: <Registration />,
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
