import React from "react";
import { Link, Outlet } from "react-router";

import Logo from "../img/Logo.png";

import linkedIn from "../img/linked.png";
import faceB from "../img/faceB.svg";
import twitter from "../img/twitter.svg";

const Layout = () => {
  return (
    <div>
      <div className="header bg-black text-[#fff]">
        <div className="section flex justify-between items-center py-[10px]">
          <div className="logo">
            <img src={Logo} className="w-[148px]" />
          </div>
          <div className="flex gap-2">
            <Link to={"home"}>Home</Link>
            <Link to={"services"}>Services</Link>
            <Link to={"careers"}>Careers</Link>
            <Link to={"career_details"}>Career Details</Link>
            <Link to={"Contact"}>Contact</Link>
          </div>
          <button className="p-[8px_16px] bg-blue-600 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
      <div className="main section">
        <Outlet />
      </div>
      <div className="footer bg-black text-[#fff] py-[10px]">
        <div className="section">
          <div className="flex justify-between">
            <div className="logo">
              <img src={Logo} className="w-[148px]" />
            </div>
            <div className="flex justify-between gap-[30px]">
              <nav>Home</nav>
              <nav>Services</nav>
              <nav>Porfolio</nav>
              <nav>About Us</nav>
              <nav>Careers</nav>
            </div>
            <div className="flex gap-[30px] border p-[5px_8px] border-[#fff]">
              <button className="p-[10px] bg-[#ccc] rounded-md">
                <img src={faceB} alt="" className="w-[30px] h-[30px]" />
              </button>
              <button>
                <img src={twitter} alt="" />
              </button>
              <button>
                <img src={linkedIn} alt="" />
              </button>
            </div>
          </div>
          <div className="adress"></div>
          <div className="copyright"></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Layout;
