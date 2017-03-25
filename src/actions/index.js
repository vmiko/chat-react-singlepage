let nextMessageId = 0
export const addMessage = (user, text) => ({
  type: 'ADD_MESSAGE',
  id: nextMessageId++,
  user,
  text
})

let nextChatId = 0
export const addChat = (user) => ({
  type: 'ADD_CHAT',
  id: nextChatId++,
  user
})

let nextUserId = 0
export const addUser = (user) => ({
  type: 'ADD_USER',
  id: nextUserId++,
  user
})
