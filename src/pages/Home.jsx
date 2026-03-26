import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const api = "http://37.27.29.18:8001/api/categories";

  const [data, setData] = useState([]);

  async function gData() {
    try {
      const { data } = await axios.get(api);
      setData(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function pData(obj) {
    try {
      // await axios.post(api/{request},request_body);
      await axios.post(api, obj);
      gData();
    } catch (error) {
      console.error(error);
    }
  }
  async function dData(id) {
    try {
      // await axios.post(api/{request},request_body);
      await axios.delete(`${api}?id=${id}`);
      gData();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    gData();
  }, []);

  function handleSub(e) {
    e.preventDefault();

    const obj = { name: e.target["name"].value };

    pData(obj);
    e.target["name"].value = "";
  }

  function handleDel(id) {
    dData(id);
    console.log("a");
  }
  return (
    <div>
      <form onSubmit={handleSub}>
        <input type="text" name="name" className="border" />
        <button>Submit</button>
      </form>
      <div>
        {data.map((e) => {
          return (
            <div key={e.id} className="flex">
              <div>{e.name}</div>
              <button
                onClick={() => handleDel(e.id)}
                className="border border-red-500"
              >
                del
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
