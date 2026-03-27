import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const api = "http://37.27.29.18:8001/api/to-dos";
  const apiImages = "http://37.27.29.18:8001/images";

  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get(api);
      setUsers(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {users.map((e) => {
          return (
            <div>
              <div>Name: {e.name}</div>
              <div>Description: {e.description}</div>
              <div>
                {e.images.map((e) => {
                  return (
                    <img
                      className="w-[150px] h-[150px]"
                      src={`${apiImages}/${e.imageName}`}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
