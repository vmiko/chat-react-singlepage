import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import VisibleMessageList from '../containers/VisibleMessageList'
import AddMessage from '../containers/AddMessage'
import UserName from '../containers/UserName'

const Chat = ({id, userid}) => (
  <Col xs={12} md={6} id={"chat-"+id} className="chat">
    <UserName
      id={id}
      userid={userid}
    />
    <VisibleMessageList userid={userid} />
    <AddMessage
      userid={userid}
    />
  </Col>
)

Chat.propTypes = {
  id: PropTypes.number.isRequired,
  userid: PropTypes.number.isRequired
}

export default Chat;
