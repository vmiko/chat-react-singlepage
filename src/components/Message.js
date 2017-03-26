import React, { PropTypes } from 'react'
import { Well } from 'react-bootstrap'
import '../styles/css/Message.css'

const Message = ({ user, text }) => {
  // Application message
  if(typeof user === 'undefined') {
    return <span className="message system">{text}</span>
  }

  // User message
  return (
    <div className="message user">
      <span className="message-username">{user}</span>
      <Well className="message-text" bsSize="small"><p>{text}</p></Well>
    </div>
  )
}

Message.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default Message
