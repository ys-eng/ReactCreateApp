import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
        <button 
          className="ring-4 
          font-bold 
          p-2 
          mt-4 
          bg-blue-600 
          hover:bg-blue-400 
          focus:outline-none 
          focus:ring-blue-400 
          focus:ring-opacity-75"
        >
          ゼニガメ
        </button>
      </header>
    </div>
  );
}

export default App;
