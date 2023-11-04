import React from "react";

const ErrorInfo = ({ error }) => {
  return (
    <div>
      {<div className={"text-rose-700 text-center text-sm"}>{error}</div>}
    </div>
  );
};
export default ErrorInfo;
