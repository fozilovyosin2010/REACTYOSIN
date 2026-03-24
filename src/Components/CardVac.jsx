import React from "react";

const CardVac = ({ img, header, selList, exp, deadLine, text }) => {
  return (
    <div className="barlow bg-[#1A1A1A] p-[50px] rounded-[14px]">
      <div className="flex flex-col gap-[50px]">
        <div className="flex items-center gap-3">
          <img
            src={img}
            alt=""
            className="bg-[#1F1F1F] rounded-[5px] p-[15px] border border-[#333333] w-[60px] h-[60px]"
          />
          <div className="text-18px font-[500] text-[30px]">
            {header?.toUpperCase()}
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          <div className="p-1 bg-[#1F1F1F] rounded-[45px] inline-block p-2">
            <div className="flex gap-[25px]">
              <span className="text-[#ccc]">Salary</span>
              <ul className="list-disc marker:text-blue-500">
                <li>
                  {`$${selList[0]} - $${selList[1]}`}
                  <span className="text-[#ccc]"> per year</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-1 bg-[#1F1F1F] rounded-[45px] inline-block p-2">
            <div className="flex gap-[25px]">
              <div className="text-[#ccc]">Experience</div>
              <ul className="list-disc marker:text-blue-500">
                <li>
                  {`${exp}`} <span className="text-[#ccc]">+year</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-1 bg-[#1F1F1F] rounded-[45px] inline-block p-2">
            <div className="flex gap-[25px]">
              <div className="text-[#ccc]">Deadline</div>
              <ul className="list-disc marker:text-blue-500">
                <li>{`${deadLine}`}</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>Skills</div>
          <div className="">{text}</div>
        </div>
        <button className="bg-[#0A84FF] text-center p-[18px_24px] rounded-[12px]">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default CardVac;
