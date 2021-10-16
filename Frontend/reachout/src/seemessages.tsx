import React, { useState } from "react";
import "./seemessages.css";
import ReqMessage from "./reqMessage"
import ChatWindow from "./chatWindow"

interface Props {
  user?: string;
}
let msgs = [
    "help me find a support group for people stuggling with classes",
    "anybody know who on campus is in charge of renting out example space",
    "Interested in a party! message for address!"
]



function SeeMessages(props: Props) {
  return (
    <div>
      <div>
        <p>this page will displace the messages for {props.user}</p>
      </div>
      <div className="msgcontainer">
        <div className="msgone">
            <div>Messages</div>
            <div>
            {msgs.map((i)=>{return <ReqMessage  msg = {i}></ReqMessage>})}

            </div>
        </div>
        <div className="msgtwo">
        <ChatWindow></ChatWindow>
        </div>
      </div>
    </div>
  );
}
export default SeeMessages;
