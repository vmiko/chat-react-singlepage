import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import logo from './logo.svg';
import '../styles/css/App.css';
import VisibleChats from '../containers/VisibleChats.js'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>

    <div>
      <Grid>
        <Row className="show-grid">
          <VisibleChats />
        </Row>
      </Grid>
    </div>
  </div>
)

export default App;
