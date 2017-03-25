import React from 'react';
import VisibleMessageList from '../containers/VisibleMessageList'
import AddMessage from '../containers/AddMessage'

const Chat = () => (
  <div className="Chat">
    <VisibleMessageList />
    <AddMessage />
  </div>
)

export default Chat;
