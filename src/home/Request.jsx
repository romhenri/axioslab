import React from "react";
import axios from "axios";
import Button from "../components/base/Button";
import StatusLight from "../components/StatusLight";

export const Request = () => {
  const [status, setStatus] = React.useState("red");
  const [statusCode, setStatusCode] = React.useState(null);
  const [sources, setSources] = React.useState([]);

  return (
    <section
      className=""
    >
      <div className="flex flex-col items-center gap-4 m-8">

        <StatusLight
          status={status}
          statusCode={statusCode}
          size={9}
        />
        
        <Button 
          text="Request"
          onClick={() => {
            setStatus("loading");
            setStatusCode();

            const source = axios.CancelToken.source();
            setSources(prevSources => [...prevSources, source]);
            axios.get(
              "https://hub.dummyapis.com/delay?seconds=3",
              {cancelToken: source.token}
            )

            .then((response) => {
              console.log(response);
              setStatus("success");
              setStatusCode(response.status);
              
            })
            .catch(thrown => {
              if (axios.isCancel(thrown)) {
                setStatus("canceled");
              } else {
                // Handle other errors
              }
            });
          }}
        />
      <Button
        text="Cancel"
        type="secondary"
        onClick={() => {
          sources.forEach(source => {
            source.cancel('Operation canceled by the user.');
          });
          setSources([]);
        }}
      >
        Cancel
      </Button>
    </div>
  </section>
  )
};

export default Request;