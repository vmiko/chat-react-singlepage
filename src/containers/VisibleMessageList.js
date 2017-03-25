import { connect } from 'react-redux'
import MessageList from '../components/MessageList'

const mapStateToProps = (state) => ({
  messages: state.messages
})

const VisibleMessageList = connect(
  mapStateToProps
)(MessageList)

export default VisibleMessageList
