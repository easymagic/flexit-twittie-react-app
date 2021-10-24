import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [a,b] = useState(10);
  
  const bindInc = ()=>{
    return {
      onClick:()=>b(a + 1)
    };
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button {...bindInc()}>Inc {a}</button>
      </header>
    </div>
  );
}

export default App;
