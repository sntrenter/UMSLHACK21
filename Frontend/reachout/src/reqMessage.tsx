import React, { useState } from "react";
import './general.css'

interface Props {
  msg: string;
}

function ReqMessage(props: Props) {
  return (
    <div className="reqs">
        {console.log(props.msg)}
      <p> {props.msg}</p>
    </div>
  );
}
export default ReqMessage;
