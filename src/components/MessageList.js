import React, { PropTypes } from 'react'
import Message from './Message'

const MessageList = ({ messages }) => (
  <ul>
    {messages.map(message =>
      <Message
        key={message.id}
        user={message.user}
        text={message.text}
      />
    )}
  </ul>
)

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default MessageList
