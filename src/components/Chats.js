import React, { PropTypes } from 'react'
import Chat from './Chat'

const Chats = ({ chats }) => (
  <div className="chats">
    {chats.map(chat =>
      <Chat
        key={chat.id}
        id={chat.id}
        user={chat.user}
      />
    )}
  </div>
)

Chats.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default Chats
