import { PropTypes } from 'react'
import { connect } from 'react-redux'
import MessageList from '../components/MessageList'

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {
    messages: state.messages,
    chatUser: ownProps.chatUser
  }
}

const VisibleMessageList = connect(
  mapStateToProps
)(MessageList)

VisibleMessageList.propTypes = {
  chatUser: PropTypes.string.isRequired,
}

export default VisibleMessageList
