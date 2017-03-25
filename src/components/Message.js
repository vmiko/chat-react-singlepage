import React, { PropTypes } from 'react'

const Message = ({ user, text }) => (
  <li>
    {user}: {text}
  </li>
)

Message.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Message
