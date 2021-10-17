import React, { useState,useEffect } from "react";
import "./seemessages.css";
import ReqMessage from "./reqMessage"
import ChatWindow from "./chatWindow"

interface Props {
  user: string;
}
let msgs = [
    "help me find a support group for people stuggling with classes",
    "anybody know who on campus is in charge of renting out example space",
    "Interested in a party! message for address!"
]



function SeeMessages(props: Props) {
    const [helperMessage, setHelperMessage] = useState("Please select a message!");
    console.log("(API)see message request related to user")
    useEffect(() => {
        console.log("(API) pull messages related to chat");
      });
  return (
    <div>
      <div>
        <p> this page will displace the messages for user with ID {props.user}</p>
      </div>
      <div className="msgcontainer">
        <div className="msgone">
            <div></div>
            <div>
            {msgs.map((i)=>{return <ReqMessage msgfunction = {setHelperMessage}
             msg = {i}></ReqMessage>})}

            </div>
        </div>
        <div className="msgtwo">
        <ChatWindow user = {props.user} helpermessage = {helperMessage}></ChatWindow>
        </div>
      </div>
    </div>
  );
}
export default SeeMessages;
