import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import Card from "./Card/Card";

const App = () => {
  const api = "http://localhost:3000/user";

  const [trigger, setTrigger] = useState(false);
  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);

  const getData = async () => {
    try {
      const { data } = await axios.get(api);
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  // before render
  // useLayoutEffect(() => {
  // if (trigger) {
  //   getData();
  // }
  // return () => {
  //   setTrigger(true);
  // };
  // }, []);

  // after render
  useEffect(() => {
    if (trigger) {
      getData();
    }

    // for having only one request in console
    return () => {
      setTrigger(true);
    };
  }, [trigger]);
  return (
    <>
      <div>
        {data.map((e, i) => {
          return <div key={i}>{e.name}</div>;
        })}
      </div>
      <div>
        <button className="border" onClick={() => setOpen((e) => !e)}>
          open
        </button>
        {open ? <Card /> : null}
      </div>
    </>
  );
};

export default App;
