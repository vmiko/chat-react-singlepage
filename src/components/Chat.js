import React, { PropTypes } from 'react';
import VisibleMessageList from '../containers/VisibleMessageList'
import AddMessage from '../containers/AddMessage'
import UserName from '../containers/UserName'

const Chat = ({id, user}) => (
  <div id={"chat-"+id} className="chat">
    <UserName
      id={id}
      user={user}
    />
    <VisibleMessageList />
    <AddMessage
      user={user}
    />
  </div>
)

Chat.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired
}

export default Chat;
