import React, { useState } from "react";
import './chatwindow.css'

interface Props {
  msgs: Array<any>;
}
//  { sender: "hello1" },
//{ helper: "test2" },
function ChatMessages(props: Props) {
    //console.log(props.msgs);
  return (
    <div className=""> 
        {props.msgs.map((i)=>{
            if(i.hasOwnProperty("sender")){
                return <div className="mymsg">{i.sender}</div>
            }else{
                return <div className="othermsg">{i.helper}</div>
            }
        })}
    </div>
  );
}
export default ChatMessages;