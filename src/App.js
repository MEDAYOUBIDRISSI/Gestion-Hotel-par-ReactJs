import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Getapi from './components/Getapi.js'

class App extends Component {
  render() 
  { 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> mai.
        </p>
        
        <p></p>
        <Getapi></Getapi>
      </header>
    </div>
  );
  }
}
export default App;
