import React, { PropTypes } from 'react'
import { Col, Panel } from 'react-bootstrap'
import Message from './Message'
import '../styles/css/MessageList.css'

const MessageList = ({ messages, chatUserId, users }) => (
  <Col xs={12} md={12} className="message-list">
    <Panel className="message-list-panel">
      {messages.map(message => (
          <Message
            key={message.id}
            username={users[message.userid].name}
            text={message.text}
            isChatUserAuthor={chatUserId === message.userid}
          />
        )
      )}
    </Panel>
  </Col>
)

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    userid: PropTypes.number,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,

  chatUserId: PropTypes.number.isRequired,

  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default MessageList
