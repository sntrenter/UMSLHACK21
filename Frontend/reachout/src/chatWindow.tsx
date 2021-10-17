import React, { useState,useEffect } from "react";
import "./chatwindow.css";
import ChatMessages from "./chatMessages";
interface Props {
  //msg: string;
  helpermessage: string;
  user: string;
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
    if(props.helpermessage === "Please select a message!"){
        msgs = []
    }else{
        msgs = [
            { sender: "Hello!" },
            { helper: "Are these Test Messages?" },
            { sender: "Yes they are" },
            { sender: "is this too meta?" },
            { helper: "Yes" },
            { sender: "wow" },
            { helper: "wow" },
          ]; 
    }
  return (
    <div className="chat">
      <div className="chatHeader">{props.helpermessage}</div>
      <div className="msgs">
        <ChatMessages msgs={msgs}></ChatMessages>
      </div>
      <div className="sendsection">
      <input type="text"
              onChange={()=>{}}
            ></input>
            <button
              className=""
              onClick={() =>{}}
            >
              SUBMIT
            </button> 
      </div>
    </div>
  );
}
export default ChatWindow;
