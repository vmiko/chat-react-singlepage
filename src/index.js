import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers'
import './index.css';


const persitedChats = {
  chats: [
    {id: 0, user: "Utilisateur 1"},
    {id: 1, user: "Utilisateur 2"},
    {id: 2, user: "Utilisateur 3"}
  ],
}

const store = createStore(reducer, persitedChats)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
