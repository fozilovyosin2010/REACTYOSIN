import React from "react";

import messageIcon from "../img/messageIcon.png";
import { PaperPlane } from "@boxicons/react";

import locationIcon from "../img/Subtract (1).svg";
import mailIcon from "../img/Subtract.svg";
import phoneIcon from "../img/phoneIcon.svg";

const Contact = () => {
  return (
    <div className="section barlow">
      <div className="container1 relative bg-[#141414] rounded-[48px] p-[0_40px] flex justify-between items-center">
        <div className="bg-[url('./src/img/Group24.png')] absolute top-0 w-full bottom-0 z-10"></div>

        <div className="block1 bg-[url('./src/img/backVec1.png')] flex flex-col gap-[30px] items-start">
          <div className="text-[40px] font-[700]">Contact Us</div>
          <div className="text-[16px] font-[400] text-[#ccc] max-w-[567px]">
            Get in touch with our team to discuss how we can help transform your
            business. We’re here to help.
          </div>
          <button className="bg-[#0A84FF] p-[14px_60px] rounded-[10px]">
            Get In Touch Now
          </button>
        </div>
        <img src={messageIcon} className="block2 w-[364px]" />
      </div>
      <div className="container2 flex justify-between items-stretch mt-[40px] gap-[30px]">
        <div className="block1 w-full bg-[#141414] p-[20px_40px] rounded-[20px]">
          <div className="text-[20px] font-[700] py-[20px]">
            Send Us a Message
          </div>
          <form className="flex flex-col gap-[40px] pt-[20px]">
            <div className="flex gap-3">
              <input
                className="outline-none w-full bg-[#FFFFFF0D] rounded-[5px] p-[12px_14px]"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="outline-none w-full bg-[#FFFFFF0D] rounded-[5px] p-[12px_14px]"
                type="text"
                placeholder="Last Name*"
              />
            </div>
            <input
              className="outline-none w-full bg-[#FFFFFF0D] rounded-[5px] p-[12px_14px]"
              type="text"
              placeholder="Company*"
            />
            <input
              className="outline-none bg-[#FFFFFF0D] rounded-[5px] p-[12px_14px]"
              type="email"
              placeholder="Email*"
            />
            <input
              className="outline-none bg-[#FFFFFF0D] rounded-[5px] p-[12px_14px]"
              type="text"
              placeholder="Headline(optinal)*"
            />
            <input
              className="outline-none bg-[#FFFFFF0D] rounded-[5px] p-[12px_14px]"
              type="number"
              placeholder="Phone Number*"
            />
            <textarea
              defaultValue={"Application Submissioncwe"}
              className="outline-none bg-[#FFFFFF0D] rounded-[5px] p-[12px_14px]"
            ></textarea>
            <button className="bg-[#0A84FF] p-[10px_14px] rounded-[5px] flex justify-center gap-1">
              Send <PaperPlane />
            </button>
          </form>
        </div>
        <div className="block2 w-full flex flex-col justify-between gap-3">
          <div className="miniBlock1 p-[32px_40px] rounded-[24px] gap-[30px] flex flex-col bg-[#141414]">
            <div className="text-[20px] font-[700] py-[20px]">
              Contact Information
            </div>
            <div className="flex items-start gap-2">
              <img className="w-[20px]" src={mailIcon} />
              <div>
                <div className="text-[20px] font-[700]">Email</div>
                <div className="text-[16px] text-[#ccc] font-[400]">
                  contact@catalystanalytics.io
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <img className="w-[20px]" src={phoneIcon} />
              <div>
                <div className="text-[20px] font-[700]">Phone</div>
                <div className="text-[16px] text-[#ccc] font-[400]">
                  +1 (469) 712-4672
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <img className="w-[20px]" src={locationIcon} />
              <div>
                <div className="text-[20px] font-[700]">Office</div>
                <div className="text-[16px] text-[#ccc] font-[400] max-w-[176px]">
                  5511 Parkcrest Dr, Suite 103, Austin, TX 78731
                </div>
              </div>
            </div>
          </div>
          <div className="miniBlock2 flex flex-col bg-[#141414] rounded-[24px] gap-[15px] p-[20px_40px]">
            <div className="text-[20px] font-[700] py-[20px]">
              Contact Information
            </div>
            <div className="max-w-[559px]">
              Want to discuss your project in detail? Schedule a free 30-minute
              consultation with our team of experts. We'll help you understand
              how our solutions can benefit your business.
            </div>
            <button className="bg-[#0A84FF] p-[10px_14px] rounded-[5px] gap-1">
              Book a Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
