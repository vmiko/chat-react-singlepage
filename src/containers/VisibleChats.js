import { connect } from 'react-redux'
import Chats from '../components/Chats'

const mapStateToProps = (state) => ({
  chats: state.chats
})

const VisibleChats = connect(
  mapStateToProps
)(Chats)

export default VisibleChats
