import React, { useReducer } from "react";

const App = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  // state → current state
  // dispatch → function to trigger updates
  // reducer → function that updates state
  // initialState → initial value, write with obj

  //////

  function reducer(state, action) {
    if (action.key === "del") {
      return { data: state.data.filter((e) => e.id !== action.value) };
    } else if (action.key === "check") {
      const arr = state.data.map((e) => {
        if (e.id === action.value) {
          e = { ...e, status: !e.status };
        }
        return e;
      });

      return { data: arr };
    }
  }

  const initialState = {
    data: [
      { id: 0, name: "Ali", age: 12, status: false },
      { id: 2, name: "Yosin", age: 16, status: true },
      { id: 4, name: "John", age: 18, status: true },
    ],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleDelBtn(id) {
    dispatch({ key: "del", value: id });
  }

  function handleChekcBtn(id) {
    dispatch({ key: "check", value: id });
  }

  return (
    <div className="p-4">
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Complete</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {state.data.map((e) => {
            return (
              <tr key={e.id} className="p-4">
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>
                  <span
                    className={`${e.status ? "bg-blue-500" : "bg-red-500"} text-[#fff] font-[700] p-2`}
                  >
                    {e.status ? "ACTIVE" : "INACTIVE"}
                  </span>
                </td>
                <td>
                  <div className="flex  gap-3">
                    <button
                      className="px-2 py-1 bg-red-500"
                      onClick={() => handleDelBtn(e.id)}
                    >
                      Del
                    </button>
                    <button
                      className="px-2 py-1 bg-blue-500"
                      onClick={() => handleChekcBtn(e.id)}
                    >
                      Complete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
