import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Col, FormControl, FormGroup, InputGroup, Button  } from 'react-bootstrap'
import { addMessage } from '../actions'

let AddMessage = ({ userid, dispatch }) => {

  let input

  return (
    <Col xs={12} md={12} className="add-message">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addMessage(userid, input.value))
        input.value = ''
      }}>
        <FormGroup controlId="form-add-message">
          <InputGroup>
            <FormControl
              componentClass="textarea"
              placeholder="Votre message ici..."
              inputRef={node => {
                input = node
              }}
              rows="1"
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
AddMessage = connect()(AddMessage)

AddMessage.propTypes = {
  userid: PropTypes.number.isRequired
}

export default AddMessage
