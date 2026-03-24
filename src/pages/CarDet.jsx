import React from "react";

import CardVac from "../Components/CardVac";

import webIcon from "../img/webIcon.svg";
import mobileIcon from "../img/mobileIcon.svg";
import bagIcon from "../img/bagIcon.svg";
import appIcon from "../img/appIcon.svg";

const CarDet = () => {
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

  const obj = {
    img: webIcon,
    header: "Web Designer",
    selList: ["45,000", "60,000"],
    exp: 1,
    deadLine: "30/09/2025",
    text: "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.",
  };
  return (
    <div className="barlow">
      <div className="container1 bg-[url('./src/img/carDetIcon.png')] relative flex flex-col p-[40px_60px] justify-center items-center gap-[40px]">
        <div className="bg-[#4f4e4e7d] absolute w-full z-10 left-0 top-0 bottom-0"></div>
        <div className="z-20 text-[64px] font-bold">WEB DESIGNER</div>
        <div className="z-20 bg-[#0A84FF] p-[15px_64px] text-center text-[20px] font-[400] rounded-[12px]">
          Apply Now
        </div>
      </div>
      <div className="section">
        <div className="container2 mt-[40px] flex items-start justify-between gap-[30px]">
          <div className="block1 w-full flex flex-col gap-3 p-[0_20px_10px]">
            <div className="miniBlock1 flex flex-col gap-[30px] bg-[#1A1A1A] rounded-[12px] p-[32px]">
              <div className="flex flex-col gap-3">
                <div className="text-[24px] font-[500]">
                  About this position
                </div>
                <div className="flex flex-col gap-[30px]">
                  <div className="text-[16px] max-w-[744px] text-[#ccc] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam ipsa eligendi adipisci quaerat? Aperiam vero harum
                    voluptatum natus voluptatibus consectetur neque tenetur
                    officia veritatis temporibus et sunt, rerum saepe ipsa.
                  </div>
                  <div className="text-[16px] max-w-[744px] text-[#ccc] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam ipsa eligendi adipisci quaerat? Aperiam vero harum
                    voluptatum natus voluptatibus consectetur neque tenetur
                    officia veritatis temporibus et sunt, rerum saepe ipsa.
                  </div>
                  <div className="text-[16px] max-w-[744px] text-[#ccc] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam ipsa eligendi adipisci quaerat? Aperiam vero harum
                    voluptatum natus voluptatibus consectetur neque tenetur
                    officia veritatis temporibus et sunt, rerum saepe ipsa.
                  </div>
                </div>
                <div>
                  <div className="text-[24px] font-[500]">RESPONSIBILITIES</div>
                  <div>
                    <ul className="list-disc ml-[20px] marker:text-blue-500 text-[#ccc] ">
                      <li className="max-w-[744px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium sed rerum doloremque aliquid, minus iusto,
                        quasi sint nulla, voluptatum inventore unde cupiditate
                        dolores perspiciatis tempora? Mollitia laboriosam
                        voluptas culpa alias.
                      </li>
                      <li className="max-w-[744px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium sed rerum doloremque aliquid, minus iusto,
                        quasi sint nulla, voluptatum inventore unde cupiditate
                        dolores perspiciatis tempora? Mollitia laboriosam
                        voluptas culpa alias.
                      </li>
                      <li className="max-w-[744px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium sed rerum doloremque aliquid, minus iusto,
                        quasi sint nulla, voluptatum inventore unde cupiditate
                        dolores perspiciatis tempora? Mollitia laboriosam
                        voluptas culpa alias.
                      </li>
                      <li className="max-w-[744px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium sed rerum doloremque aliquid, minus iusto,
                        quasi sint nulla, voluptatum inventore unde cupiditate
                        dolores perspiciatis tempora? Mollitia laboriosam
                        voluptas culpa alias.
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="text-[24px] font-[500]">REQUIREMENTS</div>
                  <div>
                    <ul className="list-disc ml-[20px] marker:text-blue-500 text-[#ccc] ">
                      <li className="max-w-[744px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium sed rerum doloremque aliquid, minus iusto,
                        quasi sint nulla, voluptatum inventore unde cupiditate
                        dolores perspiciatis tempora? Mollitia laboriosam
                        voluptas culpa alias.
                      </li>
                      <li className="max-w-[744px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium sed rerum doloremque aliquid, minus iusto,
                        quasi sint nulla, voluptatum inventore unde cupiditate
                        dolores perspiciatis tempora? Mollitia laboriosam
                        voluptas culpa alias.
                      </li>
                      <li className="max-w-[744px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium sed rerum doloremque aliquid, minus iusto,
                        quasi sint nulla, voluptatum inventore unde cupiditate
                        dolores perspiciatis tempora? Mollitia laboriosam
                        voluptas culpa alias.
                      </li>
                      <li className="max-w-[744px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium sed rerum doloremque aliquid, minus iusto,
                        quasi sint nulla, voluptatum inventore unde cupiditate
                        dolores perspiciatis tempora? Mollitia laboriosam
                        voluptas culpa alias.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-[24px] font-[500]">BENEFITS</div>
                  <div className="flex flex-col gap-[30px]">
                    <div className="text-[16px] max-w-[744px] text-[#ccc] font-[400]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quibusdam ipsa eligendi adipisci quaerat? Aperiam vero
                      harum voluptatum natus voluptatibus consectetur neque
                      tenetur officia veritatis temporibus et sunt, rerum saepe
                      ipsa.
                    </div>
                    <div className="text-[16px] max-w-[744px] text-[#ccc] font-[400]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quibusdam ipsa eligendi adipisci quaerat? Aperiam vero
                      harum voluptatum natus voluptatibus consectetur neque
                      tenetur officia veritatis temporibus et sunt, rerum saepe
                      ipsa.
                    </div>
                    <div className="text-[16px] max-w-[744px] text-[#ccc] font-[400]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quibusdam ipsa eligendi adipisci quaerat? Aperiam vero
                      harum voluptatum natus voluptatibus consectetur neque
                      tenetur officia veritatis temporibus et sunt, rerum saepe
                      ipsa.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="miniBlock2 bg-[#1A1A1A] rounded-[12px] p-[32px]">
              <div className="text-[24px] font-[500]">Apply Now</div>
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
                <textarea className="outline-none bg-[#FFFFFF0D] rounded-[5px] p-[12px_14px]">
                  Application Submissioncwe
                </textarea>
                <button className="bg-[#0A84FF] p-[10px_14px] rounded-[5px]">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
          <div className="block2 max-w-[400px]">
            <CardVac {...obj} />
          </div>
        </div>
        <div className="container3 mt-[40px]">
          <div className="font-[600] text-[36px]">Similar Positions</div>
          <div className="grid grid-cols-2 gap-[20px]">
            {careerList.map((e, i) => {
              return <CardVac key={i} {...e} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDet;
