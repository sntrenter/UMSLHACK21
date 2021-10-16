import React, { useState, useEffect, ReactComponentElement } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menubar from "./menubar";
import Account from "./account";
import SeeMessages from "./seemessages";

function App() {
  const [user, setUser] = useState("user1");
  const [menuSelect,setMenuSelect] = useState(1)
  const [helpReq,setHelpReq] = useState("")
  useEffect(() => {
    console.log(user);
    console.log(menuSelect)
  });
  function returnMenu(num: any):any {
    switch(num){
      case 1:
        return <Account user={user}></Account> 
      case 2:
        return  <div>
          <p>What's bothering you right now</p>
          <input type="text" onChange={e=>setHelpReq(e.target.value)}></input>
          <button onClick={()=>console.log("new help req:",helpReq)}>SUBMIT</button>
        </div>
      case 3:
        return <p>num 3</p>
      case 4:
        return  <SeeMessages user={user}></SeeMessages>
    }
  }
  return (
    <div className="App">
      <Menubar passUser={setUser}></Menubar>
      <div className="container">
        <div onClick={()=>setMenuSelect(1)} className="box">Account</div>
        <div onClick={()=>setMenuSelect(2)} className="box">Help Request</div>
        <div onClick={()=>setMenuSelect(3)} className="box">Help Out</div>
        <div onClick={()=>setMenuSelect(4)} className="box">See Messages</div>
      </div>
      <div>
        {returnMenu(menuSelect)}
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
