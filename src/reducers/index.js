import { combineReducers } from 'redux'
import messages from './messages'
import chats from './chats'
import users from './users'

const chatApp = combineReducers({
  messages,
  chats,
  users
})

export default chatApp
