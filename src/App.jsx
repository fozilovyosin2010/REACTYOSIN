import React, { useCallback, useEffect, useState } from "react";
import Card from "./Component/Card";

const App = () => {
  console.log("parent renders");

  // parent
  const [cnt, setCnt] = useState(0);

  // parent
  const [cnt2, setCnt2] = useState(0);

  // parent
  function hanldleInc() {
    setCnt((e) => e + 1);
  }
  // parent
  function hanldleInc2() {
    setCnt2((e) => e + 1);
  }

  // child func
  const handleCardBtn = useCallback(() => {
    console.log("child is clicked!");
  }, []);

  return (
    <div>
      <div>cnt: {cnt}</div>
      <button onClick={hanldleInc}>Increment</button>

      <div>cnt2: {cnt2}</div>
      <button onClick={hanldleInc2}>Increment</button>
      <Card onClick={handleCardBtn} counter={cnt} />
    </div>
  );
};

export default App;
