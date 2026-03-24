import React from "react";

import mechIcon from "../img/mechIcon.png";

import blockChIcon from "../img/blockChIcon.png";
import brainIcon from "../img/brainIcon.png";
import cloudIcon from "../img/cloudIcon.png";
import compIcon from "../img/compIcon.png";
import graphIcon from "../img/graphIcon.png";
import markIcon from "../img/markIcon.png";
import CardServ from "../Components/CardServ";

const Services = () => {
  const servicesList = [
    {
      img: brainIcon,
      header: "Machine Learning Solutions",
      text: "Custom ML models designed and optimized for your specific business challenges, leveraging cutting-edge deep learning techniques.",
      list: [
        "Deep learning model development",
        "Neural network architecture design",
        "Computer vision solutions",
        "Model optimization and scaling",
        "Natural language processing",
      ],
    },
    {
      img: blockChIcon,
      header: "Blockchain Development",
      text: "End-to-end blockchain solutions from smart contract development to decentralized application architecture.",
      list: [
        "Deep learning model development",
        "Neural network architecture design",
        "Computer vision solutions",
        "Model optimization and scaling",
        "Natural language processing",
      ],
    },
    {
      img: markIcon,
      header: "Algorithmic Trading",
      text: "Advanced trading algorithms and systems leveraging ML for market analysis and automated execution.",
      list: [
        "Deep learning model development",
        "Neural network architecture design",
        "Computer vision solutions",
        "Model optimization and scaling",
        "Natural language processing",
      ],
    },
    {
      img: compIcon,
      header: "Data Engineering",
      text: "Build robust data infrastructure that scales with your business needs using modern data engineering practices.",
      list: [
        "Deep learning model development",
        "Neural network architecture design",
        "Computer vision solutions",
        "Model optimization and scaling",
        "Natural language processing",
      ],
    },
    {
      img: graphIcon,
      header: "Predictive Analytics",
      text: "Transform your data into actionable insights with our advanced predictive modeling and forecasting solutions.",
      list: [
        "Deep learning model development",
        "Neural network architecture design",
        "Computer vision solutions",
        "Model optimization and scaling",
        "Natural language processing",
      ],
    },
    {
      img: cloudIcon,
      header: "MLOps & Infrastructure",
      text: "Enterprise-grade infrastructure for deploying and managing ML models in production environments.",
      list: [
        "Deep learning model development",
        "Neural network architecture design",
        "Computer vision solutions",
        "Model optimization and scaling",
        "Natural language processing",
      ],
    },
  ];
  return (
    <div className="section">
      <div className="container1  flex justify-between items-center relative bg-[rgb(20,20,20)] rounded-[20px] barlow">
        <div className="bg-[url('./src/img/Group24.png')] absolute top-0 w-full bottom-0 z-20"></div>
        <div className="block bg-[url('./src/img/backVec1.png')] bg-transparent z-10 p-[20px_40px]">
          <div className="text-[30px] font-bold">
            Our Comprehensive
            <span className="text-blue-600"> Digital Solutions</span>
          </div>
          <div className="max-w-[550px] text-[16px] text-[#ccc] font-[400]">
            At Catalyst Analytics, we offer a comprehensive suite of digital
            solutions designed to propel your business to new heights in the
            digital realm. With a team of skilled professionals, cutting-edge
            technologies, and a passion for innovation, we are committed to
            delivering exceptional results for every project we undertake. From
            captivating web design that leaves a lasting impression to seamless
            web development that ensures optimal functionality, we cover every
            aspect of your online presence.
          </div>
        </div>
        <img src={mechIcon} className="h-[321px]" />
      </div>
      <div className="container2 mt-[40px]">
        <div className="flex flex-col items-center barlow">
          <div className="font-bold">Our Services</div>
          <div className="text-[#ccc] font-[400]  text-center">
            Comprehensive AI, blockchain, and analytics solutions powered by
            deep expertise in machine learning and data engineering
          </div>
        </div>
        <div className="mt-[40px] grid grid-cols-2  gap-[55px] ">
          {servicesList.map((e, i) => {
            return <CardServ key={i} {...e} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
