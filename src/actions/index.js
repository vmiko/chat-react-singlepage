let nextMessageId = 0
export const addMessage = (userid, text) => ({
  type: 'ADD_MESSAGE',
  id: nextMessageId++,
  userid,
  text
})

let nextChatId = 0
export const addChat = (userid) => ({
  type: 'ADD_CHAT',
  id: nextChatId++,
  userid: userid
})

let nextUserId = 0
export const addUser = (name) => ({
  type: 'ADD_USER',
  id: nextUserId++,
  name: name
})

export const changeUsername = (id, name) => ({
  type: 'CHANGE_USERNAME',
  id,
  name
})
