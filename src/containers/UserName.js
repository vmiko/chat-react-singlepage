import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeUsername, addMessage } from '../actions'

let UserName = ({ id, user, dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e =>
        {
          e.preventDefault()
          if (!input.value.trim()) {
            input.value = 'Utilisateur '+ (id+1)
          }
          dispatch(changeUsername(id, input.value))
          dispatch(addMessage(undefined, user + " a changé son nom en " +input.value))
        }
      }>
        <input
          type="text"
          name="username"
          defaultValue={user}
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          OK
        </button>
      </form>
    </div>
  )
}
UserName = connect()(UserName)

UserName.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired
}

export default UserName
