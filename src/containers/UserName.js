import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Col, FormControl, FormGroup, InputGroup, Button } from 'react-bootstrap'
import { changeUsername, addMessage } from '../actions'

const mapStateToProps = (state) => ({
  users: state.users
})

let UserName = ({ id, userid, users, dispatch }) => {
  let input
  let username = users[userid].name

  return (
    <Col xs={12} md={12} className="change-username">
      <form onSubmit={e =>
        {
          e.preventDefault()
          if (!input.value.trim()) {
            input.value = 'Utilisateur '+ (id+1)
          }
          dispatch(changeUsername(userid, input.value))
          dispatch(addMessage(0, username + " a changé son nom en " +input.value))
        }
      }>
        <FormGroup controlId="form-username">
          <InputGroup>
            <FormControl type="text"
              placeholder={username}
              name="username"
              defaultValue={username}
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
UserName = connect(mapStateToProps)(UserName)

UserName.propTypes = {
  id: PropTypes.number.isRequired,
  userid: PropTypes.number.isRequired
}

export default UserName
