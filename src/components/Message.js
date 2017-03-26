import React, { PropTypes } from 'react'
import { Well } from 'react-bootstrap'
import '../styles/css/Message.css'

const Message = ({ user, text, chatUser }) => {
  // Application message
  if(typeof user === 'undefined') {
    return <span className="message system">{text}</span>
  }

  // User message
  console.log("------------------------")
  console.log(chatUser)
  console.log(user)
  console.log("------------------------")

  if (chatUser === user) {
    return (
      <div className="message user me">
        <span className="message-username">{user}</span>
        <Well className="message-text" bsSize="small"><p>{text}</p></Well>
      </div>
    )
  } else {
    return (
      <div className="message user others">
        <span className="message-username">{user}</span>
        <Well className="message-text" bsSize="small"><p>{text}</p></Well>
      </div>
    )
  }

}

Message.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string.isRequired,
  chatUser: PropTypes.string.isRequired
}

export default Message
