import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";

const App = () => {
  return (
    <BrowserRouter>
      {/* another way to use router  (easy) */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            {/* sub page */}
            <Route path="service" element={<Service />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
