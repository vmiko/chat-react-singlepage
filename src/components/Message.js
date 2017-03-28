import React, { PropTypes } from 'react'
import { Well } from 'react-bootstrap'
import '../styles/css/Message.css'

const Message = ({ username, text, isChatUserAuthor }) => {
  // Application message
  if(username === 'system') {
    return <span className="message system">{text}</span>
  }

  // User message
  return (
    <div className={"message user "+ (isChatUserAuthor ? "me" : "others")}>
      <span className="message-username">{username}</span>
      <Well className="message-text" bsSize="small"><span>{text}</span></Well>
    </div>
  )
}

Message.propTypes = {
  userid: PropTypes.number,
  text: PropTypes.string.isRequired,
  isChatUserAuthor: PropTypes.bool.isRequired
}

export default Message
