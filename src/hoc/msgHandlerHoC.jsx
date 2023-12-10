import { useState } from "react";

export const msgHandlerHoC = (Component) => {
  const NewMsgHandler = (props) => {
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const msgHandler = (msg, type) => {
      if (type === "success") {
        setSuccessMsg(msg);
      } else if (type === "error") {
        setErrorMsg(msg);
      }

      setTimeout(() => {
        setSuccessMsg("");
        setErrorMsg("");
      }, 2000);
    };

    return (
      <Component
        {...props}
        successMsg={successMsg}
        errorMsg={errorMsg}
        msgHandler={msgHandler}
      />
    );
  };
  return NewMsgHandler;
};
