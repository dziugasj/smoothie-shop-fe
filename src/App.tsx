import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  async function doSfuff() {
    const response = await fetch('http://localhost:5000/api/v1/products');
    const data = await response.json();
    console.log('Do stuff');

  } 

  return (
    <div className="App">
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

      <button className='btn' onClick={doSfuff}>
        Confirm
      </button>

    </div>
  );
}

export default App;
