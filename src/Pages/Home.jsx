import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([
    { id: "1", name: "Shampoo", weight: "100g" },
    { id: "2", name: "Snack", weight: "700g" },
    { id: "3", name: "Pizza", weight: "1500g" },
  ]);

  const navigate = useNavigate();

  function handleNav(id) {
    // it is like Link(from react router). it is like for navigating to another function
    navigate(`product/${id}`);
  }

  return (
    <div>
      Home
      <div className="flex justify-between p-[10px_40px] cursor-pointer">
        {products.map((e) => {
          return (
            <div
              key={e.id}
              onClick={() => handleNav(e.id)}
              className="border p-[10px] w-[200px] rounded-[15px]"
            >
              <div>Name: {e.name}</div>
              <div>Weight {e.weight}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
