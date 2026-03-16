import React, { useEffect } from "react";

const Card = () => {
  useEffect(() => {
    console.log("mount");
    return () => console.log("unmount");
  }, []);
  return <div>Card</div>;
};

export default Card;
