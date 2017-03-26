import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Col, FormControl, FormGroup, InputGroup, Button } from 'react-bootstrap'
import { changeUsername, addMessage } from '../actions'

let UserName = ({ id, user, dispatch }) => {
  let input

  return (
    <Col xs={12} md={12} className="change-username">
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
        <FormGroup controlId="form-username">
          <InputGroup>
            <FormControl type="text"
              placeholder={user}
              name="username"
              defaultValue={user}
              inputRef={node => {
                input = node
              }}
            />
            <InputGroup.Button>
              <Button type="submit">Ok</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    </Col>
  )
}
UserName = connect()(UserName)

UserName.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired
}

export default UserName
