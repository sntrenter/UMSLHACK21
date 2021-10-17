import React, { useState } from "react";
import './general.css'

interface Props {
  msg: string;
  msgfunction?: any;
  acceptreq?: any;
}

function ReqMessage(props: Props) {
    function clickmsg() {
        if(props.msgfunction !== undefined){
            props.msgfunction(props.msg);
        }
        if (props.acceptreq !== undefined){
            console.log("msg accept")
        }
    }
  return (
    <div className="reqs" onClick={()=>{clickmsg()}}>
      <p> {props.msg}</p>
    </div>
  );
}
export default ReqMessage;
