import React from "react";
import { Link, Outlet } from "react-router";

import Logo from "../img/Logo.png";

import linkedIn from "../img/linked.png";
import faceB from "../img/faceB.svg";
import twitter from "../img/twitter.svg";

import locationIcon from "../img/Subtract (1).svg";
import mailIcon from "../img/Subtract.svg";
import phoneIcon from "../img/phoneIcon.svg";
const Layout = () => {
  return (
    <div>
      <div className="header bg-black text-[#fff] p-[10px_20px]">
        <div className="section flex justify-between items-center ">
          <div className="logo">
            <img src={Logo} className="w-[148px]" />
          </div>
          <div className="flex gap-2 barlow font-light">
            <Link to={"/"}>Home</Link>
            <Link to={"services"}>Services</Link>
            <Link to={"careers"}>Careers</Link>
            <Link to={"career_details"}>Career Details</Link>
            <Link to={"Contact"}>Contact</Link>
          </div>
          <button className="p-[8px_32px] text-[16px] bg-blue-600 rounded-md barlow font-medium">
            Contact Us
          </button>
        </div>
      </div>
      <div className="main min-h-screen bg-black pb-[40px] text-[#fff] p-[10px_20px]">
        <Outlet />
      </div>
      <div className="footer border-t border-t-[#ccc] bg-black text-[#fff] p-[10px_20px]">
        <div className="section flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <img src={Logo} className="logo w-[148px]" />
            <div className="flex justify-between gap-[30px] barlow font-medium">
              <nav>Home</nav>
              <nav>Services</nav>
              <nav>Porfolio</nav>
              <nav>About Us</nav>
              <nav>Careers</nav>
            </div>
            <div className="flex gap-[30px] border p-[8px_15px] border-[#ccc] rounded-md">
              <button className="p-[10px] bg-linear-to-t from-[black] to-[#1d1d1d] rounded-md w-[50px] h-[50px] flex justify-center items-center">
                <img src={faceB} alt="" className="w-[20px]" />
              </button>
              <button className="p-[10px] bg-linear-to-t from-[black] to-[#1d1d1d] rounded-md w-[50px] h-[50px] flex justify-center items-center">
                <img src={twitter} alt="" className="w-[20px]" />
              </button>
              <button className="p-[10px] bg-linear-to-t from-[black] to-[#1d1d1d] rounded-md w-[50px] h-[50px] flex justify-center items-center">
                <img src={linkedIn} alt="" className="w-[20px]" />
              </button>
            </div>
          </div>
          <div className="adress flex justify-between items-center">
            <div className="flex gap-4 barlow font-[400]">
              <div className="flex items-center gap-2">
                <img className="w-[20px]" src={mailIcon} />
                contact@catalystanalytics.io
              </div>
              <div className="flex items-center gap-2">
                <img className="w-[20px]" src={phoneIcon} />
                +1 (469) 712-4672
              </div>
              <div className="flex items-center gap-2">
                <img className="w-[20px]" src={locationIcon} />
                5511 Parkcrest Dr, Suite 103, Austin, TX 78731
              </div>
            </div>
            <div className="flex gap-4 text-[#ccc] barlow font-mono">
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
            </div>
          </div>
          <div className="copyright flex justify-center text-[#ccc] barlow font-mono text-[14px]">
            © 2025 Catalyst Analytics. All rights reserved.
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Layout;
