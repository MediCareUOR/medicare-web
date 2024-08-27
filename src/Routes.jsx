import React from "react";
import { useRoutes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

function Routes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/contact-us", element: <ContactUs /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
}

export default Routes;
