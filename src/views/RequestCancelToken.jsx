import React from "react";
import axios from "axios";
import Title from "../components/base/Title";
import Button from "../components/base/Button";
import MsgBox from "../components/base/MsgBox";
import StatusLight from "../components/StatusLight";

export const Request = () => {
  const [status, setStatus] = React.useState("");
  const [statusCode, setStatusCode] = React.useState(null);
  const [message, setMessage] = React.useState("");
  const [sources, setSources] = React.useState([]);

  return (
    <section
      className=""
    >
      <div className="flex flex-col items-center gap-8 m-8">
        <Title>
          Request Axios with Cancel Token
        </Title>

        <StatusLight
          status={status}
          statusCode={statusCode}
          size={9}
        />
        
        {
          message && (
            <MsgBox>
              {message}
            </MsgBox>
          )
        }

        <div className="flex-col flex gap-2">
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
                  setStatus("error");
                  console.log('Error: ', thrown);
                  console.log(thrown.message);
                  setMessage(thrown.message);
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
        />
        </div>
    </div>
  </section>
  )
};

export default Request;