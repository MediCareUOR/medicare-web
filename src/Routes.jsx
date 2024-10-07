import React from "react";
import { useRoutes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Ph_SignUp from "./pages/Ph_SignUp";

function Routes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/contact-us", element: <ContactUs /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/about", element: <About /> },
    { path: "/faq", element: <FAQ /> },
    { path: "/ph-signup", element: <Ph_SignUp /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
}

export default Routes;
