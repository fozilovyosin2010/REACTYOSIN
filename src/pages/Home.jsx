import React from "react";

import img1 from "../img/robotImg.png";

import avatar1 from "../img/avatar1.png";
import avatar2 from "../img/avatar2.png";
import avatar3 from "../img/avatar3.png";
const Home = () => {
  return (
    <div className="section">
      <div className="container1 flex justify-between items-center bg-[url('./src/img/Frame.png')]">
        <div className="block1 flex flex-col gap-3 items-start barlow">
          <div className="max-w-[500px] text-[50px] font-bold">
            Transforming Data into
            <span className="bg-[#0A84FF] ml-2 p-[5px_20px] rounded-[15px] text-[#fff]">
              Decisions
            </span>
          </div>
          <div className="max-w-[400px] font-[500] text-[#FFFFFFCC]">
            Leverage the power of machine learning and AI to unlock insights and
            drive business growth
          </div>
          <button className="bg-[#0A84FF] p-[8px_32px] font-medium text-[14px] rounded-[10px]">
            Book a Meeting
          </button>
          <div className="flex justify-between gap-2">
            <div className="overflow-hidden flex px-[10px] -space-x-2">
              <img src={avatar1} className="inline-block" />
              <img src={avatar2} className="inline-block" />
              <img src={avatar3} className="inline-block" />
            </div>
            <div className="text-[#ccc]">
              Over 100+ clients have worked with us
            </div>
          </div>
        </div>
        <img src={img1} alt="" className="w-[500px]" />
      </div>
    </div>
  );
};

export default Home;
