import React from "react";

import img1 from "../img/robotImg.png";

import avatar1 from "../img/avatar1.png";
import avatar2 from "../img/avatar2.png";
import avatar3 from "../img/avatar3.png";

import zoomIcon from "../img/zoomIcon.svg";
import zapierIcon from "../img/zapierIcon.svg";
import amazonIcon from "../img/amazonIcon.svg";

import adobeIcon from "../img/adobeIcon.svg";
import slackIcon from "../img/slackIcon.svg";
import spotifyIcon from "../img/spotifyIcon.svg";

import serverIcon from "../img/serverIcon.png";
import analIcon from "../img/analIcon.png";
import aiIcon from "../img/aiIcon.png";
import Card from "../Components/Card";
import Accordion from "../Components/Accordion";

const miniConList = [
  zapierIcon,
  spotifyIcon,
  zoomIcon,
  slackIcon,
  amazonIcon,
  adobeIcon,
];

const serviceList = [
  {
    img: analIcon,
    header: "Predictive Analytics",
    text: "Forecast trends and make data-driven decisions with our advanced ML models.",
  },
  {
    img: aiIcon,
    header: "AI Consulting",
    text: "Expert guidance on implementing AI solutions for your business needs.",
  },
  {
    img: serverIcon,
    header: "Data Engineering",
    text: "Build robust data pipelines and infrastructure for ML operations.",
  },
];

const accordionList = [
  {
    id: "01",
    header: "What services does Catalyst Analytics provide?",
    text: "Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    id: "02",
    header: "What services does Catalyst Analytics provide?",
    text: "Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    id: "03",
    header: "What services does Catalyst Analytics provide?",
    text: "Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    id: "04",
    header: "What services does Catalyst Analytics provide?",
    text: "Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    id: "05",
    header: "What services does Catalyst Analytics provide?",
    text: "Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
];
const Home = () => {
  return (
    <div className="section">
      <div className="container1 relative bg-[url('./src/img/Frame.png')]">
        <div className="block1 flex justify-between items-center">
          <div className="flex flex-col gap-3 items-start barlow">
            <div className="max-w-[500px] text-[50px] font-bold">
              Transforming Data into
              <span className="bg-[#0A84FF] ml-2 p-[5px_20px] rounded-[15px] text-[#fff]">
                Decisions
              </span>
            </div>
            <div className="max-w-[400px] font-[500] text-[#FFFFFFCC]">
              Leverage the power of machine learning and AI to unlock insights
              and drive business growth
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
        <div className="block2 absolute bottom-[-50px] left-0 right-0 items-center justify-around border-y border-y-transparent linear_b p-[30px_10px] flex">
          {miniConList.map((e, i) => {
            return <img key={i} src={e} className="w-[80px]" />;
          })}
        </div>
      </div>
      <div className="container2 mt-[190px] flex flex-col gap-4">
        <div className="flex justify-center items-center barlow font-medium text-[20px] ">
          <div className="max-w-[500px] text-center">
            Our Ultimate Set of Services for Your Ideas Implementation
          </div>
        </div>
        {/* card  */}
        <div className="flex justify-between">
          {serviceList.map((e, i) => {
            return <Card key={i} {...e} />;
          })}
        </div>
      </div>
      <div className="container3 m-[100px_auto_0] barlow max-w-[700px]">
        <div className="font-bold text-[28px] flex justify-center">
          Frequently Asked Questions
        </div>
        <div className="flex flex-col gap-3">
          {accordionList.map((e) => {
            return <Accordion key={e.id} {...e} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
