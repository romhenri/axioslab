import React from "react";
import axios from "axios";
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
      <div className="flex flex-col items-center gap-4 m-8">
        <h1>Request Axios with useCancelToken</h1>

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
  </section>
  )
};

export default Request;