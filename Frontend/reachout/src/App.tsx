import React, { useState, useEffect, ReactComponentElement } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menubar from "./menubar";
import Account from "./account";
import SeeMessages from "./seemessages";
import ViewRequests from "./viewRequests";

function App() {
  const [user, setUser] = useState("user1");
  const [menuSelect, setMenuSelect] = useState(1);
  const [helpReq, setHelpReq] = useState("");
  useEffect(() => {
    console.log(user);
    console.log(menuSelect);
  });
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
              onClick={() => console.log("new help req:", helpReq)}
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
        <Menubar passUser={setUser}></Menubar>

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
