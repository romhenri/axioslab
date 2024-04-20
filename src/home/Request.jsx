import React from "react";
import axios from "axios";

const source = axios.CancelToken.source();

export const Request = () => {
  const [color, setColor] = React.useState("red");

  return (
    <section
    className=""
  >
    <div className="flex flex-col items-center gap-4">
      <div
      className={`w-12 h-12 rounded-full ${
        color === "red" ? "bg-red-500" 
        : color === "yellow" ? "bg-yellow-500"
        : color === "orange" ? "bg-orange-500"
        : color === "green" ? "bg-green-500" 
        : "bg-red-500"
      }`}
      >
      </div>
    
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded
      active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600
      "
      onClick={() => {
        setColor("yellow");
        axios.get(
          "https://hub.dummyapis.com/delay?seconds=3",
          {cancelToken: source.token}
        )

        .then((response) => {
          console.log(response);
          setColor("green");
        })
        .catch(thrown => {
          if (axios.isCancel(thrown)) {
            setColor("orange");
          } else {
            // Handle other errors
          }
        });
      }}
    >
      Request
    </button>
    <button
      onClick={() => {
        source.cancel('Operation canceled by the user.');
      }}
    >
      Cancel
    </button>
    </div>
  </section>
  )
};

export default Request;