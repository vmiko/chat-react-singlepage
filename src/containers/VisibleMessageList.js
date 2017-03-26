import { PropTypes } from 'react'
import { connect } from 'react-redux'
import MessageList from '../components/MessageList'

const mapStateToProps = (state, ownProps) => {

  return {
    messages: state.messages,
    chatUserId: ownProps.userid,
    users: state.users
  }
}

const VisibleMessageList = connect(
  mapStateToProps
)(MessageList)

VisibleMessageList.propTypes = {
  userid: PropTypes.number.isRequired,
}

export default VisibleMessageList
