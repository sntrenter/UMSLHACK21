import React, { useState } from 'react';
import ReqMessage from './reqMessage'
import "./general.css"


interface Props {
    user?: string
}
let msgs = [
    "help me find a support group for people stuggling with classes",
    "anybody know who on campus is in charge of renting out example space",
    "Interested in a party! message for address!"
]


function ViewRequests(props: Props) {
   
      return (
          <div>
            {msgs.map((i)=>{return <ReqMessage  msg = {i}></ReqMessage>})}
          </div>

      );
    }
export default ViewRequests