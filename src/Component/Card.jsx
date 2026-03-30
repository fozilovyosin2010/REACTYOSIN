import React, { useMemo, useState } from "react";

const Card = React.memo(({ onClick, counter }) => {
  console.log("child renders");

  const cntCard = useMemo(() => {
    console.log("counter is changed");

    return counter;
  }, [counter]);

  return (
    <div className="flex gap-3">
      <div>cnt: {cntCard}</div>
      <div onClick={onClick}>Card</div>
    </div>
  );
});

export default Card;
