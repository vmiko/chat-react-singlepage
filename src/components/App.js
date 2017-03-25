import React from 'react';
import logo from './logo.svg';
import './App.css';
import VisibleChats from '../containers/VisibleChats.js'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>

    <div className="container">
      <VisibleChats />
    </div>
  </div>
)

export default App;
