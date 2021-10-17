import React, { useState,useEffect } from 'react';
import ReqMessage from './reqMessage'
import "./general.css"


interface Props {
    user?: string
}



function ViewRequests(props: Props) {
    const [messages,setMessages] = useState([
        "help me find a support group for people stuggling with classes",
        "anybody know who on campus is in charge of renting out example space",
        "Interested in a party! message for address!"
    ])
    let msgs: Array<string> = []

    const gettopics = async () => {
        fetch("/reachout-service/topics")
          .then((response) => response.json())
          .then((data) => {
            console.log("topics data", data);
            msgs = []
            data.forEach((element: any) => { 
                msgs.push(element["desc"])
               
            });
            setMessages(msgs)
            console.log(msgs)

            //setUsers(data);
          });
      };
      useEffect(() => {
        gettopics()
      }, []);
      //function acceptrequest(msg: any){
      //  const requestOptions = {
      //      method: 'POST',
      //          headers: { 'Content-Type': 'application/json' },
      //          body: JSON.stringify({ 
      //            //id: ,
      //            helper_id: props.user,
      //          })
      //  };
      //  fetch('/reachout-service/topics', requestOptions)
      //}
   console.log("(API), request current help requests")
      return (
          <div>
            {messages.map((i)=>{return <ReqMessage  msg = {i}></ReqMessage>})}
          </div>

      );
    }
export default ViewRequests