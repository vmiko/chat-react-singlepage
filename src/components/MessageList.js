import React, { PropTypes } from 'react'
import Message from './Message'

const MessageList = ({ messages }) => (
  <ul>
    {messages.map(message =>
      <Message
        key={message.id}
        {...message}
      />
    )}
  </ul>
)

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default MessageList
