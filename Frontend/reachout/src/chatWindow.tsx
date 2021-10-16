import React, { useState } from "react";
import "./chatwindow.css";
import ChatMessages from "./chatMessages";
interface Props {
  //msg: string;
}

let msgs = [
  { sender: "hello1" },
  { helper: "test2" },
  { sender: "hello3" },
  { sender: "hello4" },
  { helper: "test5" },
  { sender: "hello6" },
  { sender: "hello7" },
];

function ChatWindow(props: Props) {
  return (
    <div className="chat">
      <div className="chatHeader">Chat Header</div>
      <div className="msgs">
        <ChatMessages msgs={msgs}></ChatMessages>
      </div>
      <div className="sendsection">send message</div>
    </div>
  );
}
export default ChatWindow;
