import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../containers/login/login";
import Home from "../containers/home/home";
import AboutUs from "../containers/about-us/about-us";
import ContactUs from "../containers/contact-us/contact-us";
import PrivacyPolicy from "../containers/privacy-policy/privacy-policy";
import UnauthLayout from "../layout/unauth-layout";

const router = createBrowserRouter([
  {
    element: <UnauthLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "privacypolicy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
