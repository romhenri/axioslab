import React from "react";
import axios from "axios";
import Button from "../components/base/Button";
import StatusLight from "../components/StatusLight";
import { useCancelToken } from "../hooks/useCancelToken";

export const Request = () => {
  const [status, setStatus] = React.useState("");
  const [statusCode, setStatusCode] = React.useState(null);
  const { newCancelToken, isCancel, cancelAll } = useCancelToken();

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
                console.log('Error: ', thrown);
                console.log(thrown.message);
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