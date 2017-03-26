import React, { PropTypes } from 'react'
import { Well } from 'react-bootstrap'
import '../styles/css/Message.css'

const Message = ({ username, text, isChatUserAuthor }) => {
  // Application message
  if(username === 'system') {
    return <span className="message system">{text}</span>
  }

  // User message
  if (isChatUserAuthor) {
    return (
      <div className="message user me">
        <span className="message-username">{username}</span>
        <Well className="message-text" bsSize="small"><p>{text}</p></Well>
      </div>
    )
  } else {
    return (
      <div className="message user others">
        <span className="message-username">{username}</span>
        <Well className="message-text" bsSize="small"><p>{text}</p></Well>
      </div>
    )
  }
}

Message.propTypes = {
  userid: PropTypes.number,
  text: PropTypes.string.isRequired,
  isChatUserAuthor: PropTypes.bool.isRequired
}

export default Message
