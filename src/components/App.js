import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from '../components/Chat'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>

    <div className="container">
      <Chat />
      <Chat />
    </div>
  </div>
)

export default App;
