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

export const changeUsername = (id, user) => ({
  type: 'CHANGE_USERNAME',
  id,
  user
})
