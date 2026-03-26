import React, { lazy, Suspense } from "react";

import Layout from "./Layout/Layout";

import NotFound from "./pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        // first page to show in web app
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/services",
          element: (
            <Suspense fallback={<div>Loading</div>}>
              <Services />
            </Suspense>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
