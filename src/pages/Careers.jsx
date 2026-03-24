import React from "react";

import portfel from "../img/porfel.png";
import { Search } from "@boxicons/react";

import mobileIcon from "../img/mobileIcon.svg";
import webIcon from "../img/webIcon.svg";
import bagIcon from "../img/bagIcon.svg";
import appIcon from "../img/appIcon.svg";

import CardVac from "../Components/CardVac";

const Careers = () => {
  const careerList = [
    {
      img: webIcon,
      header: "Web Designer",
      selList: ["45,000", "60,000"],
      exp: 1,
      deadLine: "30/09/2025",
      text: "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.",
    },
    {
      img: mobileIcon,
      header: "Mobile App Developer",
      selList: ["55,000", "75,000"],
      exp: 2,
      deadLine: "15/10/2025",
      text: "Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.",
    },

    {
      img: appIcon,
      header: "Digital Marketing Specialist",
      selList: ["50,000", "65,000"],
      exp: 3,
      deadLine: "20/11/2025",
      text: "Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.",
    },
    {
      img: bagIcon,
      header: "Project Manager",
      selList: ["60,000", "80,000"],
      exp: 5,
      deadLine: "5/12/2025",
      text: "Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile project management methodologies.",
    },
  ];
  return (
    <div className="overflow-x-hidden">
      <div className="container1 section px-[40px] rounded-[20px] relative bg-[rgb(20,20,20)] flex justify-between items-stretch">
        <div className="bg-[url('./src/img/Group24.png')] absolute top-0 w-full bottom-0 z-10"></div>

        <div className="block bg-[url('./src/img/backVec1.png')] barlow flex flex-col gap-[30px] items-start justify-center">
          <div className="font-bold text-[40px]">Build the Future with Us</div>
          <div className="max-w-[567px] text-[#ccc] font-[400] text-[16px]">
            We’re a team of builders, thinkers, and explorers using AI, machine
            learning, and blockchain to solve meaningful problems.
          </div>
          <button className="bg-[#0A84FF] p-[8px_32px] rounded-[10px]">
            Explore Open Positions
          </button>
        </div>
        <img
          src={portfel}
          className="w-[270px] rotate-[11.6deg] m-[20px_40px]"
        />
      </div>
      <div className="miniContainer barlow text-[#ccc] w-full bg-[#0B0B0B] p-[40px_60px] mt-[60px] text-[16px] font-[400] flex gap-3 justify-between">
        <select className="w-full bg-[#191919] p-[10px] rounded-[100px]">
          <option value="all">Departmens</option>
        </select>
        <select className="w-full bg-[#191919] p-[10px] rounded-[100px]">
          <option value="all">Experience</option>
        </select>
        <select className="w-full bg-[#191919] p-[10px] rounded-[100px]">
          <option value="all">Workplace Type</option>
        </select>
        <select className="w-full bg-[#191919] p-[10px] rounded-[100px]">
          <option value="all">Job Type</option>
        </select>
        <div className="bg-[#191919] flex w-[calc(100%+30px)] relative rounded-[100px] p-[10px_20px] i">
          <input type="text" className="" placeholder="Search by keywords..." />
          <button className="bg-[#459CF3] rounded-[50px] m-[10px] absolute right-0 bottom-0 top-0">
            <Search className="p-1" />
          </button>
        </div>
      </div>

      <div className="container2 section barlow mt-[120px]">
        <div className="flex justify-center text-[25px] font-bold py-[40px]">
          Open Positions
        </div>
        <div className="grid grid-cols-2 gap-[20px] max-w-[1266px] m-[0_auto]">
          {careerList.map((e, i) => {
            return <CardVac key={i} {...e} />;
          })}
        </div>
      </div>
      <div className="container3 barlow mt-[80px] mb-[50px]">
        <div className="section flex flex-col items-center gap-[40px]  justify-between py-[20px] bg-[url('./src/img/backCareer.png')] rounded-[64px] shadow-[2px_4px_8px_#FFFFFF40]">
          <div className="font-medium text-[56px]">Ready to discuss</div>
          <div>
            your product needs with
            <span className="text-[#0A84FF] font-[600] text-[20px]">
              {" "}
              Catalyst Analytic{" "}
            </span>{" "}
            experts?
          </div>

          <button className="bg-[#0A84FF] p-[8px_64px] rounded-[15px] text-center">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
