import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Menubar from './menubar' 

function App() {
  const [user, setUser] = useState("user1");
  useEffect(() => {
    console.log(user);
  });
  return (
    <div className="App">
      <Menubar passUser={setUser} ></Menubar> 
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
