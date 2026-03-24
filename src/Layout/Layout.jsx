import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="nav flex gap-3">
        <Link className="hover:underline" to={"/"}>
          Home
        </Link>
        <Link className="hover:underline" to={"about"}>
          About
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
