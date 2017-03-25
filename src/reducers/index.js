import { combineReducers } from 'redux'
import messages from './messages'
import chats from './chats'

const chatApp = combineReducers({
  messages,
  chats
})

export default chatApp
