import React, { useState } from "react";
import './general.css'

interface Props {
  msg: string;
  msgfunction?: any;
}

function ReqMessage(props: Props) {
  return (
    <div className="reqs" onClick={()=>{if(props.msgfunction !== undefined){
        props.msgfunction(props.msg);
    }}}>
      <p> {props.msg}</p>
    </div>
  );
}
export default ReqMessage;
