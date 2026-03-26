import React from "react";
import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <div className="nav mb-[40px]">
        <Link className="hover:underline" to={"/"}>
          Home
        </Link>
        <Link className="hover:underline" to={"/services"}>
          Services
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
