import React, { useState, useEffect } from "react";
import "./seemessages.css";
import ReqMessage from "./reqMessage";
import ChatWindow from "./chatWindow";

interface Props {
  user: string;
}
let msgs = [
  "help me find a support group for people stuggling with classes",
  "anybody know who on campus is in charge of renting out example space",
  "Interested in a party! message for address!",
];

function SeeMessages(props: Props) {
  const [helperMessage, setHelperMessage] = useState(
    "Please select a message!"
  );
  const [messages, setMessages] = useState([
    "help me find a support group for people stuggling with classes",
    "anybody know who on campus is in charge of renting out example space",
    "Interested in a party! message for address!",
  ]);
  let msgs: Array<string> = [];
  const gettopics = async () => {
    fetch("/reachout-service/chats/user/" + props.user)
      .then((response) => response.json())
      .then((data) => {
        console.log("topics data", data);
        msgs = [];
        data.forEach((element: any) => {
          msgs.push(element["topic"]["desc"]);
        });
        setMessages(msgs);
        console.log(msgs);

        //setUsers(data);
      });
  };
  useEffect(() => {
    gettopics();
  }, []);

  return (
    <div>
      <div>
        <p>
          {" "}
          this page will displace the messages for user with ID {props.user}
        </p>
      </div>
      <div className="msgcontainer">
        <div className="msgone">
          <div></div>
          <div>
            {messages.map((i) => {
              return (
                <ReqMessage msgfunction={setHelperMessage} msg={i}></ReqMessage>
              );
            })}
          </div>
        </div>
        <div className="msgtwo">
          <ChatWindow
            user={props.user}
            helpermessage={helperMessage}
          ></ChatWindow>
        </div>
      </div>
    </div>
  );
}
export default SeeMessages;
