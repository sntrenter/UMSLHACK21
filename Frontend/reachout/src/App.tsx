import React, { useState, useEffect, ReactComponentElement } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menubar from "./menubar";
import Account from "./account";

function App() {
  const [user, setUser] = useState("user1");
  const [menuSelect,setMenuSelect] = useState(1)
  useEffect(() => {
    console.log(user);
    console.log(menuSelect)
  });
  function returnMenu(num: any):any {
    switch(num){
      case 1:
        return <Account></Account>
      case 2:
        return <p>num 2</p>
      case 3:
        return <p>num 3</p>
      case 4:
        return <p>num 4</p>
    }
  }
  return (
    <div className="App">
      <Menubar passUser={setUser}></Menubar>
      <div className="container">
        <div onClick={()=>setMenuSelect(1)} className="box">Account</div>
        <div onClick={()=>setMenuSelect(2)} className="box">B</div>
        <div onClick={()=>setMenuSelect(3)} className="box">C</div>
        <div onClick={()=>setMenuSelect(4)} className="box">D</div>
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
