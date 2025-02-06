import React from "react";
import axios from "axios";
import Title from "../components/base/Title";
import Button from "../components/base/Button";
import MsgBox from "../components/base/MsgBox";
import StatusLight from "../components/StatusLight";
import { useCancelToken } from "../hooks/useCancelToken";

export const Request = () => {
  const [status, setStatus] = React.useState("");
  const [statusCode, setStatusCode] = React.useState(null);
  const [message, setMessage] = React.useState("");
  const { newCancelToken, isCancel, cancelAll } = useCancelToken();

  return (
    <section
      className=""
    >
      <div className="flex flex-col items-center gap-8 m-8">
        <Title>
          Request Axios with useCancelToken
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

              axios.get(
                "https://hub.dummyapis.com/delay?seconds=3",
                { cancelToken: newCancelToken() }
              )

              .then((response) => {
                console.log(response);
                setStatus("success");
                setStatusCode(response.status);
                
              })
              .catch(error => {
                if (isCancel(error)) {
                  console.log('A requisição foi cancelada');
                } else {
                  setStatus("error");
                  setMessage(error.message);
                }
              });
            }}
          />
        <Button
          text="Cancel"
          type="secondary"
          onClick={() => {
            cancelAll();
          }}
        />
      </div>
    </div>
  </section>
  )
};

export default Request;