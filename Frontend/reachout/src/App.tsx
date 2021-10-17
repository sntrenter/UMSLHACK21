import React, { useState, useEffect, ReactComponentElement } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menubar from "./menubar";
import Account from "./account";
import SeeMessages from "./seemessages";
import ViewRequests from "./viewRequests";
import { async } from "q";

function App() {
  const [user, setUser] = useState("1");
  const [users, setUsers] = useState({});
  const [menuSelect, setMenuSelect] = useState(1);
  const [helpReq, setHelpReq] = useState("");
  //http://localhost:8080/reachout-service/users

  const getusers = async () => {
    fetch("/reachout-service/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setUsers(data);
      });
  };

  useEffect(() => {
    getusers()
    console.log(user);
    console.log(menuSelect);
    console.log(users);
  }, []);
function submitHelpRequest() {
  console.log("(API)new help req:", helpReq)
  console.log("user id for req: ",user)
  const requestOptions = {
    method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          seeker_id: user,
          desc: helpReq,
        })
};
fetch('/reachout-service/topics', requestOptions)
        .then(response => response.json())
        //.then(data => this.setState({ postId: data.id }));
}

  function returnMenu(num: any): any {
    switch (num) {
      case 1:
        return <Account user={user}></Account>;
      case 2:
        return (
          <div>
            <p>What's bothering you right now</p>
            <input
              type="text"
              onChange={(e) => setHelpReq(e.target.value)}
            ></input>
            <button
              className="sbutton"
              onClick={() => submitHelpRequest()}
            >
              SUBMIT
            </button>
          </div>
        );
      case 3:
        return (
          <div>
            <p>Avalible Help requests</p>
            <ViewRequests user={user}></ViewRequests>
          </div>
        );
      case 4:
        return <SeeMessages user={user}></SeeMessages>;
    }
  }
  return (
    <div className="App">
      <div className="App-header">
        <Menubar users = {users} passUser={setUser}></Menubar>

        <div className="container">
          <div onClick={() => setMenuSelect(1)} className="box">
            Account
          </div>
          <div onClick={() => setMenuSelect(2)} className="box">
            Help Request
          </div>
          <div onClick={() => setMenuSelect(3)} className="box">
            Help Out
          </div>
          <div onClick={() => setMenuSelect(4)} className="box">
            See Messages
          </div>
        </div>
        <div>{returnMenu(menuSelect)}</div>
      </div>
    </div>
  );
}

export default App;
