import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import VisibleMessageList from '../containers/VisibleMessageList'
import AddMessage from '../containers/AddMessage'
import UserName from '../containers/UserName'

const Chat = ({id, user}) => (
  <Col xs={12} md={6} id={"chat-"+id} className="chat">
    <UserName
      id={id}
      user={user}
    />
    <VisibleMessageList chatUser={user} />
    <AddMessage
      user={user}
    />
  </Col>
)

Chat.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired
}

export default Chat;
