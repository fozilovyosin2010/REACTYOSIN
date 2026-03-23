import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/Services";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import CarDet from "./pages/CarDet";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        // first page to show in web app
        { index: true, element: <Home /> },
        { path: "/services", element: <Services /> },
        { path: "/careers", element: <Careers /> },
        { path: "/career_details", element: <CarDet /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
