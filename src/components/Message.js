import React, { PropTypes } from 'react'

const Message = ({ user, text }) => {
  // Application message
  if(typeof user === 'undefined') {
    return <li>{text}</li>
  }

  // User message
  return <li>{user}: {text}</li>
}

Message.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default Message
