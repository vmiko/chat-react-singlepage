import React, { PropTypes } from 'react'

const Message = ({ message }) => (
  <li>
    {message}
  </li>
)

Message.propTypes = {
  message: PropTypes.string.isRequired
}

export default Message
