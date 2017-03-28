import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers'
import './styles/css/index.css';
import 'bootstrap/dist/css/bootstrap.css';

const persitedData = {
  chats: [
    {id: 0, userid: 1},
    {id: 1, userid: 2}
  ],
  users: [
    {id: 0, name: "system"},
    {id: 1, name: "Utilisateur 1"},
    {id: 2, name: "Utilisateur 2"}
  ]
}

const store = createStore(reducer, persitedData)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
