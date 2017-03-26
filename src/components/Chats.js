import React, { PropTypes } from 'react'
import Chat from './Chat'

const Chats = ({ chats }) => (
  <div className="chats">
    {chats.map(chat =>
      <Chat
        key={chat.id}
        id={chat.id}
        userid={chat.userid}
      />
    )}
  </div>
)

Chats.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    userid: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default Chats
