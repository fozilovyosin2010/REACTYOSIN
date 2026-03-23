import React from "react";

const Card = ({ img, header, text }) => {
  return (
    <div className="barlow bg-[#141414] rounded-[20px] p-[20px] flex flex-col justify-center items-center">
      <img src={img} className="w-[210px]" />
      <div className="font-medium text-[#fff]">{header}</div>
      <div className="text-center max-w-[250px] text-[#ccc] font-[500]">
        {text}
      </div>
    </div>
  );
};

export default Card;
