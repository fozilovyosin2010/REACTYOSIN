import React from "react";

import rightArrow from "../img/vRight.svg";

const CardServ = ({ img, header, text, list }) => {
  return (
    <div className="barlow bg-[#141414] rounded-[15px] flex flex-col gap-[15px] items-center p-[20px_40px]">
      <img src={img} alt="" className="w-[223px]" />
      <div className="font-medium text-[18px] max-w-[487px]">{header}</div>
      <div className="font-[400] text-[16px] text-[#ccc] max-w-[487px] text-center">
        {text}
      </div>
      <ul className="grid grid-cols-2 gap-[15px] text-[12px] list-disc marker:text-blue-500 max-w-[487px] text-[#ccc]">
        {list.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
      <button className="rounded-[100px] flex gap-2 p-[10px] border-blue-500 border items-center">
        <img
          src={rightArrow}
          className="bg-[#459CF3] p-[10px_20px] rounded-[135px]"
        />
        <div>Book a Call</div>
      </button>
    </div>
  );
};

export default CardServ;
