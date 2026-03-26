import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.css";

// import required modules
import { Pagination } from "swiper/modules";

const App = () => {
  // const [check, setCheck] = useState(false);

  // useRef(element)
  // const checkRef = useRef();

  // function handleCheck() {
  //   setCheck(checkRef.current.type === "password");
  // }

  const products = [
    { name: "Shampoo", price: 20 },
    { name: "Shampoo2", price: 20 },
    { name: "ice-cream", price: 3 },
    { name: "potatoes", price: 10 },
  ];
  return (
    <div>
      {/* <input
        type={check ? "text" : "password"}
        ref={checkRef}
        className="border"
      />
      <button onClick={handleCheck}>Click</button> */}

      <Swiper
        loop={true}
        spaceBetween={30}
        // slice amount
        slidesPerView={3}
        // for responsive design
        breakpoints={{
          425: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((e, i) => {
          return (
            <SwiperSlide>
              <div
                key={i}
                className="border w-full h-full flex justify-center gap-3 items-center"
              >
                <div className="text-[40px] font-bold">{e.name}</div>
                <div className="text-[40px] font-bold">{e.price}$</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default App;
