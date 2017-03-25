import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'

let AddMessage = ({ user, dispatch }) => {

  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addMessage(user, input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          OK
        </button>
      </form>
    </div>
  )
}
AddMessage = connect()(AddMessage)

AddMessage.propTypes = {
  user: PropTypes.string.isRequired
}

export default AddMessage
