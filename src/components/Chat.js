import React, { PropTypes } from 'react';
import VisibleMessageList from '../containers/VisibleMessageList'
import AddMessage from '../containers/AddMessage'

const Chat = ({id, user}) => (
  <div id={"chat-"+id} className="chat">
    <VisibleMessageList />
    <AddMessage
      key={user}
      user={user}
    />
  </div>
)

Chat.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired
}

export default Chat;
