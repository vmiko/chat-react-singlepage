import React, { PropTypes } from 'react'
import { Col } from 'react-bootstrap'
import Message from './Message'
import '../styles/css/MessageList.css'

const MessageList = ({ messages, chatUser }) => (
  <Col xs={12} md={12} className="message-list">
    {messages.map(message =>
      <Message
        key={message.id}
        user={message.user}
        text={message.text}
        chatUser={chatUser}
      />
    )}
  </Col>
)

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  chatUser: PropTypes.string.isRequired
}

export default MessageList
