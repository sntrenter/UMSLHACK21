import React, { useState } from "react";
import "./seemessages.css";

interface Props {
  user?: string;
}

function SeeMessages(props: Props) {
  return (
    <div>
      <div>
        <p>this page will displace the messages for {props.user}</p>
      </div>
      <div className="msgcontainer">
        <div className="msgone">left side</div>
        <div className="msgtwo">right side</div>
      </div>
    </div>
  );
}
export default SeeMessages;
