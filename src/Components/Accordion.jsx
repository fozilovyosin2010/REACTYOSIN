import { Plus } from "@boxicons/react";
import React, { useEffect, useState } from "react";

const Accordion = ({ id, header, text }) => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setTimeout(() => {
      setOpen((e) => !e);
    }, 100);
  }

  return (
    <div className="bg-[#1E1E1E] rounded-[20px] p-[20px_40px] flex justify-between">
      <div className="w-[70px] h-[70px] bg-linear-to-t rounded-[10px] flex items-center justify-center font-medium from-[black] to-[#363636]">
        {id}
      </div>
      <div className="flex flex-col">
        <div className="flex gap-[30px]">
          <div className="text-[20px] font-medium py-[20px]">{header}</div>
          <button
            onClick={handleClick}
            className={`${open ? "rotate-45" : "rotate-0"} duration-500`}
          >
            <Plus />
          </button>
        </div>
        {open ? <div className="max-w-[380px]">{text}</div> : null}
      </div>
    </div>
  );
};

export default Accordion;
