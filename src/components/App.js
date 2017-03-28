import React from 'react';
import { Grid, Row, PageHeader } from 'react-bootstrap';
import '../styles/css/App.css';
import VisibleChats from '../containers/VisibleChats.js'
import githubLogo from '../images/GitHub-Mark-64px.png'

const App = () => (
  <div className="App">
    <PageHeader>Application de chat en React + Redux <small>by Victor Mikolajczyk</small></PageHeader>
    <div>
      <Grid>
        <Row className="show-grid">
          <VisibleChats />
        </Row>
      </Grid>
    </div>
    <hr/>
    <a href="https://github.com/zzedify/chat-react-singlepage">
      <img src={githubLogo} alt=""/>
    </a>
  </div>
)

export default App;
