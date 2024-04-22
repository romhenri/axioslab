import React from "react";
import axios from "axios";
import StatusLight from "../components/StatusLight";

export const Request = () => {
  const [status, setStatus] = React.useState("red");
  const [sources, setSources] = React.useState([]);

  return (
    <section
    className=""
  >
    <div className="flex flex-col items-center gap-4 m-8">

    <StatusLight
      status={status}
      size={9}
    />
    
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded
      active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs
      "
      onClick={() => {
        setStatus("loading");
        const source = axios.CancelToken.source();
        setSources(prevSources => [...prevSources, source]);
        axios.get(
          "https://hub.dummyapis.com/delay?seconds=3",
          {cancelToken: source.token}
        )

        .then((response) => {
          console.log(response);
          setStatus("success");
        })
        .catch(thrown => {
          if (axios.isCancel(thrown)) {
            setStatus("canceled");
          } else {
            // Handle other errors
          }
        });
      }}
    >
      Request
    </button>
    <button
      className="py-2 px-4 border text-xs bg-slate-400"
      onClick={() => {
        sources.forEach(source => {
          source.cancel('Operation canceled by the user.');
        });
        setSources([]);
      }}
    >
      Cancel
    </button>
    </div>
  </section>
  )
};

export default Request;